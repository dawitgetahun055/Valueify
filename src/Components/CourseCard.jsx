import CoverImage from "../assets/CoverImage.png";
import SandWatch from "../assets/SandWatch.svg";
import Star from "../assets/Star.svg";

const CourseCard = ({ className, onClick }) => {
  return (
    <div className={className}>
      <img src={CoverImage} alt="" />
      <h3>Programming Basics</h3>
      <div>
        <img src={SandWatch} alt="" />
        <p>2hr 30min</p>
        <img src={Star} alt="" />
        <p>5/5</p>
      </div>
      <button onClick={onClick}>Enroll now</button>
    </div>
  );
};

export default CourseCard;
