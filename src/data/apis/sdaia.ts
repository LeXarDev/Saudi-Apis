import { API } from '../../types/api';

export const sdaiaAPIs: API[] = [
  {
    name: 'منصة البيانات المفتوحة',
    url: 'https://sdaia.gov.sa/ar/SDAIA/eParticipation/Pages/OpenData.aspx',
    description: 'البيانات المفتوحة من سدايا',
    isOfficial: true,
    tags: ['بيانات مفتوحة', 'حكومي']
  },
  {
    name: 'الواجهات البرمجية المباشرة',
    url: 'https://open.data.gov.sa/ar/pages/guidelines/real-time-api',
    description: 'واجهات برمجية مباشرة من منصة البيانات المفتوحة',
    isOfficial: true,
    tags: ['API', 'حكومي']
  }
];