import "./contact.component.css";

const Contact = () => {
  return (
    <section className="contact-section container">
      <article className="case-header">
        <h2 className="sub-heading">Contact Us</h2>
        <p>Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</p>
      </article>
      <form className="contact-form">
        <div>
          <div className="radio">
            <label className="radio-container">
              <input type="radio" checked="checked" name="radio" />
              <span className="checkmark"></span>
              Say hi
            </label>
            <label className="radio-container">
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
              Get a Quote
            </label>
          </div>

          <div>
            <label>
              <p>Name</p>
              <input type="text" placeholder="Name" />
            </label>
            <label>
              <p>Email*</p>
              <input type="email" placeholder="Email" />
            </label>
            <p>Message*</p>
            <textarea required cols="40" rows="8"></textarea>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
