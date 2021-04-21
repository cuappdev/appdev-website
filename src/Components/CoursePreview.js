import React from "react";
import LearnMoreButton from "./LearnMore"

export default class CoursePreview extends React.Component {
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
        const { courseName, image } = this.props;
        return (
            <div className="course card">
                    <img className="course image" src={image} />
                <div className="course content">
                    <h4  className="course">INTRO TO</h4>
                    <h1  className="course">{courseName}</h1>
                    <LearnMoreButton
                    text="Learn More"
                    url="https://www.figma.com/file/THknYoPKbXzVkaClxGcX2j/Website-MVP?node-id=117%3A580"/>
                </div>
            </div>
        )
    }
}