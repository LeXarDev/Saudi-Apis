import { ThemeToggle } from './ThemeToggle';
import { Database, Github, Twitter, Share2, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'منصة واجهات البرمجة المفتوحة',
          text: 'تصفح مجموعة شاملة من واجهات البرمجة والبيانات المفتوحة في المملكة العربية السعودية',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <header className="fixed top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 space-x-reverse">
          <a href="/" className="flex items-center space-x-2 space-x-reverse hover:opacity-80 transition-opacity">
            <Database className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              منصة واجهات البرمجة المفتوحة
            </h1>
          </a>
        </div>

        <div className="flex items-center space-x-4 space-x-reverse">
          <button
            onClick={handleShare}
            className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="مشاركة"
          >
            <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            {showShareTooltip && (
              <div className="absolute bottom-full right-0 mb-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-lg whitespace-nowrap">
                تم نسخ الرابط!
              </div>
            )}
          </button>

          <a
            href="https://github.com/LeXarDev/Saudi-Apis/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="التوثيق"
          >
            <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </a>

          <a
            href="https://github.com/LeXarDev/Saudi-Apis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://x.com/LeXarDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-[#1DA1F2] transition-colors" />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}