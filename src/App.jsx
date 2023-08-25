import Casestudies from "./components/casestudies/casestudies.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Processes from "./components/processes/processses.component";
import Services from "./components/services/services.component";
import Team from "./components/team/team.component";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Casestudies />
      <Processes />
      <Team />
      <Footer />
    </>
  );
}

export default App;
