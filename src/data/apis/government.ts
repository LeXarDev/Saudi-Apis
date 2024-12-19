import { API } from '../../types/api';

export const governmentAPIs: API[] = [
  {
    name: 'هيئة الحكومة الرقمية',
    url: 'https://dga.gov.sa/en/e-participation/open-data',
    description: 'البيانات المفتوحة لهيئة الحكومة الرقمية',
    isOfficial: true,
    tags: ['حكومة رقمية', 'حكومي']
  },
  {
    name: 'منصة بلدي',
    url: 'https://balady.gov.sa/en/e_participation/11194',
    description: 'البيانات المفتوحة لمنصة بلدي',
    isOfficial: true,
    tags: ['بلديات', 'خدمات بلدية']
  },
  {
    name: 'وزارة البلديات والاسكان',
    url: 'https://momah.gov.sa/en/open-data',
    description: 'البيانات المفتوحة لوزارة البلديات والاسكان',
    isOfficial: true,
    tags: ['بلديات', 'إسكان']
  },
  {
    name: 'وزارة الصحة',
    url: 'https://www.moh.gov.sa/en/Ministry/OpenData/Pages/Open-Data-Library.aspx',
    description: 'البيانات المفتوحة لوزارة الصحة',
    isOfficial: true,
    tags: ['صحة', 'حكومي']
  },
  {
    name: 'وزارة البيئة والمياه والزراعة',
    url: 'https://www.mewa.gov.sa/en/InformationCenter/OpenData/Pages/Home.aspx',
    description: 'البيانات المفتوحة لوزارة البيئة والمياه والزراعة',
    isOfficial: true,
    tags: ['بيئة', 'زراعة', 'مياه']
  },
  {
    name: 'هيئة الاتصالات والفضاء والتقنية',
    url: 'https://www.cst.gov.sa/ar/opendata/Pages/default.aspx',
    description: 'البيانات المفتوحة لهيئة الاتصالات والفضاء والتقنية',
    isOfficial: true,
    tags: ['اتصالات', 'تقنية']
  },
  {
    name: 'الهيئة العامة للمساحة والمعلومات الجيومكانية',
    url: 'https://www.geosa.gov.sa/ar/About/Pages/Open_data.aspx',
    description: 'البيانات المفتوحة للهيئة العامة للمساحة',
    isOfficial: true,
    tags: ['مساحة', 'خرائط']
  },
  {
    name: 'وزارة الثقافة',
    url: 'https://www.moc.gov.sa/en/Modules/Pages/Qyias/OpenData',
    description: 'البيانات المفتوحة لوزارة الثقافة',
    isOfficial: true,
    tags: ['ثقافة', 'فنون']
  },
  {
    name: 'الهيئة الملكية لتطوير الرياض',
    url: 'https://opendata.rcrc.gov.sa/explore/',
    description: 'البيانات المفتوحة للهيئة الملكية لتطوير الرياض',
    isOfficial: true,
    tags: ['تطوير', 'مدن']
  },
  {
    name: 'وزارة الحج والعمرة',
    url: 'https://www.haj.gov.sa/OpenResources',
    description: 'البيانات المفتوحة لوزارة الحج والعمرة',
    isOfficial: true,
    tags: ['حج', 'عمرة']
  },
  {
    name: 'وزارة الخارجية',
    url: 'https://www.mofa.gov.sa/ar/OpenData/Pages/default.aspx',
    description: 'البيانات المفتوحة لوزارة الخارجية',
    isOfficial: true,
    tags: ['خارجية', 'دبلوماسية']
  }
];
