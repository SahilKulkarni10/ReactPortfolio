
import "./app.scss";
import Contact from "./components/contact/Contact";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

import Portfolio from "./components/portfolio/Portfolio";


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      
    
      <Portfolio/>
     
      
   
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
