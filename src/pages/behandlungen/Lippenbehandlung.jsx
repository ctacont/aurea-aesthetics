import React from 'react';
import SubTreatmentLayout from '@/components/treatment/SubTreatmentLayout';
import { SUB_TREATMENTS } from '@/lib/subTreatments';

export default function Lippenbehandlung() {
  return <SubTreatmentLayout data={SUB_TREATMENTS.lippenbehandlung} />;
}