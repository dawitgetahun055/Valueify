import Logo from "../assets/Logo.svg";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import Email from "../assets/Email.svg";
import Password from "../assets/Password.png";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onClose }) => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/Home");
    document.body.classList.remove("no-scroll");
  };
  return (
    <section className="Sign-in">
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
      <img src={Logo} alt="Logo image" />
      <div>
        <div className="signin-content">
          <h1>LearnPro</h1>
          <h2>Enhance digital literacy effectively</h2>
          <div>
            <img src={Email} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <img src={Password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <p>Forgot your password?</p>
        </div>
        <div className="signin-btns">
          <button onClick={goToHomePage}>Sign in</button>
          <div>
            <button>
              <img src={Facebook} alt="Facebook logo" />
              Facebook
            </button>
            <button>
              <img src={Google} alt="Google logo" />
              Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
