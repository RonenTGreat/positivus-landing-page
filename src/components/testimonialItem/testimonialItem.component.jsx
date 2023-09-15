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
        <p className="name">{name}</p>
        <p className="title">{title}</p>
      </div>
    </section>
  );
};

export default TestimonialItem;
