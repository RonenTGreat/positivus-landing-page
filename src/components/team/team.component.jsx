import "./team.component.css";
import Worker from "../workers/workers.component";
import person1 from "../../assets/person_1.png";
import person2 from "../../assets/person_2.png";
import person3 from "../../assets/person_3.png";
import person4 from "../../assets/person_4.png";
import person5 from "../../assets/person_5.png";
import person6 from "../../assets/person_6.png";

const Team = () => {
  return (
    <section className="team-section container">
      <article className="team-header">
        <h2 className="sub-heading">Team</h2>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </article>
      <article className="workers">
        <Worker
          image={person1}
          name="John Smith"
          title="CEO and Founder"
          description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <Worker
          image={person2}
          name="Jane Doe"
          title="Director of Operations"
          description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <Worker
          image={person3}
          name="Michael Brown"
          title="Senior SEO Specialist"
          description="15+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <Worker
          image={person4}
          name="Emily Johnson"
          title="PPC Manager"
          description="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />
        <Worker
          image={person5}
          name="Brian Williams"
          title="Social Media Specialist"
          description="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />
        <Worker
          image={person6}
          name="Sarah Kim"
          title="Content Creator"
          description="2+ years of experience in writing and editing
Skilled in creating compelling, SEO-optimized content for various industries"
        />
      </article>
      <button className="team-btn">See all team</button>
    </section>
  );
};

export default Team;
