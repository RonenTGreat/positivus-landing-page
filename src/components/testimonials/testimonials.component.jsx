import TestimonialItem from "../testimonialItem/testimonialItem.component";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={60}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <TestimonialItem
              name="Ronen Hammond"
              title="Software Engineer"
              desc='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              name="Ronen Hammond"
              title="Software Engineer"
              desc='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              name="Ronen Hammond"
              title="Software Engineer"
              desc='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              name="Ronen Hammond"
              title="Software Engineer"
              desc='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              name="Ronen Hammond"
              title="Software Engineer"
              desc='"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
            />
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
};

export default Testimonials;
