import { createContext, PropsWithChildren, useContext } from 'react';
import { Movie } from '../../types/movieTypes';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookmarkContext = createContext(null as any);

export const useBookmarks = () => useContext(BookmarkContext);

export function BookmarkProvider({ children }: PropsWithChildren) {
  // Local storage hook
  const [bookmarks, setBookmarks] = useLocalStorage<Movie[]>([], 'bookmarks');

  function addBookmark(movie: Movie) {
    setBookmarks([...bookmarks, movie]);
  }

  function removeBookmark(movie: Movie) {
    setBookmarks(
      bookmarks.filter((bookmark) => bookmark.title !== movie.title),
    );
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
