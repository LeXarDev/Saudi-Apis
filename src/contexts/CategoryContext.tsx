import { createContext, useContext, ReactNode } from 'react';
import { useCategories } from '../hooks/useCategories';
import { API, APICategory } from '../types/api';

interface CategoryContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categoryData: API[];
  categories: APICategory[];
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const categoriesData = useCategories();

  return (
    <CategoryContext.Provider value={categoriesData}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
}
