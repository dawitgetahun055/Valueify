import { Children } from "react";
import Logo from "../assets/Logo.svg";

const NavBar = ({ item1, item2, item3, item4, children, onLogInClick }) => {
  return (
    <div className="Navigation">
      <img src={Logo} alt="Logo" />
      {children}
      <ul>
        <li>
          <a href="">
            <p>{item1}</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>{item2}</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              {
                item3 === "Log in" ? onLogInClick() : null;
              }
            }}
          >
            <p>{item3}</p>
          </a>
        </li>
        {item4 && (
          <li>
            <a href="">
              <img id="avatar" src={item4} alt="" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
