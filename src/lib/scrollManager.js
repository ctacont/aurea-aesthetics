// Central scroll controller: a single passive window scroll listener driving
// one shared requestAnimationFrame tick, so any number of parallax/scroll
// effects across a page share exactly one listener + one rAF loop instead of
// registering their own (which is what caused pages with several parallax
// elements — e.g. Home, with Hero, Philosophy, LocationSection and multiple
// doctor portraits — to run 4-5+ independent scroll listeners at once).
const listeners = new Set();
let ticking = false;
let attached = false;

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    listeners.forEach((cb) => cb());
    ticking = false;
  });
}

function ensureAttached() {
  if (attached || typeof window === 'undefined') return;
  window.addEventListener('scroll', onScroll, { passive: true });
  attached = true;
}

function ensureDetached() {
  if (!attached || listeners.size > 0 || typeof window === 'undefined') return;
  window.removeEventListener('scroll', onScroll);
  attached = false;
}

/**
 * Subscribe a callback to the shared scroll tick. Returns an unsubscribe fn.
 * The underlying window listener is attached lazily on first subscriber and
 * removed once the last one unsubscribes.
 */
export function subscribeScroll(callback) {
  listeners.add(callback);
  ensureAttached();
  return () => {
    listeners.delete(callback);
    ensureDetached();
  };
}