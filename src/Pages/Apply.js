import React from "react";
import LearnMoreCard from "../Components/LearnMoreCard";

import appdevlogo from '../Images/appdevlogosquare.svg'

import "../Components/css/Card.css";
import "../Components/css/CourseTopicCard.css";
import "../Apply.css"

function Apply(props){

    return(

        <div className="apply-container">

            <div className="container-1">
                <div className="apply-home">

                    <div className="apply-center">
                        <img src={appdevlogo}/>
                        <h className="apply-createjoy">Create joy at Cornell</h>
                        <h className="apply-find">Find your fit and help us build real apps</h>
                        <h className="apply-find">that impact students everyday.</h>
                    </div>

                </div>
                

            </div>

            <LearnMoreCard
                date = "Monday, September 16"
                title = "Cornell AppDev Info Session"
                description = "Cornell AppDev is recruiting developers, designers, and officers to join our Core Team! Come out and talk to our core team members to learn more."
            />
        </div>

        
    )
  }
  export default Apply