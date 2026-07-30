import React, { useState } from 'react';
import { useSettings } from '@/lib/useSite';
import GoldButton from '@/components/GoldButton';
import { Input } from '@/components/ui/input';
import Seo from '@/components/Seo';
import { LOGO } from '@/lib/site';

const SESSION_KEY = 'aurea_admin_auth';

export function hasAdminSession() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function AdminPasswordGate({ onSuccess }) {
  const { settings, isLoading } = useSettings();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expectedUser = settings?.admin_username;
    const expectedPw = settings?.admin_password;
    const userOk = !expectedUser || username === expectedUser;
    const pwOk = expectedPw && password === expectedPw;
    if (userOk && pwOk) {
      try { sessionStorage.setItem(SESSION_KEY, 'true'); } catch {}
      onSuccess?.();
    } else {
      setError('Falsche Zugangsdaten');
    }
  };

  return (
    <>
      <Seo title="Admin-Zugang | Aurea Aesthetics" noindex path="/admin" />
      <div className="flex min-h-[100svh] items-center justify-center bg-[#F4F1EE] px-6">
        <div className="w-full max-w-sm text-center">
          <img src={LOGO} alt="Aurea Aesthetics" className="mx-auto h-12 w-auto" />
          <h1 className="mt-10 font-heading text-4xl font-light">Admin-Zugang</h1>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
            <Input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(''); }}
              placeholder="Benutzername"
              autoComplete="username"
              className="h-12 rounded-none border-border bg-white"
              autoFocus
              disabled={isLoading}
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="Passwort"
              autoComplete="current-password"
              className="h-12 rounded-none border-border bg-white"
              disabled={isLoading}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <GoldButton type="submit" tone="primary" className="w-full">
              Zugang
            </GoldButton>
          </form>
        </div>
      </div>
    </>
  );
}