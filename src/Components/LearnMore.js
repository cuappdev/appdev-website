import React from "react";

import LearnMore from "../Images/LearnMore.svg";
import LearnMore_O from "../Images/LearnMore_O.svg";

import "./css/LearnMore.css";

export default class LearnMoreButton extends React.Component {
  /**
     * Constructs an LearnMoreButton react component
     * @param {string} text - Text for the LearnMoreButton
     * @param {string} url - Link lead to when the button is clicked
     * @param {string} style - orange or blue, 
     * orange for visit website for Appdev Instructor, blue for everything else

     * @returns LearnMore component
     */
  render() {
    const { text, url, color } = this.props;
    if (color == "blue") {
      return (
        <a className="learnmore_b text" href={url} rel="noreferrer">
          {text}
          <img className="learnmore icon" src={LearnMore} alt="" />
        </a>
      );
    } else if (color == "orange") {
      return (
        <a className="learnmore_o text" href={url} rel="noreferrer">
          {text}
          <img className="learnmore icon" src={LearnMore_O} alt="" />
        </a>
      );
    }
  }
}
