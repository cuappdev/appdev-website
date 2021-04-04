import mockup from './Images/mockup.png';
import sunIcon from './Images/icon-sun.png';
import './App.css';
import Button from './Components/Button';
import CourseTopicCard from './Components/CourseTopicCard';
import './Components/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
                  text="nav button"
                  type="nav"
                  onClick={() => alert("nav button clicked")}
                  size="20px"
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

export default App;
