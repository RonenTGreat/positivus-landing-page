import "./servives.styles.css";
import icon from "../../assets/go-icon.jpg"
import one from "../../assets/search.png"

const Services = () => {
  return (
    <section className="services-section container">
      <article className="services__header">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </article>
      <div className="services__cards">
        <article className="card">
            <div className="card__details">
                <h3>Search engine</h3>
                <h3>optimization</h3>
                <a href="/#"><img src={icon} alt="" /> Learn more</a>
            </div>
            <img src={one} alt="" />
        </article>
        <article className="card">
            <div className="card__details">
                <h3>Search engine</h3>
                <h3>optimization</h3>
                <a href="/#"><img src={icon} alt="" /> Learn more</a>
            </div>
            <img src={one} alt="" />
        </article>
        <article className="card">
            <div className="card__details">
                <h3>Search engine</h3>
                <h3>optimization</h3>
                <a href="/#"><img src={icon} alt="" /> Learn more</a>
            </div>
            <img src={one} alt="" />
        </article>
        <article className="card">
            <div className="card__details">
                <h3>Search engine</h3>
                <h3>optimization</h3>
                <a href="/#"><img src={icon} alt="" /> Learn more</a>
            </div>
            <img src={one} alt="" />
        </article>
        <article className="card">
            <div className="card__details">
                <h3>Search engine</h3>
                <h3>optimization</h3>
                <a href="/#"><img src={icon} alt="" /> Learn more</a>
            </div>
            <img src={one} alt="" />
        </article>
        <article className="card">
            <div className="card__details">
                <h3>Search engine</h3>
                <h3>optimization</h3>
                <a href="/#"><img src={icon} alt="" /> Learn more</a>
            </div>
            <img src={one} alt="" />
        </article>
      </div>
    </section>
  );
};

export default Services;
