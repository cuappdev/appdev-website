import designMockup from './Images/design-mockup.png';
import hackChallengeMockup from "./Images/hack-challenge.png";
import sunIcon from './Images/icon-sun.png';
import './App.css';
import Button from './Components/Button';
import CourseTopicCard from './Components/CourseTopicCard';
import HackChallengeCard from './Components/HackChallengeCard';
import './Components/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HackChallengeCard
          award="Overall Winner"
          appName="Crumble"
          description="Crumble is a cooking app in which the user types in the ingredients they’d like to use in cooking a meal and the app will provide a list of popular recipes that you can make using those ingredients."
          names={["Nathan Stack", "Will Tappen", "Beth Mieczkowski", "Yue Sun"]}
          github="https://github.com/"
          img={hackChallengeMockup}
        />
        <CourseTopicCard
          icon={sunIcon}
          intro="PRODUCT THINKING"
          header="Designing the right thing"
          description="Learn how to find the right problem space, do real user reserach, and ideate a variety of solutions using industry processes."
          img={designMockup}
        />
        <Button text="PRIMARY BUTTON" onClick={() => alert('primary button clicked')} />
        <Button text="secondary button" type="secondary" onClick={() => alert('secondary button clicked')} />
      </header>
    </div>
  );
}

export default App;
