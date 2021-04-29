import React from "react";
import LearnMoreCard from "../Components/LearnMoreCard";

import appdevlogo from '../Images/appdevlogosquare.svg'
import timeline from '../Images/applytimeline.svg'

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
                        <h className="apply-largetext">Create joy at Cornell</h>

                        <div className="apply-textblock">
                            <h className="apply-smalltext">Find your fit and help us build real apps</h>
                            <h className="apply-smalltext">that impact students everyday.</h>
                        </div>
                       
                    </div>

                </div>
                

            </div>

            <div className="container-2">
                <div className="apply-home">

                    <div className="apply-center2">
                        <h className="apply-largetext">Build beautiful, funcitonal apps</h>

                        <div className="apply-textblock">
                            <h className="apply-smalltext">Founded in 2014 by a group of students who rallied</h>
                            <h className="apply-smalltext">around building apps, we've grown into a talented</h>
                            <h className="apply-smalltext">group of people who love bringing ideas to life.</h>
                        </div>
                        
                    </div>

                </div>
                

            </div>

            <div className="container-3">

                <div className="apply-recruitment-top">
                    <p className="application-status">Applications are closed</p> 

                    <div className="recruit-textblock">
                        <h className="apply-largetext">Fall 2020 Recruitment</h>

                        <h className="apply-smalltext">Dont' worry, no jump scares here. We'll update this</h>
                        <h className="apply-smalltext">timeline as we figure out the details.</h>
                    </div>


                </div>

                <div className="apply-recruitment-timeline" style={{marginTop:'5%'}}>
                    <img src={timeline}/>
                </div>

                <div className="apply-recruitment-mid">
                  <h className="apply-medtext">Hear more about our work and chat with members</h>
                </div>


                <div className="apply-cards">
                    <LearnMoreCard
                    date = "Monday, September 16"
                    title = "Cornell AppDev Info Session"
                    description = "Cornell AppDev is recruiting developers, designers, and officers to join our Core Team! Come out and talk to our core team members to learn more."
                    />

                    <LearnMoreCard
                    date = "Monday, September 16"
                    title = "Cornell AppDev Info Session"
                    description = "Cornell AppDev is recruiting developers, designers, and officers to join our Core Team! Come out and talk to our core team members to learn more."
                    />               
                </div>
                

            </div>


            
        </div>

        
    )
  }
  export default Apply