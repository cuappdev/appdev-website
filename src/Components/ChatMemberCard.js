import React from "react";

import "./css/Card.css";
import "./css/ChatMemberCard.css"


export default class ChatMemberCard extends React.Component {
    /**
     * Constructs a cChatMemberCard react component
     * @param {image} img - Image of the member
     * @param {string} title - The title of the member
     * @param {string} name - The name of the member
     * @param {string} url - External URL
     * @returns ChatMemberCard
     */
    render() {
        const { img, title, name, url} = this.props;
        return (
            <div className="card chat member-holder">
                <img src={img}/>
                <div className="member-info-holder">
                  <h3>{title}</h3>
                  <h2>{name}</h2>
                  <div>
                    <a className="external-link" href={url} target="_blank" rel="noreferrer">
                        {"Schedule a Chat"}
                    </a>
                  </div>
                </div>
                
            </div>
        )
    }
}
