import { Navbar, Header, Skills, Footer, Projects, About } from './components';

export default function App() {

  return (
    <div className='bg-[#110f0f] text-white'>
        <Navbar />
        <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
