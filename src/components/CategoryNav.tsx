import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useCategoryContext } from '../contexts/CategoryContext';

export function CategoryNav() {
  const [isSticky, setIsSticky] = useState(false);
  const { selectedCategory, setSelectedCategory, categories } = useCategoryContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
  };

  return (
    <nav className={`sticky top-16 z-40 transition-all duration-300 ${
      isSticky ? 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80' : 'bg-white dark:bg-gray-900'
    } border-b border-gray-200 dark:border-gray-800`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6 space-x-reverse py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => handleCategoryClick(category.title)}
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap
                ${selectedCategory === category.title
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.title}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                selectedCategory === category.title ? 'transform rotate-180' : ''
              }`} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}