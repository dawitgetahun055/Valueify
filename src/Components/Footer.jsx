import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="Newsletter">
        <div>
          <p id="exclusive-offers">Get Exclusive Offers</p>
          <p id="offers-description">
            Stay up to date with our latest news <br /> and promotions
          </p>
        </div>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <span>
            <button>Subscribe</button>
          </span>
          <p id="subsription-terms">
            By subscribing, you agree to our{" "}
            <span>
              <a href="">Privacy Policy</a>
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="Footer-links">
        <img src={Logo} alt="Logo" />
        <div className="Links">
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">FAQs</a>
          <a href="">Blog</a>
        </div>
        <div className="Links">
          <a href="">Resources</a>
          <a href="">Help Center</a>
          <a href="">Support Center</a>
          <a href="">Customer Service</a>
        </div>
        <div className="Links">
          <p>Terms of Use</p>
          <a href="">
            Follow us on <br /> Instagram
          </a>
          <a href="">Like us on Facebook</a>
          <a href="">Follow us on Twitter</a>
          <a href=""></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
