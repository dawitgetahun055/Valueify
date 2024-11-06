import Carret from "../assets/Carret.svg";
import CourseCard from "./CourseCard";
import CircleRight from "../assets/CircleRight.svg";
import CircleLeft from "../assets/CircleLeft.svg";

const SearchResults = () => {
  return (
    <>
      <section className="SearchResult">
        <p>Search Results for "Front-End Development"</p>
        <div className="results-wrapper">
          <div>
            <div className="filters">
              <p>Programs</p>
              <img src={Carret} alt="" />
            </div>
            <div className="filters">
              <p>Price</p>
              <img src={Carret} alt="" />
            </div>
            <div className="filters">
              <p>Subject</p>
              <img src={Carret} alt="" />
            </div>
            <div className="filters">
              <p>Level</p>
              <img src={Carret} alt="" />
            </div>
            <div className="filters">
              <p>Duration</p>
              <img src={Carret} alt="" />
            </div>
          </div>
          <div>
            <div className="rows">
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
            </div>
            <div className="rows">
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
            </div>
            <div className="rows">
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
            </div>
            <div className="rows">
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
              <CourseCard className={"Card-container result-card"} />
            </div>
            <div className="related">
              <p>
                Related Searches <span>i</span>
              </p>
              <div className="related-tags">
                <div>Programming with Python</div>
                <div>React Basics</div>
                <div>JavaScript</div>
                <div>Front-end</div>
                <div>HTML & CSS</div>
              </div>
            </div>
            <div className="page-links">
              <img src={CircleRight} alt="" />
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <img src={CircleLeft} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResults;
