import React from "react";
import LearnMoreCard from "../Components/LearnEventCard";
import LearnRoleCard from "../Components/LearnRoleCard"

import appdevlogo from '../Images/appdevlogosquare.svg'
import teamlead from '../Images/amandayang.svg'
import timeline from '../Images/applytimeline.svg'

import "../Components/css/Card.css";
import "../Components/css/CourseTopicCard.css";
import "../Apply.css"

function Apply(props){

    return(

        <div className="apply-container">

            <div className="container-1">
                <div className="apply-home">

                    <div className="apply-center"
                        style={{marginTop:'15%'}}>
                        <img src={appdevlogo}/>
                        <h className="apply-largetext">Create joy at Cornell</h>

                        <div className="apply-textblock">
                            <h className="apply-smalltext">Find your fit and help us build real apps that impact students everyday.</h>
                        </div>
                       
                    </div>

                </div>
                

            </div>

            <div className="container-2">
                <div className="apply-home">

                    <div className="apply-center"
                    style={{marginTop:'10%'}}>
                        <h className="apply-largetext">Build beautiful, functional apps</h>
                        <div className="apply-textblock">
                            <h className="apply-smalltext">Founded in 2014 by a group of students who rallied around building apps, we've grown into a talented group of people who love bringing ideas to life.</h>
                        </div>
                        
                    </div>

                </div>
                

            </div>

            <div className="container-3">

                <div className="apply-recruitment-top container-3-padded">
                    <p className="application-status">Applications are closed</p> 

                    <div className="recruit-textblock">
                        <h className="apply-largetext">Fall 2020 Recruitment</h>

                        <h className="apply-smalltext">Dont' worry, no jump scares here. We'll update this timeline as we figure out the details.</h>
                    </div>


                </div>

                <div className="apply-recruitment-timeline" style={{marginTop:'5%', paddingRight:'5%'}}>
                    {/* <img src={timeline} style={{width:'100%'}}/> */}
                </div>

                <div className="apply-recruitment-mid container-3-padded">

                  <h className="apply-medtext">Hear more about our work and chat with members</h>

                  <div className="apply-cards container-3-padded">
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

            <div className="container-4">

                <div className = "inner">

                    <div className="apply-center">
                            <h className="apply-largetext">Learn more about each role</h>
                            <div className="apply-textblock">
                                <h className="apply-smalltext">Multiple avenues so you can do what you love while growing applicable, industry-level skills.</h>
                            </div>
                        
                    </div>

                    <div className="learnrole-cards">
                        <LearnRoleCard
                            team="Design"
                            name="Amanda Yang"
                            description={["As a Product Designer on Cornell AppDev, you are a director of user experience. You take complex problems and create joy through elegant design solutions.", 
                                           "You work on all stages of the design process, including user research, product thinking, iterating through feedback, prototyping, and user testing.",
                                            "Working with developers, you design real apps used by real people everyday."]}
                            recskills={["Some Experience with Figma, Setch, or Equivalent", "Completion of Intro to Digital Product Design course or prior design experience"]}
                            leadimg={teamlead}
                        />
                    </div>

                </div>

                

            </div>
    
        </div>

        
    )
  }
  export default Apply