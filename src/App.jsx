import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage/BookingPage";
import { useState } from "react";
import inputData from "./data/inputData";

function App() {
  const [formState, setFormState] = useState(
    inputData.page1.reduce((acc, input) => {
      acc[input.name] =
        input.type === "radio"
          ? ""
          : input.type === "dropdown"
          ? input.options[0]
          : "";
      return acc;
    }, {})
  );

  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/reservations"
              element={
                <BookingPage
                  formState={formState}
                  setFormState={setFormState}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
