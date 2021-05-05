import React from "react";

import "./css/Card.css";
import  "./css/LearnEventCard.css"


import appdevlogo from '../Images/appdevlogo.svg'

import externallinksvg from '../Images/External-Link.svg'

export default class LearnEventCard extends React.Component {
    /**
     * Constructs a course topic card react component
     * @param {string} date - The date of the event
     * @param {string} title - The title of the event
     * @param {string} description - The description text in the card
     * @param {string} url - External URL
     * @returns Learn More Card
     */
    render() {
        const { date, title, description, url} = this.props;
        return (
            <div className="card event">

        
                <div className="learn-top">
                
                    <img className="learn-img" src={appdevlogo} alt="" />

                    <div className="learn-top-right">

                        <h3>{date}</h3>

                        <h1 >{title}</h1>

                        <div className="learn-desc">
                            <p>{description}</p>
                        </div>

                        <div>
                            <a className="external-link" href={url} target="_blank" rel="noreferrer">
                                {"Learn More"}
                                <img src={externallinksvg} alt="" />

                            </a>


                        </div>
                        

                    </div>
                
                </div>    
                
                
            </div>
        )
    }
}
