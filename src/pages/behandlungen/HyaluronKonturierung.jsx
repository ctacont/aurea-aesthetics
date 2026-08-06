import React from 'react';
import CategoryPageLayout from '@/components/treatment/CategoryPageLayout';
import { CATEGORIES } from '@/lib/categoryContent';

export default function HyaluronKonturierung() {
  return <CategoryPageLayout category={CATEGORIES['hyaluron-konturierung']} />;
}