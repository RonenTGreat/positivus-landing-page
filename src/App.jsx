import Casestudies from "./components/casestudies/casestudies.component";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Processes from "./components/processes/processses.component";
import Services from "./components/services/services.component";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Casestudies />
      <Processes />
    </>
  );
}

export default App;
