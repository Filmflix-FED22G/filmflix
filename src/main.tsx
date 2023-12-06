import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import BookmarkPage from './pages/BookmarkPage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import HomePage from './pages/HomePage.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/details/:title/" element={<DetailsPage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
      <Route path="*" element={'Not found'}></Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
