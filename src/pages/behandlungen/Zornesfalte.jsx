import React from 'react';
import SubTreatmentLayout from '@/components/treatment/SubTreatmentLayout';
import { SUB_TREATMENTS } from '@/lib/subTreatments';

export default function Zornesfalte() {
  return <SubTreatmentLayout data={SUB_TREATMENTS.zornesfalte} />;
}