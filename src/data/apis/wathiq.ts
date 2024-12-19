import { API } from '../../types/api';

export const wathiqAPIs: API[] = [
  {
    name: 'شهادة المنشأ',
    url: 'https://developer.wathq.sa/ar/api/9',
    description: 'خدمة التحقق من شهادات المنشأ',
    isOfficial: true,
    tags: ['وثائق', 'شهادات']
  },
  {
    name: 'مجلس الغرف السعودية',
    url: 'https://developer.wathq.sa/ar/api/15',
    description: 'خدمات مجلس الغرف السعودية',
    isOfficial: true,
    tags: ['غرف تجارية', 'أعمال']
  },
  {
    name: 'الوكالات العدلية',
    url: 'https://developer.wathq.sa/ar/api/14',
    description: 'خدمات الوكالات العدلية',
    isOfficial: true,
    tags: ['عدل', 'قانوني']
  },
  {
    name: 'الصكوك العقارية',
    url: 'https://developer.wathq.sa/ar/api/13',
    description: 'خدمات الصكوك العقارية',
    isOfficial: true,
    tags: ['عقار', 'قانوني']
  },
  {
    name: 'القوائم المالية',
    url: 'https://developer.wathq.sa/ar/api/12',
    description: 'خدمات القوائم المالية للشركات',
    isOfficial: true,
    tags: ['مالي', 'شركات']
  },
  {
    name: 'الهوية الاعتبارية',
    url: 'https://developer.wathq.sa/ar/api/11',
    description: 'خدمات التحقق من الهوية الاعتبارية',
    isOfficial: true,
    tags: ['هوية', 'شركات']
  },
  {
    name: 'العلامة التجارية',
    url: 'https://developer.wathq.sa/ar/api/10',
    description: 'خدمات العلامات التجارية',
    isOfficial: true,
    tags: ['علامات تجارية', 'ملكية فكرية']
  },
  {
    name: 'السجلات التجارية',
    url: 'https://developer.wathq.sa/ar/api/19',
    description: 'خدمات السجلات التجارية عبر النفاذ التجاري الموحد',
    isOfficial: true,
    tags: ['سجل تجاري', 'أعمال']
  }
];