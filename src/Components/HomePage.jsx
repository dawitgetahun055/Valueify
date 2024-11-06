import GirlImage from "../assets/Girl_Image.png";
import CourseCard from "./CourseCard";
import LeftQuote from "../assets/LeftQuote.svg";
import RightQuote from "../assets/RightQuote.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goToCourseGuidePage = () => {
    navigate("/courseguide");
  };
  return (
    <>
      <section className="HomePage">
        <h1>Invest in your Education</h1>
        <div className="subject-tags">
          <div>
            <p>Mathematics</p>
          </div>
          <div>
            <p>Programming</p>
          </div>
          <div>
            <p>Biology</p>
          </div>
          <div>
            <p>Physics</p>
          </div>
          <div>
            <p>Personal Development</p>
          </div>
          <div>
            <p>Digital Marketing</p>
          </div>
        </div>
        <div className="intro">
          <img src={GirlImage} alt="" />
          <div>
            <h2>
              Welcome to <span>Valueify</span>
            </h2>
            <p id="intro-text">Your learning journey starts here</p>
            <p id="motivational-text">
              Unlock your potential. Take the first step to mastery
            </p>
          </div>
        </div>
        <div className="courses">
          <h2>Explore modules</h2>
          <div className="course-list">
            <CourseCard
              className={"Card-container"}
              onClick={goToCourseGuidePage}
            />
            <CourseCard
              className={"Card-container"}
              onClick={goToCourseGuidePage}
            />
            <CourseCard
              className={"Card-container"}
              onClick={goToCourseGuidePage}
            />
          </div>
          <p id="View All">View all</p>
        </div>
        <div className="Recommended">
          <div>
            <h2>Recommended for all</h2>
            <div className="recommended-content">
              <div className="recommended-description">
                <h3>The Trachtenburg System: A Mental Math Marvel</h3>
                <p>
                  Step in to a world where math becomes your secret language,
                  where numbers dance across your mind, and complex problems
                  dissolve into an elegant solutions.
                </p>
                <p>
                  Harnessing the power of quick thinking, transforming
                  challenges into opportunities and sharpening your mind for
                  anything life throws at you.
                </p>
                <div>
                  <button>
                    <span>Enroll now</span>
                  </button>
                  <button>Learn more</button>
                </div>
              </div>
              <div>
                <CourseCard className={"Card-for-Recommended"} />
              </div>
            </div>
          </div>
        </div>
        <div className="Recommended Additional">
          <div>
            <h2>Additional features</h2>
            <div className="recommended-content">
              <div className="recommended-description">
                <h3>Ace Your National Exam</h3>
                <p>
                  This feature let's you have a guide tailored to help you with
                  your national examination. We provided you a digital workbook
                  designed to break down complex concepts into simple,
                  digestible lessons while offering more of a real exam based
                  questions that help you to apply what you have learned. Ready
                  to practice like a top scorer??
                </p>
                <div id="additionalsection-btn">
                  <button>
                    <span>Start now</span>
                  </button>
                </div>
              </div>
              <div>
                <CourseCard className={"Card-for-Recommended"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Future-pathways">
        <h2>
          <span>
            <img src={LeftQuote} alt="" />
          </span>
          Your future starts here
          <span>
            <img src={RightQuote} alt="" />
          </span>
        </h2>
        <p>
          we don't just help you pass exam, we prepare you for the future.
          Whether it's mastering skills like mental math, practicing with exam
          focussed workbooks, or receiing mentorship from experts, we're here to
          guide you every step of the way.
        </p>
        <p>
          Our goals goes beyond academics. We're commited to giving you the most
          in-demand skills in today's world. Helping you build the knowledge and
          expertise that will set you apart in the market. This platform isn't
          just about learning. Its about unlocking your potential and creating
          pathways to the future you deserve
        </p>
      </section>
    </>
  );
};

export default HomePage;
