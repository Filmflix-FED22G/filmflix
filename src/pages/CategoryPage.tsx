import CategoryDropdown from '../components/CategoryDropdown';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function CategoryPage() {
  useEffect(() => {
    document.title = 'Categories';
  }, []);
  return (
    <div>
      <CategoryDropdown />
      <Outlet />
    </div>
  );
}

export default CategoryPage;
