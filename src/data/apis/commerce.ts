import { API } from '../../types/api';

export const commerceAPIs: API[] = [
  {
    name: 'هيئة المنشآت الصغيرة والمتوسطة',
    url: 'https://www.monshaat.gov.sa/ar/node/12768',
    description: 'بيانات ومعلومات المنشآت الصغيرة والمتوسطة',
    isOfficial: true,
    tags: ['منشآت', 'أعمال']
  },
  {
    name: 'هيئة الزكاة والضريبة والجمارك',
    url: 'https://zatca.gov.sa/ar/PublicData/Pages/APIs.aspx',
    description: 'خدمات الزكاة والضريبة والجمارك',
    isOfficial: true,
    tags: ['ضرائب', 'جمارك']
  },
  {
    name: 'وزارة التجارة',
    url: 'https://mc.gov.sa/en/OpenData/Pages/default.aspx',
    description: 'البيانات المفتوحة لوزارة التجارة',
    isOfficial: true,
    tags: ['تجارة', 'حكومي']
  },
  {
    name: 'زد',
    url: 'https://docs.zid.dev/',
    description: 'منصة زد للتجارة الإلكترونية',
    tags: ['تجارة إلكترونية', 'منصات']
  },
  {
    name: 'سلة',
    url: 'https://docs.salla.dev/',
    description: 'منصة سلة للتجارة الإلكترونية',
    tags: ['تجارة إلكترونية', 'منصات']
  }
];