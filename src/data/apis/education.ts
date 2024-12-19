import { API } from '../../types/api';

export const educationAPIs: API[] = [
  {
    name: 'وزارة التعليم',
    url: 'https://moe.gov.sa/en/knowledgecenter/dataandstats/pages/opendata.aspx',
    description: 'البيانات المفتوحة لوزارة التعليم',
    isOfficial: true,
    tags: ['تعليم', 'حكومي']
  },
  {
    name: 'هيئة تقويم التعليم والتدريب',
    url: 'https://www.etec.gov.sa/ar/page/odata',
    description: 'بيانات تقويم التعليم والتدريب',
    isOfficial: true,
    tags: ['تقويم', 'تعليم']
  },
  {
    name: 'جامعة الملك فيصل',
    url: 'https://www.kfu.edu.sa/ar/Pages/OpenData.aspx',
    description: 'البيانات المفتوحة لجامعة الملك فيصل',
    isOfficial: true,
    tags: ['جامعة', 'تعليم']
  },
  {
    name: 'جامعة الإمام عبدالرحمن بن فيصل',
    url: 'https://www.iau.edu.sa/ar/open-data',
    description: 'البيانات المفتوحة لجامعة الإمام عبدالرحمن بن فيصل',
    isOfficial: true,
    tags: ['جامعة', 'تعليم']
  },
  {
    name: 'الجامعة السعودية الالكترونية',
    url: 'https://seu.edu.sa/ar/opendata/',
    description: 'البيانات المفتوحة للجامعة السعودية الالكترونية',
    isOfficial: true,
    tags: ['جامعة', 'تعليم إلكتروني']
  },
  {
    name: 'المركز الوطني للتعليم الالكتروني',
    url: 'https://nelc.gov.sa/node/2821',
    description: 'البيانات المفتوحة للمركز الوطني للتعليم الالكتروني',
    isOfficial: true,
    tags: ['تعليم إلكتروني', 'حكومي']
  },
  {
    name: 'المؤسسة العامة للتدريب التقني والمهني',
    url: 'https://tvtc.gov.sa/ar/OpenData/Pages/default.aspx',
    description: 'البيانات المفتوحة للمؤسسة العامة للتدريب التقني والمهني',
    isOfficial: true,
    tags: ['تدريب', 'تعليم مهني']
  }
  // ... Add other education APIs
];