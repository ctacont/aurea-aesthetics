import React from 'react';
import CategoryPageLayout from '@/components/treatment/CategoryPageLayout';
import { CATEGORIES } from '@/lib/categoryContent';

export default function Botulinumtoxin() {
  return <CategoryPageLayout category={CATEGORIES.botulinumtoxin} />;
}