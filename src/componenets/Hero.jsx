
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Service from './Service';
 
const Hero = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="Projects">
        <Projects />
      </section>
    </div>
  );
};

export default Hero;
