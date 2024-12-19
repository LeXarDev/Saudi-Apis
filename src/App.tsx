import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { Header } from './components/Header';
import { APICard } from './components/APICard';
import { Footer } from './components/Footer';
import { CategoryProvider, useCategoryContext } from './contexts/CategoryContext';
import { SearchProvider, useSearch } from './contexts/SearchContext';
import { SearchResults } from './components/SearchResults';

function MainContent() {
  const { categoryData, selectedCategory, categories } = useCategoryContext();
  const { searchQuery } = useSearch();
  const currentCategory = categories.find(cat => cat.title === selectedCategory);

  // إذا كان هناك بحث نشط، لا نعرض محتوى الفئات
  if (searchQuery) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {currentCategory && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentCategory.title}
            </h2>
          </div>
        )}
        
        {categoryData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.map((api, index) => (
              <APICard key={index} api={api} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              لا توجد واجهات برمجية متاحة في هذه الفئة حالياً
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function App() {
  return (
    <CategoryProvider>
      <SearchProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <Hero />
          <CategoryNav />
          <SearchResults />
          <MainContent />
          <Footer />
        </div>
      </SearchProvider>
    </CategoryProvider>
  );
}