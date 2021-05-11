import React from "react";
import LearnMoreButton from "./LearnMore"
import "./css/CoursePreview.css"

export default class CoursePreview extends React.Component {
    /**
     * Constructs a course preview react component
     * @param {string} courseName- The name of the course
     * @param {string} image - The main image featured in the card
     * @param {string} url - url for the learnMoreButton

     * @returns Course preview card
     */
    render() {
        const { courseName, image, url} = this.props;
        return (
            <div className="courseP card">
                    <img className="courseP image" src={image} />
                <div className="courseP content">
                    <h4  className="courseP">INTRO TO</h4>
                    <h1  className="courseP">{courseName}</h1>
                    <LearnMoreButton
                    text="Learn More"
                    url={url}
                    color="blue"/>
                </div>
            </div>
        )
    }
}