import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*info*/}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Eu hoodie scenester semiotics labore, green juice sint pitchfork
            shabby chic gluten-free pinterest tattooed ethical quis organic.
            Fugiat brooklyn ut shabby chic dolor lomo.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
