import "../hero/hero.styles.css"
import hero_img from "../../assets/hero-illustration.png";
import amazom from "../../assets/amazon.jpg";
import dribble from "../../assets/dribble.jpg";
import hubspot from "../../assets/hubspot.jpg";
import notion from "../../assets/notion.jpg";
import netflix from "../../assets/netflix.jpg";
import zoom from "../../assets/zoom.jpg";

const Hero = () => {
  return (
    <main className="container">
      <section className="hero-section">
        <article className="hero__article">
          <h1 className="hero__title">
            Navigating the digital landscape for success
          </h1>
          <p className="hero__para">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="hero-btn">Book a consultation</button>
        </article>
        <img src={hero_img} alt="illustration" />
      </section>
      <div className="company-logos">
        <img src={amazom} alt="" />
        <img src={dribble} alt="" />
        <img src={hubspot} alt="" />
        <img src={notion} alt="" />
        <img src={netflix} alt="" />
        <img src={zoom} alt="" />
      </div>
    </main>
  );
};

export default Hero;
