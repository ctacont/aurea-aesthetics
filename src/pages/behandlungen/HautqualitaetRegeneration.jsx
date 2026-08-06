import React from 'react';
import CategoryPageLayout from '@/components/treatment/CategoryPageLayout';
import { CATEGORIES } from '@/lib/categoryContent';

export default function HautqualitaetRegeneration() {
  return <CategoryPageLayout category={CATEGORIES['hautqualitaet-regeneration']} />;
}