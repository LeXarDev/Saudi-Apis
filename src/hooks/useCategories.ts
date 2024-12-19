import { useState, useEffect } from 'react';
import { categories } from '../data/apis';

export function useCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('سدايا');
  const [categoryData, setCategoryData] = useState<any[]>([]);

  useEffect(() => {
    const category = categories.find(cat => cat.title === selectedCategory);
    const apis = category ? category.items : [];
    setCategoryData(apis);
  }, [selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    categoryData,
    categories
  };
}