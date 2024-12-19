import { useSearch } from '../contexts/SearchContext';
import { APICard } from './APICard';

export function SearchResults() {
  const { searchQuery, searchResults } = useSearch();

  if (!searchQuery) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {searchResults.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            نتائج البحث ({searchResults.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((api) => (
              <APICard key={api.name} api={api} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            لم يتم العثور على نتائج لـ "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
