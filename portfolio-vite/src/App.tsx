import React, { useState } from 'react';
import Header from '../../portfolio-vite/src/components/Header';
import Footer from '../../portfolio-vite/src/components/Footer';
import Home from '../../portfolio-vite/src/pages/Home';
import Loader from '../../portfolio-vite/src/components/Loader';
import Contact from '../../portfolio-vite/src/pages/Contact';
import About from '../../portfolio-vite/src/pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onFinish={handleFinishLoading} />
      ) : (
        <div>
          <div id="top"></div>
          <Header />
          <main>
            <section id="home" className="h-screen bg-blue-100">
              <Home />
            </section>
            <section id="about" className="bg-[#f5f1e4]">
              <About />
            </section>
            <section id="portfolio" className="bg-[#f5f1e4]">
              <Portfolio />
            </section>
            <section id="skill" className="bg-[#f5f1e4]">
              <Skills />
            </section>
            <section id="contact" className="bg-[#f5f1e4]">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
