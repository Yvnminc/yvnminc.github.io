import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* <p className="theme-text" style={{ color: props.theme.secondaryText }}>
          Theme
        </p> */}
        {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <a href="https://github.com/Tasin5541/portfolio">
            Ackonwledgement: Source code is from Tasin5541
          </a>
        </p> */}
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
