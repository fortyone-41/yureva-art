import "./App.scss";
import { Nav } from "./redesign/Nav";
import { Hero } from "./redesign/Hero";
import { About } from "./redesign/About";
import { Works } from "./redesign/Works";
import { Series } from "./redesign/Series";
import { Process } from "./redesign/Process";
import { Contact } from "./redesign/Contact";

const App = () => {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <About />
        <Works />
        <Series />
        <Process />
        <Contact />
      </main>
    </div>
  );
};

export default App;
