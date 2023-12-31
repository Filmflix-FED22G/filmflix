import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';

import CategoryContent from './components/CategoryContent.tsx';
import NotFound from './components/NotFound.tsx';
import './index.css';
import { MovieProvider } from './contexts/MovieContext.tsx';
import BookmarkPage from './pages/BookmarkPage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import HomePage from './pages/HomePage.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/details/:title/" element={<DetailsPage />} />
      <Route path="/categories" element={<CategoryPage />}>
        <Route path=":category" element={<CategoryContent />} />
      </Route>
      <Route path="/bookmarks" element={<BookmarkPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
);
