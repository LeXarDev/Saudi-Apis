import { APICategory } from '../types/api';
import { sdaiaAPIs } from './apis/sdaia';
import { educationAPIs } from './apis/education';
import { financialAPIs } from './apis/financial';
import { commerceAPIs } from './apis/commerce';
import { wathiqAPIs } from './apis/wathiq';
import { governmentAPIs } from './apis/government';
import { Database, GraduationCap, Landmark, Building2, Scale, Building } from 'lucide-react';

export {
  sdaiaAPIs,
  educationAPIs,
  financialAPIs,
  commerceAPIs,
  wathiqAPIs,
  governmentAPIs
};

export const categories: APICategory[] = [
  {
    title: 'سدايا',
    items: sdaiaAPIs,
    icon: Database
  },
  {
    title: 'التعليم',
    items: educationAPIs,
    icon: GraduationCap
  },
  {
    title: 'المالية',
    items: financialAPIs,
    icon: Landmark
  },
  {
    title: 'التجارة',
    items: commerceAPIs,
    icon: Building2
  },
  {
    title: 'واثق',
    items: wathiqAPIs,
    icon: Scale
  },
  {
    title: 'الجهات الحكومية',
    items: governmentAPIs,
    icon: Building
  }
];