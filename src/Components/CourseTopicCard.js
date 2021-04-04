import React from "react";

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
                    <img className="icon" src={icon} alt="" />
                    <h3 className="card">{intro}</h3>
                </div>
                <h1 className="card">{header}</h1>
                <div className="card horizontal-content">
                    <p className="card">{description}</p>
                    <img src={img} alt="" />
                </div>
            </div>
        )
    }
}