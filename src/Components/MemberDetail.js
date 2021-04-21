import React from "react";
import Facebook from '../Images/Facebook.svg';
import FavoriteSandwich from '../Images/FavoriteSandwich.svg';
import Hometown from '../Images/Hometown.svg';
import Instagram from '../Images/Instagram.svg';
import Linkedin from '../Images/Linkedin.svg';
import Mail from '../Images/Mail.svg';
import Major from '../Images/major.svg';
import Website from '../Images/Website.svg';
import "./css/MemberCard.css";


export default class MemberDetailCard extends React.Component {
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
        const { position, name, startSemester,funFact,major,hometown,favoriteSandwich, image } = this.props;
        return (
            <div className="memberD card">
                <img className="memberD image" src={image} alt="" />
                <div className="MemberD content">
                    <div className="memberD Headline">
                        <h4 className="memberD">{position}</h4>
                        <h1  className="memberD">{name}</h1>
                        <h2  className="memberD">{funFact}</h2>
                    </div>
                    <div className="memberD Caption">
                        <div className="memberD captionLayout"><img className="memberD icon" src={Major}  /> <h5  className="memberD">Studies {major}</h5></div>
                        <div className="memberD captionLayout"><img className="memberD icon" src={Hometown}  /> <h5  className="memberD">{hometown}</h5></div>
                        <div className="memberD captionLayout"><img className="memberD icon" src={FavoriteSandwich} /> <h5  className="memberD">{favoriteSandwich}</h5></div>
                    
                    </div>
                    <hr  className="memberD horizontal"style={{
                            backgroundColor: "#E1E4E8",
                            height: .2,
                            borderColor : "#E1E4E8"
                        }}/>
                    <div className="memberD bottombar">
                        <h5  className="memberP">MEMBER SINCE {startSemester}</h5>
                        <img className="memberD icon2" src={Website} />
                        <img className="memberD icon2" src={Facebook} />
                        <img className="memberD icon2" src={Instagram} />
                        <img className="memberD icon2" src={Linkedin} />
                        <img className="memberD icon2" src={Mail}/>

                    </div>
                </div>
            </div>
        )
    }
}