import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSettings } from '@/lib/useSite';
import AdminPasswordGate, { hasAdminSession } from '@/components/AdminPasswordGate';

const Fallback = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

export default function AdminRoute() {
  const { settings, isLoading } = useSettings();
  const [authed, setAuthed] = useState(hasAdminSession());

  if (isLoading) return <Fallback />;

  // Bootstrap: no password set yet → open access for initial setup.
  if (!settings?.admin_password) return <Outlet />;

  if (authed) return <Outlet />;

  return <AdminPasswordGate onSuccess={() => setAuthed(true)} />;
}