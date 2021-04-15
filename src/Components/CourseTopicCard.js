import React from "react";

import "./css/CourseTopicCard.css";

export default class CourseTopicCard extends React.Component {
    /**
     * Constructs a course topic card react component
     * @param {string} intro - The intro text next to the icon
     * @param {string} icon - The small top-left icon next to the intro
     * @param {string} header - The header text in the card
     * @param {string} description - The description text in the card
     * @param {string} img - The main image featured in the card
     * @returns Course topic card
     */
    render() {
        const { intro, icon, header, description, img } = this.props;
        return (
            <div className="card course">
                <div className="card intro">
                    <img src={icon} alt="" />
                    <h3 className="card">{intro}</h3>
                </div>
                <h1 className="card">{header}</h1>
                <div className="card content">
                    <p className="card text">{description}</p>
                    <img src={img} alt="" />
                </div>
            </div>
        )
    }
}