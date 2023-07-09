import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  console.log(props);
  console.log(theme.text);
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-nickname" style={{ color: theme.text }}>
                {greeting.nickname}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Follow Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img src={require(`../../assests/images/yvnn.jpg`)} alt="" />

            <SocialMedia theme={theme} />
            {/* <div className="button-greeting-div">
              <Button
                text="Github"
                newTab={true}
                href={greeting.portfolio_repository}
                theme={theme}
                className="portfolio-repo-btn"
              />
              <Button
                text="Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
                className="portfolio-repo-btn"
                style={{ marginLeft: "1rem" }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
