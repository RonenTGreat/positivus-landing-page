import "./servives.styles.css";
import icon from "../../assets/go-icon.png";
import icon1 from "../../assets/go-icon-1.png";
import one from "../../assets/search.png";
import pay from "../../assets/pay.png";
import marketing from "../../assets/marketing.png";
import email from "../../assets/email.png";
import content from "../../assets/content.png";
import tracking from "../../assets/tracking.png";
import star from "../../assets/star.png";

const Services = () => {
  return (
    <section className="services-section container">
      <article className="services__header">
        <h2 className="sub-heading">Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </article>
      <div className="services__cards">
        {/* Card 1 */}
        <article className="card">
          <div className="card__details">
            <h3>Search engine</h3>
            <h3>optimization</h3>
            <a href="/#">
              <img src={icon} alt="" /> Learn more
            </a>
          </div>
          <img src={one} alt="" />
        </article>

        {/* Card 2 */}
        <article className="card green-bg">
          <div className="card__details">
            <h3 className="white-bg">Pay-per-click</h3>
            <h3 className="white-bg">advertising</h3>
            <a href="/#">
              <img src={icon} alt="" /> Learn more
            </a>
          </div>
          <img src={pay} alt="" />
        </article>

        {/* Card 3 */}
        <article className="card black-bg">
          <div className="card__details">
            <h3 className="white-bg">Social Media</h3>
            <h3 className="white-bg">Marketing</h3>
            <a href="/#">
              <img src={icon1} alt="" /> Learn more
            </a>
          </div>
          <img src={marketing} alt="" />
        </article>

        {/* Card 4 */}
        <article className="card">
          <div className="card__details">
            <h3>Email</h3>
            <h3>Marketing</h3>
            <a href="/#">
              <img src={icon} alt="" /> Learn more
            </a>
          </div>
          <img src={email} alt="" />
        </article>

        {/* Card 5 */}
        <article className="card green-bg">
          <div className="card__details">
            <h3 className="white-bg">Content</h3>
            <h3 className="white-bg">Creation</h3>
            <a href="/#">
              <img src={icon} alt="" /> Learn more
            </a>
          </div>
          <img src={content} alt="" />
        </article>

        {/* Card 6 */}
        <article className="card black-bg">
          <div className="card__details">
            <h3>Analytics and </h3>
            <h3>Tracking</h3>
            <a href="/#">
              <img src={icon1} alt="" /> Learn more
            </a>
          </div>
          <img src={tracking} alt="" />
        </article>
      </div>
      <article className="proposal-card">
        <div>
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="hero-btn">Get your free proposal</button>
        </div>
        <img src={star} alt="" />
      </article>
    </section>
  );
};

export default Services;
