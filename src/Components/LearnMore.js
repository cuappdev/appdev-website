import React from "react";

import LearnMore from '../Images/LearnMore.svg';

export default class LearnMoreButton extends React.Component {
    /**
     * Constructs an external link react component
     * @param {string} text - The link description text (e.g. "Github")
     * @param {string} url - The link url to direct to
     * @returns External link component
     */
    render() {
        const { text, url } = this.props;
        return (
            <a className="learnmore text" href={url} rel="noreferrer">
                {text}
                <img className="learnmore icon" src={LearnMore} alt="" />
            </a>
        );
    }
} 