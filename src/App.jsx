import Casestudies from "./components/casestudies/casestudies.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Processes from "./components/processes/processses.component";
import Services from "./components/services/services.component";
import Team from "./components/team/team.component";
import Testimonials from "./components/testimonials/testimonials.component";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Casestudies />
      <Processes />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
