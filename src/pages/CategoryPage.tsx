import CategoryDropdown from "../components/CategoryDropdown";
import { Outlet } from "react-router-dom";

function CategoryPage() {
  return (
    <div>
      <CategoryDropdown />
      <Outlet />
    </div>
  );
}

export default CategoryPage;
