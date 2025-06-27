import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero className="hero-wrapper" />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
