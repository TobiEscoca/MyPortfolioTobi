import "./App.css";
import Navbar from "./UI/Navbar";
import { Hero } from "./UI/Hero";
import Skills from "./UI/Skills";
import Experience from "./UI/Experience";
import Footer from "./UI/Footer";

const App = () => {
  return (
    <div className="bg-gray-900 scroll-smooth">
      <div className="bg-cover bg-center min-w-full">
        <Navbar />
        <Hero />
      </div>

      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
