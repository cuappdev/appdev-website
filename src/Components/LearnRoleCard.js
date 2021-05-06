import React from "react";
import Button from "./Button";

import "./css/Card.css";
import  "./css/LearnRoleCard.css"


export default class LearnMoreCard extends React.Component {
    /**
     * Constructs a Learn MOre About Each Role Card
     * @param {string} team - The subteam of the desired role
     * @param {string} name - The tname of that subteam lead
     * @param {string array} description - The list of description phrases for the subteam 
     * @param {string array} recskills - The list of the recommended skills
     * @param {image} leadimg - Image of the subteam lead
     * @param {string} url - External URL
     * @returns Learn Role Card
     */

     

    render() {
        const { team, name, description, recskills, leadimg, url} = this.props;

        const desclist = description.map(item => (
          <p>{item}</p>
        ))

        const skilllist = recskills.map(item => (
          <li>{item}</li>
        ))
        

        return (
            <div className="card role">


              <div className="role-holder">

                <div className="description-holder">
                  <h3>Description</h3>
                  <div
                    className="declist-holder">
                   {desclist}
                  </div>
                  
                  <Button
                    text="Team Application"
                  />
                </div>

                <div className="role-right-holder">

                  <div className="skills-holder">
                    <h3>Recommended Skills</h3>
                    <ul>
                      {skilllist}
                    </ul>  

                 </div>


                 <div className="questions-holder">
                    <h3>Questions?</h3>

                    <div className="member-holder">

                      <img src={leadimg}/>

                      <div className="member-info-holder">
                          <h3>{team + " Lead"}</h3>
                          <h2>{name}</h2>
                          <div>
                            <a className="external-link" href={url} target="_blank" rel="noreferrer">
                                {"Schedule a Chat"}
                            </a>
                          </div>
                      </div>

                    </div>
                    
                 </div>


                </div>

                  
              </div>
                
                
            </div>
        )
    }
}
