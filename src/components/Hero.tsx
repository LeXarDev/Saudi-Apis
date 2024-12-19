import { Database, Search, ArrowRight } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export function Hero() {
  const { searchQuery, setSearchQuery, popularSearches } = useSearch();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32 pb-24">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] bg-[size:75px_75px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex p-4 mb-8 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg backdrop-blur-sm">
              <Database className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              واجهات البرمجة والبيانات المفتوحة
              <span className="block text-blue-600 dark:text-blue-400">في المملكة العربية السعودية</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              اكتشف وتصفح مجموعة شاملة من واجهات البرمجة والبيانات المفتوحة
              <br />
              لتطوير تطبيقات وحلول مبتكرة
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto animate-fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن واجهات البرمجة..."
                  className="w-full px-12 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>بحث شائع:</span>
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}