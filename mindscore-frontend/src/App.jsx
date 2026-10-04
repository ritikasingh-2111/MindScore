import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PredictionForm from './components/PredictionForm.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PredictionForm />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </>
  );
}
