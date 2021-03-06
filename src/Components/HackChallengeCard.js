import React from "react";

import "./css/Card.css";
import "./css/HackChallengeCard.css";
import ExternalLink from './ExternalLink';

export default class HackChallengeCard extends React.Component {
  /**
   * Constructs a Hack Challenge winner information card
   * @param {string} award - Type of award (ex. "Overall Winner")
   * @param {string} appName - Hack Challenge app title
   * @param {string} description - The description text in the card
   * @param {string[]} names - Array of group member names
   * @param {string} url - url link to project
   * @param {string} img - The screenshot of the winning app and associated group members
   * @returns Hack Challenge winner information card
   */
  render() {
    const { award, appName, description, names, url, img } = this.props;
    return (
      <div className="card hack-challenge">
        <div className="card">
          <img src={img} alt="" />
        </div>
        <div className="card vertical-content" style={{ paddingLeft: "40px" }}>
          <h3 className="card">{award}</h3>
          <h1 className="card">{appName}</h1>
          <p className="card">{description}</p>
          <h3 className="card">Designed & Developed By</h3>
          <p className="card">{names.join(", ")}</p>
          <ExternalLink text="Github" url={url} />
        </div>
      </div>
    )
  }
}