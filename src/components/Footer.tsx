import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-600 dark:text-gray-400">
          <span>صنع بـ</span>
          <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
          <span>في المملكة العربية السعودية</span>
        </div>
      </div>
    </footer>
  );
}