import { API } from '../../types/api';
import { Landmark } from 'lucide-react';

export const financialAPIs: API[] = [
  {
    name: 'البنك المركزي السعودي',
    url: 'https://www.sama.gov.sa/en-US/EconomicReports/Pages/ServiceDocument.aspx',
    description: 'خدمات وبيانات البنك المركزي السعودي',
    icon: Landmark,
    isOfficial: true,
    tags: ['بنوك', 'مالي']
  },
  {
    name: 'وزارة المالية',
    url: 'https://www.mof.gov.sa/en/generalservcies/open-data/Pages/default.aspx',
    description: 'البيانات المفتوحة لوزارة المالية',
    icon: Landmark,
    isOfficial: true,
    tags: ['حكومي', 'مالي']
  },
  {
    name: 'منصة اعتماد',
    url: 'https://portal.etimad.sa/en-us/ecollaboration/indexopendatarequest',
    description: 'المركز الوطني لنظم الموارد الحكومية',
    icon: Landmark,
    isOfficial: true,
    tags: ['موارد', 'حكومي']
  },
  {
    name: 'بنك الراجحي',
    url: 'https://developer.alrajhibank.com.sa/open-banking/APIGuides',
    description: 'واجهات برمجة الخدمات المصرفية المفتوحة',
    icon: Landmark,
    tags: ['بنوك', 'مالي']
  },
  {
    name: 'هيئة السوق المالية',
    url: 'https://opendata.cma.org.sa/Pages/default.aspx',
    description: 'البيانات المفتوحة لهيئة السوق المالية',
    icon: Landmark,
    isOfficial: true,
    tags: ['سوق مالي', 'حكومي']
  }
];