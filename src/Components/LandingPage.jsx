import Cyber_Savvy from "../assets/Cyber_Savvy.png";
import Chess from "../assets/Chess.png";
import Arrow from "../assets/Arrow.svg";
import Robot from "../assets/Robot-On-Laptop.svg";
import Programming from "../assets/Programming.svg";
import Calculations from "../assets/Calculations.svg";
import CEO from "../assets/Dawit-Getahun.png";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goToSignUpPage = () => {
    navigate("/sign-up");
  };
  return (
    <>
      <section className="Hero">
        <div>
          <h1>
            Shape your future: Skill up, Level up <br /> with Valueify
          </h1>
          <p>
            Unlock the door to the future job market and <br /> explore the most
            in-demand skills.
          </p>
          <button id="btn_1" onClick={goToSignUpPage}>
            Get Started
          </button>
          <button id="btn_2">Learn more</button>
        </div>
        <img
          src={Cyber_Savvy}
          alt="Illustration of young man engaged with a computer, embodying creativity and technology"
        />
      </section>
      <section className="Benefits">
        <div className="benefits-container">
          <div className="benefits-header">
            <h2>
              Discover the benefits of our e-learning <br /> platform.
            </h2>
            <p>
              Our e-learning platform offers flexibility and convenience,
              allowing you to learn at your own pace.
            </p>
          </div>
          <div className="benefits-content">
            <div>
              <h2>Flexibility</h2>
              <p>Location and time freedom.</p>
            </div>
            <div>
              <h2>Expert instructors</h2>
              <p>Get guidance from experts.</p>
            </div>
          </div>
        </div>
        <img src={Chess} alt="Chess pieces symbolizing strategy and skill" />
      </section>
      <section className="Courses">
        <div className="courses-header">
          <p>Choose your courses</p>
          <div>
            <p>View All</p>
            <span>
              <img
                src={Arrow}
                alt="Arrow icon indication the link to view all courses"
              />
            </span>
          </div>
        </div>
        <div className="course-contents">
          <div>
            <img src={Robot} alt="" />
            <p>
              AI spark: your digital <br /> gate way
            </p>
          </div>
          <div>
            <img src={Programming} alt="" />
            <p>Programming</p>
          </div>
          <div>
            <img src={Calculations} alt="" />
            <p>Mathematics</p>
          </div>
        </div>
      </section>
      <section className="CEO">
        <article className="empowering">
          <h2>"Empowering Ethiopian next digital pioneers"</h2>
          <p>
            “At, Valueify, we believe that learning should be an exciting
            journey. we believe that learning shouldn’t be confined to the walls
            of a classroom. Its a journey that extends beyond limits, allowing
            you to learn from anywhere, anytime. That’s why our platform is
            build to inspire you, challenge you and guide you towards your dream
            all while having fun along the way.”
          </p>
        </article>
        <aside>
          <img src={CEO} alt="Image of the CEO and founder of Valueify" />
          <p>CEO and founder of Valueify.</p>
        </aside>
        <article className="join">
          <h2>Join Our Community</h2>
          <p>
            At valueify, learning isn’t a solo journey. It is a collaborative
            adventure. Join and connect with like minded learners from across
            Ethiopia, share your experience, tackle challenges together, and
            celebrate each achievement. whether you’re just starting or looking
            to sharpen your skills, our community is here to support you every
            step of the way. Together we’re not just learning, we’re building
            the future, one skill at a time.
          </p>
        </article>
      </section>
      <section className="FAQs">
        <div className="FAQs-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions <br /> about our e-learning
            platform.
          </p>
        </div>
        <div className="questions-container">
          <Questions
            question={"How do I enroll?"}
            answer={
              "To enroll in our courses, simply visit our website and click on the 'Sign Up' button. Follow the instructions to create an account and start learning."
            }
          />
          <Questions
            question={"How can I access my courses?"}
            answer={
              "Once you have enrolled in a course, you can access it by logging into your account and navigating to the 'My Learning ' section. From there, you will be able to view and access all of your enrolled courses."
            }
          />
          <Questions
            question={"What payment methods do you accept?"}
            answer={
              "We accept various payment methods to make enrollment convenient for our learners in Ethiopia, including Telebirr, HelloCash, direct bank transfer, Visa, Mastercard, American Express, and PayPal."
            }
          />
          <Questions
            question={"Are the courses self-paced?"}
            answer={
              "Yes, our courses are designed to be self-paced. You can learn at your own convenience and progress through the material at a pace that suits you."
            }
          />
          <Questions
            question={"Can I get a refund?"}
            answer={
              "We offer a 30-day money-back guarantee. If you are not satisfied with your course, you can request a refund within 30 days of purchase."
            }
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
