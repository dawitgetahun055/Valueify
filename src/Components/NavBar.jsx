import Logo from "../assets/Logo.svg";

const NavBar = () => {
  return (
    <div className="Navigation">
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a href="">
            <p>Explore</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>Community</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>Log in</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
