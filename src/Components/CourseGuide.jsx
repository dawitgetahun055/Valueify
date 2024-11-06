import Home from "../assets/Home.svg";
import PatternLeft from "../assets/PatternLeft.svg";
import PatternRight from "../assets/PatternRight.svg";
import Star2 from "../assets/Star2.svg";
import CheckMark from "../assets/CheckMark.svg";
import Laptop from "../assets/Laptop.svg";
import Coding from "../assets/Coding.svg";
import Object from "../assets/Object.svg";
import ReactIcon from "../assets/ReactIcon.svg";
import CourseContent from "../CourseContent";
import Avatar2 from "../assets/Avatar2.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CourseGuide = () => {
  const navigate = useNavigate();
  const goToCourse = () => {
    navigate("/course");
  };
  const returnToHome = () => {
    navigate("/Home");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="CourseGuide">
        <section className="file-path">
          <img src={Home} alt="" />
          <p>
            / Courses / Programming / <span>Programming Basics</span>
          </p>
        </section>
        <section className="course-welcome-banner">
          <img src={PatternLeft} alt="" />
          <div>
            <h1>Welcome David, Ready to Master Programming Basics?</h1>
            <p>
              We're excited to have you on this journey! you're about to dive in
              to the world of programming and unlock skills that will lay the
              foundation for your coding career.
            </p>
            <div className="course-navigation-buttons">
              <button onClick={goToCourse}>
                <span>Go to course</span>
              </button>
              <button onClick={returnToHome}>
                <span>Return to courses</span>
              </button>
            </div>
          </div>
          <img src={PatternRight} alt="" />
        </section>
        <div className="course-info-overview">
          <div>
            <div>
              <p>6 modules</p>
              <p>Gain insight into a topic and learn the fundamentals.</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p style={{ color: "#fff", fontWeight: "600" }}>4.8&nbsp;</p>
                <img src={Star2} alt="" />
              </div>
              <p>(17,463 reviews)</p>
            </div>
          </div>
          <div>
            <div>
              <p>Beginner level</p>
              <p>No prior experience required</p>
            </div>
          </div>
          <div>
            <div>
              <p>Flexible schedule</p>
              <p>
                Approx. 15hours <br /> Learn at your own pace
              </p>
            </div>
          </div>
        </div>
        <section className="what_you_learn">
          <h2>What you'll learn</h2>
          <div>
            <div>
              <img src={CheckMark} alt="" />
              <p>Learn how to create responsive layouts for various devices</p>
            </div>
            <div>
              <img src={CheckMark} alt="" />
              <p>
                Understand the fundamentals of HTML for structuring web content.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={CheckMark} alt="" />
              <p>Apply CSS to style elements and improve visual appeal.</p>
            </div>
            <div>
              <img src={CheckMark} alt="" />
              <p>
                Gain an introduction to JavaScript for adding interactivity to
                webpages.
              </p>
            </div>
          </div>
        </section>
        <section className="Related">
          <h2>Related Topics</h2>
          <div>
            <div>Programming with python</div>
            <div>React Basics</div>
            <div>JavaScript</div>
            <div>Front-end</div>
            <div>HTML & CSS</div>
          </div>
        </section>
        <section className="Course-includes">
          <h2>Course Includes</h2>
          <div>
            <div>
              <img src={Laptop} alt="" />
              <p>Building static website using HTML & CSS</p>
            </div>
            <div>
              <img src={ReactIcon} alt="" />
              <p>Learning using React</p>
            </div>
          </div>
          <div>
            <div>
              <img src={Coding} alt="" />
              <p>Learn Coding with JavaScript</p>
            </div>
            <div>
              <img src={Object} alt="" />
              <p>Final hands-on project</p>
            </div>
          </div>
        </section>
        <section className="Description">
          <h2>Description</h2>
          <p>
            This course introduces the foundational concepts of programming,
            equipping you with the essential skills to write and understand
            code. You'll learn key pronciples like variables, control
            structures, functions and data types, while exploring
            problem-solving techniques and algorithm development. By the end of
            this course, you'll have a strong understanding of how programming
            languages work and be prepared to build simple programs across
            various platforms.
          </p>
          <p>
            Perfect for beginners, this course sets the stage for more advanced
            programming topics and practical applications. No prior coding
            experience is required.
          </p>
        </section>
        <section className="Course-Content">
          <h2>Course-Content</h2>
          <CourseContent
            module={"Front-End Web Development"}
            lectures={"9 Lectures"}
            duration={"37min"}
          />
          <CourseContent
            module={"Introduction to HTML"}
            lectures={"8 Lectures"}
            duration={"49min"}
          />
          <CourseContent
            module={"Intermediate HTML"}
            lectures={"7 Lectures"}
            duration={"42min"}
          />
          <CourseContent
            module={"Multi-page Websites"}
            lectures={"7 Lectures"}
            duration={"52min"}
          />
          <CourseContent
            module={"Introduction to CSS"}
            lectures={"6 Lectures"}
            duration={"1hr 10min"}
          />
          <CourseContent
            module={"Advanced CSS"}
            lectures={"10 Lectures"}
            duration={"1hr 52min"}
          />
          <CourseContent
            module={"Flexbox"}
            lectures={"7 Lectures"}
            duration={"50min"}
          />
          <CourseContent
            module={"Grid"}
            lectures={"5 Lectures"}
            duration={"42min"}
          />
          <div id="show-more">
            <span>Show more</span>
          </div>
        </section>
        <section className="Instructor">
          <h2>Instructor - Bezawit Worku</h2>
          <p>Senior Front-End Developer | UI/UX Specialist</p>
          <h3>About Bezawit</h3>
          <p>
            With over 8 years of experience in front-end development, I am
            highly skilled web developer who specializes in creating dynamic,
            responsive websites and applications. I have worked with several
            high-profile clients and tech companies, focussing on modern web
            technologies such as HTML, CSS, JavaScript, React and Vue.js. I am
            passionate about design and user experience.
          </p>
          <img src={Avatar2} alt="" />
        </section>
        <section className="Career-insights">
          <h2>Where Can Front-End Development Take You?</h2>
          <p>
            Front-end development opens doors to exciting career opportunities
            in tech and beyond. By mastering key skills, you'll be ready to
            shape the future of the web and digital experiences. Here are some
            potential career paths: <br />
            <br />
          </p>
          <p>
            1. Web Developer <br /> Bring websites to life by coding
            interactive, responsive designs. As a web developer, you'll
            collaborate with designers and back-end developers to create
            seamless user experiences on the web. <br />
            <br />
          </p>
          <p>
            2. UI/UX Designer <br /> Blend creaticity and technical skills to
            design intuitive user interfaces. You'll focus on how users interact
            with websites and apps, ensuring a smooth, engaging experience.{" "}
            <br />
            <br />
          </p>
          <p>
            3. Mobile App Developer <br />
          </p>
          <p>
            Use your front-end skills to create sleek, responsive mobile apps.
            Front-end developers with a focus on mobile platforms can design and
            build cross-platform apps that function seamlessly across devices.{" "}
            <br />
            <br />
          </p>
          <p>
            4. Front-End Engineer <br />
          </p>
          <p>
            Specialize in complex web applications, optimizing performance and
            implementing advanced functionalities. You'll work on the frontlines
            of innovation, pushing the boundaries of what's possible in the
            browser. <br />
            <br />
          </p>
          <p>
            5. Freelance Developer <br />
          </p>
          <p>
            Enjoy the flexibility of working on various projects for different
            clients. As a freelancer, you can build websites, apps, and
            user-interfaces for a wide range of industries, from startups to
            large enterprises.
          </p>
        </section>
        <section className="Frontend-career-callout">
          <p>
            Start Your journey towards a rewarding career in front-end
            development today
          </p>
        </section>
      </section>
    </>
  );
};

export default CourseGuide;
