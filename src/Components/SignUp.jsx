import { useState } from "react";
import Logo from "../assets/Logo.svg";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  return (
    <section className="Sign-up">
      <div className="welcome">
        <h1>Valueify Learning Hub</h1>
        <h2>Welcome!</h2>
        <p>
          Step into Valueify, where learning is fun. Join Valueify to unlock the
          skills of tomorrow and connect with a dynamic community ready to
          support you every step of the way.
        </p>
      </div>
      <form>
        <img src={Logo} alt="Logo" />
        <div className="form-content-wrapper">
          <h2>LearnPro</h2>
          <h3>Create an Account</h3>
          <div className="input-wrapper">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" id="FirstName" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" id="LastName" />
          </div>
          <p>
            Please use your official names, as they'll appear on your
            certificate
          </p>
          <div className="input-wrapper">
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span>I confirm my subscription to program-related emails.</span>
          </div>
          <div className="input-wrapper">
            <label htmlFor="Phonenumber">Phone Number</label>
            <PhoneInput
              country={"et"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputProps={{
                name: "phone",
                required: true,
                autofocus: true,
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Password">Password</label>
            <input type="password" />
          </div>
          <p>Your password should be at least 12 characters long.</p>
          <div className="input-wrapper">
            <label htmlFor="ConfirmPassword">Password confirmation</label>
            <input type="password" />
          </div>
          <div className="checkbox">
            <input type="checkbox" />{" "}
            <span>
              I have read and agree to <a href="">Valueify privacy policy</a>
            </span>
          </div>
          <div className="btns-wrapper">
            <button>Sign Up</button>
            <p>Or continue with</p>
            <div className="social-btn-wrapper">
              <button>
                <img src={Facebook} alt="Facebook Icon" />
                Facebook
              </button>
              <button>
                <img src={Google} alt="Google Icon" />
                Google
              </button>
            </div>
          </div>
          <p>
            Already have an account?
            <span>
              <a href=""> Log in</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
