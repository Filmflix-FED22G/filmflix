import CategoryDropdown from '../components/CategoryDropdown';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

// This component renders the category dropdown menu
// The outlet renders the content of the selected category
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
