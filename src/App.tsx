import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import heroImage from '/img/hero-interstellar.png';

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Interstellar"
        quote="We're not meant to save the world. We're meant to leave it."
        imageUrl={heroImage}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
