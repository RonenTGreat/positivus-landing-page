import TestimonialItem from "../testimonialItem/testimonialItem.component";
import "./testimonials.component.css";

const Testimonials = () => {
  return (
    <section className="testimonial-section container">
      <article className="case-header">
        <h2 className="sub-heading">Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </article>
      <article className="testimony">
        <TestimonialItem 
        desc='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."' 
          name="John Smith"
          title="Marketing Director at XYZ Corp"
        />
      </article>
    </section>
  );
};

export default Testimonials;
