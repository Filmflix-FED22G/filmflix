import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
      <h1>FILMFLIX!!</h1>
      <Outlet />
    </>
  );
}

export default App;
