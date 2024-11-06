import { useState } from "react";
import CarretDown from "../assets/Carret-Down.svg";
import CarretUp from "../assets/Carret-Up.svg";

const ExpandedContent = ({ lesson }) => {
  return (
    <div className="expandible-content">
      <div></div>
      <h3>{lesson}</h3>
    </div>
  );
};

const SideBar = ({ module }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="side-bar">
      <div onClick={toggleExpand}>
        <div id="circle">0%</div>
        <h3>{module}</h3>
        <img src={isExpanded ? CarretUp : CarretDown} alt="" />
      </div>
      {isExpanded && (
        <>
          <ExpandedContent lesson={"Introduction to web"} />
          <ExpandedContent lesson={"Web pages and servers"} />
        </>
      )}
    </div>
  );
};

export default SideBar;
