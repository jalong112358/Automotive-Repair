import React from "react";
import "./AboutPage.css";
import texture from "./texture.jpg";
import aboutMainImage from "./about-main.png";

import TeamImageOne from "./TeamMemberImages/team-1.png";
import TeamImageTwo from "./TeamMemberImages/team-2.png";
import TeamImageThree from "./TeamMemberImages/team-3.png";
import TeamImageFour from "./TeamMemberImages/team-4.png";
import TeamImageFive from "./TeamMemberImages/team-5.png";
import TeamImageSix from "./TeamMemberImages/team-6.png";
import TeamImageSeven from "./TeamMemberImages/team-7.png";

function AboutPage() {
  return (
    <div className="about-page">
      <div
        className="about-banner"
        style={{
          backgroundImage: "url(" + texture + ")"
        }}
      >
        <h1>
          About <span>Us</span>
        </h1>
      </div>
      <div
        className="about-general"
        style={{
          backgroundImage: "url(" + aboutMainImage + ")"
        }}
      >
        <div className="about-general-content">
          <h1>
            Our <span>Mission</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque est gravida dolor euismod, in sodales nunc tempus.
            Phasellus commodo vitae nibh at porttitor. Duis ornare leo eu velit
            lobortis laoreet. Quisque arcu eros, faucibus et venenatis vel,
            viverra et erat. Donec et accumsan lectus.
          </p>
          <p>
            Praesent malesuada massa quis convallis rutrum. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aliquam quis eros mattis, finibus enim non, facilisis augue.
            Phasellus in pretium erat, id fermentum sapien. Duis sodales ipsum
            et mauris sodales lacinia.
          </p>
          <button>
            <a href="/">Blah</a>
          </button>
        </div>
      </div>
      <div className="container-arrow" />
      <div className="team">
        <h1>
          Our <span>Team</span>
        </h1>
        <p>
          Suspendisse eget commodo ligula, vel pellentesque leo. Nunc risus
          felis, ultrices ac turpis eget, lacinia elementum lectus. Etiam cursus
          in massa id molestie.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={TeamImageOne} />
            <p>Derek</p>
          </div>
          <div className="team-member">
            <img src={TeamImageTwo} />
            <p>Scott</p>
          </div>
          <div className="team-member">
            <img src={TeamImageThree} />
            <p>Jane</p>
          </div>
          <div className="team-member">
            <img src={TeamImageFour} />
            <p>Brad</p>
          </div>
          <div className="team-member">
            <img src={TeamImageFive} />
            <p>Trevor</p>
          </div>
          <div className="team-member">
            <img src={TeamImageSix} />
            <p>Sarah</p>
          </div>
          <div className="team-member">
            <img src={TeamImageSeven} />
            <p>Todd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
