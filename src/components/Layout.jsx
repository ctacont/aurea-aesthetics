import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComingSoonGate from '@/components/ComingSoonGate';
import StickyBookingButton from '@/components/StickyBookingButton';

export default function Layout() {
  return (
    <ComingSoonGate>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBookingButton />
    </ComingSoonGate>
  );
}