import { useState, useEffect } from 'react';
import { Navbar, Header, Skills, Footer, Projects, About } from './components';

export default function App() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-black/95 text-white z-10'>
      <Header />
      <div className={isNavbarSticky ? 'sticky top-0' : ''}>
        <Navbar />
      </div>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
