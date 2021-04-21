import React from "react";
import MemberPreviewCard from "../Components/MemberPreview.js";
import MemberDetailCard from "../Components/MemberDetail.js";
import Filter from "../Components/TeamMemberFilter";
import AppDevLogo from "../Images/Rubyappdevlogo.svg";
import background from "../Images/Backgroundteambackground.svg";

import MemberDetailImage from "../Images/teamdetail.svg";
import MemberPreviewImage from "../Images/teampreview.png";
import "./Team.css";



export default function Team() {
    return (
    <div>
        <div className="header">
            <div className="center">
                <img className="AppDevLogo" src={AppDevLogo} alt="" />
                <h6 className="slogan" >Teamwork makes the dream work</h6>
                <h6 className="subslogan" >We’re only as great as our members, and that’s a pretty high bar.</h6>
            </div>
        </div>

        {/* <MemberDetailCard 
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    funFact="Creating joy @Cornell, @Instagram. Strong advocate for sweet tea."
    major="Information Science"
    hometown="From Dallas, Texas"
    favoriteSandwich="Frisco Patty Melt"
    image={MemberDetailImage}
    />     */}
    <h6 className="subtitle" >Meet the team</h6>

    <Filter></Filter>
    <div className="horizontal-flexbox">
    
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
    <MemberPreviewCard
    position="Design & Team Lead"
    name="Zain Khoja"
    startSemester="SP19"
    image={MemberPreviewImage}
    />
     </div>

    </div>
    );
}
