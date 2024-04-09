import { Navbar, Header, Skills, Footer, Projects, About } from './components';

export default function App() {

  return (
    <div className='bg-[#141212] text-white'>
        <Navbar />
        <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
