import React from "react";

import "./css/Card.css";
import  "./css/LearnMoreCard.css"


import appdevlogo from '../Images/appdevlogo.svg'
import ExternalLink from "./ExternalLink";

export default class LearnMoreCard extends React.Component {
    /**
     * Constructs a course topic card react component
     * @param {string} date - The date of the event
     * @param {string} title - The title of the event
     * @param {string} description - The description text in the card
     * @returns Learn More Card
     */
    render() {
        const { date, title, description } = this.props;
        return (
            <div className="card learn">
                <div className="learn-top">
                  
                  <img className="learn-img" src={appdevlogo} alt="" />

                  <div className="learn-top-right">

                    <div className="learn-date">
                        <h3>{date}</h3>
                    </div>
                    <div className="learn-title">
                        <h1 >{title}</h1>
                    </div>

                    <div className="learn-desc">
                        <p>{description}</p>
                    </div>

                    <div className="learn-external">
                       <ExternalLink text="Learn More" />

                    </div>
                    

                  </div>
                  
                </div>    
                
            </div>
        )
    }
}
