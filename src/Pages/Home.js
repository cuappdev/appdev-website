import React from "react";

import "../App.css";

import Button from "../Components/Button";
import CourseTopicCard from "../Components/CourseTopicCard";
import HackChallengeCard from "../Components/HackChallengeCard";
import hackChallengeMockup from "../Images/hack-challenge.png";
import mockup from "../Images/mockup.png";
import sunIcon from "../Images/icon-sun.png";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <HackChallengeCard
          award="Overall Winner"
          appName="Crumble"
          description="Crumble is a cooking app in which the user types in the ingredients they’d like to use in cooking a meal and the app will provide a list of popular recipes that you can make using those ingredients."
          names={["Nathan Stack", "Will Tappen", "Beth Mieczkowski", "Yue Sun"]}
          url="https://github.com/"
          img={hackChallengeMockup}
        />
        <CourseTopicCard
          icon={sunIcon}
          intro="PRODUCT THINKING"
          header="Designing the right thing"
          description="Learn how to find the right problem space, do real user reserach, and ideate a variety of solutions using industry processes."
          img={mockup}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            text="download our apps"
            onClick={() =>
              alert("Which app would you like to download?")
            }
          />
          <Button
            text="buy us(gimme) coffee"
            type="secondary"
            onClick={() => alert("Bobba tea is also fine")}
          />
        </div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            id="applebutton"
            text="App store"
            onClick={() => alert("Green apples or red apples?")}
            icon="Apple"
            color="#D07000"
          />
          <Button
            id="googlebutton"
            text="google play store"
            onClick={() => alert("Sorry, iPhone only.")}
            color="#D07000"
            icon="Google"
          />
          <Button
            text="see all apps"
            type="secondary"
            onClick={() => alert("Shhh! Web app in progress")}
            color="#D07000"
          />
        </div>
      </header>
    </div>
  );
}
