import SideBar from "./SideBar";
import PlayCircle from "../assets/PlayCircle.svg";
import Video from "../assets/Video.png";
import Back from "../assets/Back.svg";
import Next from "../assets/Next.svg";
import Vector10 from "../assets/Vector(10).svg";
import Vector11 from "../assets/Vector(11).svg";
import Vector12 from "../assets/Vector(12).svg";
import Vector13 from "../assets/Vector(13).svg";
import Overview from "../assets/Overview.svg";
import Home from "../assets/Home.svg";

const StudyMaterialAccessPanel = () => {
  return (
    <>
      <section className="Lesson-wrapper">
        <section className="file-path">
          <img src={Home} alt="" />
          <p>
            / Courses / Programming / <span>Programming Basics</span>
          </p>
        </section>
        <section className="Lesson-Section">
          <div className="sidebar-wrapper">
            <SideBar module={"Introduction"} />
            <SideBar module={"Introduction to HTML"} />
            <SideBar module={"Intermediate HTML"} />
            <SideBar module={"Multi-Page Websites"} />
            <SideBar module={"Introduction to CSS"} />
            <SideBar module={"Advanced CSS"} />
            <SideBar module={"Flex Box"} />
            <SideBar module={"Grid"} />
            <button>Expand All</button>
          </div>
          <div className="lesson-display">
            <div className="video-section">
              <img src={Video} alt="" />
              <img src={PlayCircle} alt="" />
            </div>
            <div className="text">
              <h2>Course Objectives</h2>
              <p>By the end of this course, you will:</p>
              <p>
                &#8226; Gain a strong foundation in HTML, CSS and JavaScript.
              </p>
              <p>
                &#8226; Understand key front-end development concepts like
                layouts, styling and interactivity.
              </p>
              <p>
                &#8226; Learn how to implement responsive design principles.
              </p>
            </div>
            <div id="video-nav-buttons">
              <button>
                <img src={Back} alt="" />
                <span>Back</span>
              </button>
              <button>
                <span>Next</span>
                <img src={Next} alt="" />
              </button>
            </div>
          </div>
          <div className="additional-info">
            <div>
              <img src={Vector10} alt="" />
              <h3>Lecture Type</h3>
              <p>pre-recorded</p>
            </div>
            <div>
              <img src={Vector11} alt="" />
              <h3>Skills Level</h3>
              <p>Beginner</p>
            </div>
            <div>
              <img src={Vector12} alt="" />
              <h3>Duration</h3>
              <p>9Lectures 37min</p>
            </div>
            <div>
              <img src={Vector13} alt="" />
              <h3>Lessons</h3>
              <p>128</p>
            </div>
            <div id="overview">
              <div>
                <img src={Overview} alt="" />
                <h3>Overview</h3>
              </div>
              <h3>Programming Basics</h3>
              <div>
                <div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
                <div>React</div>
                <div>UI/UX Design</div>
              </div>
              <p>
                This course introduces the essential tools and techniques for
                creating visually stunning and functional websites. You'll start
                by learning how to structure pages with HTML, style them with
                CSS, and add interactivity with JavaScript. <br />
                <br /> Whether you're pursuing a career as a web developer or
                expanding your skill set, this course provides the foundation to
                build your own websites and applications. Let’s get started on
                your journey to becoming a front-end developer.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default StudyMaterialAccessPanel;
