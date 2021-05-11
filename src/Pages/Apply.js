import React from "react";
import LearnMoreCard from "../Components/LearnEventCard";
import LearnRoleCard from "../Components/LearnRoleCard"
import ChatMemberCard from "../Components/ChatMemberCard"


import c1background from '../Images/applybackground.svg'
import appdevlogo from '../Images/appdevlogosquare.svg'
import teamlead from '../Images/amandayang.svg'
import subteamlogos from '../Images/subteamicons.svg'
import quotes from '../Images/quotes.svg'
import headshot from '../Images/amandayang.svg'
import timeline from '../Images/applytimeline.svg'
import timelinemobile from '../Images/timelinemobile.svg'

import "../Components/css/Card.css";
import "../Components/css/CourseTopicCard.css";
import "../Apply.css"
import Button from "../Components/Button";

function Apply(props){

    return(

        <div className="apply-container">

            <div className="container-1">

                <img className="desktop-only" src={c1background}/>

                <div className="apply-home">

                    <div className="apply-center">
                        <img className="desktop-only" src={appdevlogo}/>
                        <h className="apply-largetext">Create joy at Cornell.</h>

                        <div className="apply-textblock">
                            <h className="apply-smalltext">Find your fit and help us build real apps that impact students everyday.</h>
                        </div>

                        <div className="mobile-only apply-button">
                            <Button
                                text="Apply Now"
                            />
                        </div>

                        <img className="mobile-only sub-logos" src={subteamlogos}/>
                        
                       
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

                        <h className="apply-smalltext">Don't worry, no jump scares here. We'll update this timeline as we figure out the details.</h>
                    </div>


                </div>
                <div className="desktop-only">
                    <div className="apply-recruitment-timeline" style={{ marginLeft: '-6%', marginTop:'5%', paddingRight:'5%', paddingTop:'5%', paddingBottom:'10%'}}>
                        <img src={timeline} style={{width:'100%'}}/>
                    </div>
                </div>

                <div className="mobile-only">
                    <div className="apply-recruitment-timeline" style={{marginTop:'-5%'}}>
                        <img src={timelinemobile} style={{width:'50%', marginLeft: '30%'}}/>
                    </div>
                </div>
                

                <div className="apply-recruitment-mid container-3-padded">

                  <h className="apply-medtext">Hear more about our work and chat with members</h>

                  <div className="apply-event-cards container-3-padded">

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

                    <div className="horizontal-scroll learnrole-cards">
                        <LearnRoleCard
                            team="Design"
                            name="Amanda Yang"
                            description={["As a Product Designer on Cornell AppDev, you are a director of user experience. You take complex problems and create joy through elegant design solutions.", 
                                           "You work on all stages of the design process, including user research, product thinking, iterating through feedback, prototyping, and user testing.",
                                            "Working with developers, you design real apps used by real people everyday."]}
                            recskills={["Some Experience with Figma, Setch, or Equivalent", "Completion of Intro to Digital Product Design course or prior design experience"]}
                            leadimg={teamlead}
                        />
                        <LearnRoleCard
                            team="Design"
                            name="Amanda Yang"
                            description={["As a Product Designer on Cornell AppDev, you are a director of user experience. You take complex problems and create joy through elegant design solutions.", 
                                           "You work on all stages of the design process, including user research, product thinking, iterating through feedback, prototyping, and user testing.",
                                            "Working with developers, you design real apps used by real people everyday."]}
                            recskills={["Some Experience with Figma, Setch, or Equivalent", "Completion of Intro to Digital Product Design course or prior design experience"]}
                            leadimg={teamlead}
                        />
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

            <div className="container-5">

                <div className="inner">
                    <h className="apply-largetext">Don't just take it from us...</h>

                    <div className="quote-holder">

                        <div className="quote-text-holder">
                            <img src={quotes}/>
                            <h className="apply-smalltext">AppDev is hype! I learn so much everyday from my subteam lead and fellow members. I work on Eatery, which means my impact is really felt by students across the entire school. We're a family of friends who love to hang too! Some of my best memories in college are as a member of Cornell AppDev.</h>

                        </div>
                        
                        <div className="quote-person-holder">
                            <img src={headshot}/>
                            <h className="apply-largetext">Adam Kadhim</h>
                            <h className="apply-graytext">Android - Eatery</h>

                        </div>

                    </div>


                </div>

              
                
                <div className="desktop-only">

                    
                    <div className="chatmember-holder">

                        <h className="apply-largetext">Talk with our members yourself</h>
                    

                        <div className="horizontal-scroll chat-cards">
                            
                            <ChatMemberCard
                                title="Design Lead"
                                name="Amanda Yang"
                                img={headshot}
                            />

                            <ChatMemberCard
                                title="Design Lead"
                                name="Amanda Yang"
                                img={headshot}
                            />

                            <ChatMemberCard
                                title="Design Lead"
                                name="Amanda Yang"
                                img={headshot}
                            />

                            <ChatMemberCard
                                title="Design Lead"
                                name="Amanda Yang"
                                img={headshot}
                            />

                            <ChatMemberCard
                                title="Design Lead"
                                name="Amanda Yang"
                                img={headshot}
                            />


                        </div>

                    </div>
                </div>
                

            </div>
    
        </div>

        
    )
  }
  export default Apply