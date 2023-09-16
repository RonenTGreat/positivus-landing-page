import "./testimonialItem.component.css";
import bubble from "../../assets/Bubble.png";

const TestimonialItem = ({ name, title, desc }) => {
  return (
    <section className="testimonial-item">
      <div>
        <img src={bubble} />
        <p className="description">{desc}</p>
      </div>
      <div className="person-wrapper">
        <h4 className="name">{name}</h4>
        <p className="title">{title}</p>
      </div>
    </section>
  );
};

export default TestimonialItem;
