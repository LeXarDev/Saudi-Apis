import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { API } from '../types/api';
import { categories } from '../data/apis';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: API[];
  popularSearches: string[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const popularSearches = ['حكومي', 'مالي', 'تعليم', 'صحة', 'بيانات مفتوحة', 'واثق'];

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<API[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results = categories.flatMap(category => 
      category.items.filter(api => {
        const matchName = api.name.toLowerCase().includes(query);
        const matchDescription = api.description?.toLowerCase().includes(query);
        const matchTags = api.tags?.some(tag => tag.toLowerCase().includes(query));
        return matchName || matchDescription || matchTags;
      })
    );

    setSearchResults(results);
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchResults,
      popularSearches
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
