import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loader from './components/Loader';
import Contact from './pages/Contact';
import About from './pages/About';

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
