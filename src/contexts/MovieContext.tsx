import { createContext, PropsWithChildren, useContext } from 'react';
import movieData from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface MovieContextType {
  movies: Movie[];
  toggleBookmark: (movie: Movie) => void;
}

const defaultContextValue: MovieContextType = {
  movies: [],
  toggleBookmark: () => {},
};

export const MovieContext =
  createContext<MovieContextType>(defaultContextValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useMovies = () => useContext(MovieContext);

export function MovieProvider({ children }: PropsWithChildren) {
  // Local storage hook
  const [movies, setMovies] = useLocalStorage<Movie[]>(movieData, 'movies');

  function toggleBookmark(movieToToggle: Movie) {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.title === movieToToggle.title) {
          return { ...movie, isBookmarked: !movie.isBookmarked };
        } else {
          return movie;
        }
      });
    });
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        toggleBookmark,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
