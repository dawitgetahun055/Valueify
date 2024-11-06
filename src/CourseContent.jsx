import CarretUp from "./assets/Carret-Up.svg";
import CarretDown from "./assets/Carret-Down.svg";
import { useState } from "react";

const CourseDetail = ({ lesson, materialType, duration }) => {
  return (
    <div className="expanded">
      <h3>Front-End Web Development</h3>
      <p>video</p>
      <p>37min</p>
    </div>
  );
};

const CourseContent = ({ module, lectures, duration }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="module" onClick={toggleExpand}>
        <h2>{module}</h2>
        <p>{lectures}</p>
        <p>{duration}</p>
        <img src={isExpanded ? CarretUp : CarretDown} alt="" />
      </div>
      {isExpanded && (
        <div>
          <CourseDetail />
        </div>
      )}
    </>
  );
};

export default CourseContent;
