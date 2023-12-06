import { Outlet } from 'react-router-dom';
import Footer from './pages/components/Footer';

function App() {
  return (
    <>
      <h1>FILMFLIX!!</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
