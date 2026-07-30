import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminPasswordGate, { hasAdminSession } from '@/components/AdminPasswordGate';

export default function AdminRoute() {
  const [authed, setAuthed] = useState(hasAdminSession());

  if (!authed) {
    return <AdminPasswordGate onSuccess={() => setAuthed(true)} />;
  }

  return <Outlet />;
}