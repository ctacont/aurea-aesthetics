import React from 'react';
import { Circle, CircleDot } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isPrestige = theme === 'prestige';
  const Icon = isPrestige ? CircleDot : Circle;

  return (
    <button
      onClick={toggleTheme}
      title={isPrestige ? 'Prestige' : 'Classic'}
      aria-label={`Design wechseln — aktuell ${isPrestige ? 'Prestige' : 'Classic'}`}
      className="ml-4 shrink-0 transition-opacity duration-300 hover:opacity-70"
    >
      <Icon
        className={`h-5 w-5 ${isPrestige ? 'text-[#C9AF80]' : 'text-neutral-400'}`}
        strokeWidth={1}
      />
    </button>
  );
}