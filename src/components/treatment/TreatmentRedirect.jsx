import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

// Redirect shell for a migrated treatment/category page — old URL stays live
// but forwards to its anchor on the consolidated /behandlungen experience.
export default function TreatmentRedirect({ anchor }) {
  const navigate = useNavigate();
  const { langPath } = useLanguage();

  useEffect(() => {
    navigate(`${langPath('/behandlungen')}#${anchor}`, { replace: true });
    const timer = setTimeout(() => {
      document.getElementById(anchor)?.scrollIntoView({ block: 'start' });
    }, 350);
    return () => clearTimeout(timer);
  }, [anchor, navigate, langPath]);

  return null;
}