import React from "react";
import "./css/MemberCard.css";


export default class MemberPreviewCard extends React.Component {
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
        const { position, name, startSemester, image } = this.props;
        return (
            <div className="memberP card">
                    <img className="memberP image" src={image}/>
                <div className="memberP content">
                    <h4 className="memberP">{position}</h4>
                    <h1  className="memberP">{name}</h1>
                    <h5  className="memberP">MEMBER SINCE {startSemester}</h5>
                </div>
            </div>
        )
    }
}