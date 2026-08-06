import React from 'react';
import SubTreatmentLayout from '@/components/treatment/SubTreatmentLayout';
import { SUB_TREATMENTS } from '@/lib/subTreatments';

export default function Kraehenfuesse() {
  return <SubTreatmentLayout data={SUB_TREATMENTS.kraehenfuesse} />;
}