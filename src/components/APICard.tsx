import { API } from '../types/api';
import { ExternalLink, Globe, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface APICardProps {
  api: API;
}

export function APICard({ api }: APICardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  // استخراج اسم النطاق من الرابط
  const domain = new URL(api.url).hostname;

  // محاولة الحصول على الأيقونة بأحجام مختلفة
  const getFaviconUrl = (size: number) => `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

  useEffect(() => {
    const loadImage = async () => {
      setIsLoading(true);
      setImageError(false);

      const sources = [
        getFaviconUrl(128), // نبدأ بأكبر حجم للحصول على جودة أفضل
        getFaviconUrl(64),
        getFaviconUrl(32),
        `https://${domain}/apple-touch-icon.png`,
        `https://${domain}/apple-touch-icon-precomposed.png`,
        `https://${domain}/favicon-32x32.png`,
        `https://${domain}/favicon-16x16.png`,
        `https://${domain}/favicon.ico`,
        getFaviconUrl(16)
      ];

      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 15000)
      );

      for (const src of sources) {
        try {
          await Promise.race([
            new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            }),
            timeout
          ]);
          setCurrentSrc(src);
          setIsLoading(false);
          return;
        } catch (error) {
          if (error instanceof Error && error.message === 'Timeout') {
            setImageError(true);
            setIsLoading(false);
            return;
          }
          continue;
        }
      }

      setImageError(true);
      setIsLoading(false);
    };

    loadImage();

    return () => {
      setIsLoading(false);
      setImageError(false);
    };
  }, [domain]);

  return (
    <div className="group">
      <a
        href={api.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900"
      >
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden">
            {isLoading ? (
              <Loader2 className="h-4 w-4 text-gray-400 animate-spin" />
            ) : imageError ? (
              <Globe className="h-4 w-4 text-gray-400" />
            ) : (
              <img
                src={currentSrc}
                alt={`${api.name} icon`}
                className="w-full h-full object-contain"
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <div className="flex-1 mr-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {api.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{domain}</p>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </div>
        {api.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {api.description}
          </p>
        )}
        {api.tags && api.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {api.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>
    </div>
  );
}