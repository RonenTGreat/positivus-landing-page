import Card from "../card/card.component";
import "./processes.component.css";

const Processes = () => {
  return (
    <section className="process-section container">
      <article className="process-header">
        <h2 className="sub-heading">Our Working Process </h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </article>

      <article className="process-cards">
        <Card
          number="01"
          head="Consultation"
          body="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Card
          number="02"
          head="Research and Strategy Development"
          body="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Card
          number="03"
          head="Implementation"
          body="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Card
          number="04"
          head="Monitoring and Optimization"
          body="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Card
          number="05"
          head="Reporting and Communication"
          body="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Card
          number="06"
          head="Continual Improvement"
          body="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
      </article>
    </section>
  );
};

export default Processes;
