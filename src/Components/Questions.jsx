import Carret_Up from "../assets/Carret-Up.svg";
import Carret_Down from "../assets/Carret-Down.svg";
import { useState } from "react";

const Questions = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="questions">
      <div onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="carret">
          <img
            src={isOpen ? Carret_Up : Carret_Down}
            alt="Caret icon indicating expandable FAQ answer"
          />
        </span>
      </div>
      <p className={isOpen ? "" : "disappear"}>{answer}</p>
    </div>
  );
};

export default Questions;
