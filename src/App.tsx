import { Outlet } from 'react-router-dom';
import Hero from './components/Hero';
import heroImage from '/img/hero-interstellar.png';

function App() {
  return (
    <>
      <Hero
        title="Interstellar"
        quote="We're not meant to save the world. We're meant to leave it."
        imageUrl={heroImage}
      />
      <Outlet />
    </>
  );
}

export default App;
