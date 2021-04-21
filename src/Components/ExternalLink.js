import React from "react";

import "./css/ExternalLink.css";
import linkIcon from '../Images/icon-link.png';

export default class ExternalLink extends React.Component {
    /**
     * Constructs an external link react component
     * @param {string} text - The link description text (e.g. "Github")
     * @param {string} url - The link url to direct to
     * @returns External link component
     */
    render() {
        const { text, url } = this.props;
        return (
            <a className="card horizontal-content" href={url} target="_blank" rel="noreferrer">
                {text}
                <img className="icon" src={linkIcon} alt="" />
            </a>
        );
    }
}