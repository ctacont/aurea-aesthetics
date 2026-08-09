import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSettings } from '@/lib/useSite';
import ComingSoon from '@/components/ComingSoon';

export default function ComingSoonGate({ children }) {
  const { settings, isLoading } = useSettings();
  const { search } = useLocation();
  const preview = new URLSearchParams(search).get('preview') === '1';

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0A0A0A]">
        <div className="h-6 w-6 animate-spin rounded-full border border-white/20 border-t-[#C9AF80]" />
      </div>
    );
  }

  if (settings.coming_soon_mode && !preview) return <ComingSoon settings={settings} />;

  return children;
} 