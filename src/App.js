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
        <CourseTopicCard
          icon={sunIcon}
          intro="PRODUCT THINKING"
          header="Designing the right thing"
          description="Learn how to find the right problem space, do real user reserach, and ideate a variety of solutions using industry processes."
          img={mockup}
        />
        <Button text="PRIMARY BUTTON" onClick={() => alert('primary button clicked')} />
        <Button text="secondary button" type="secondary" onClick={() => alert('secondary button clicked')} />
      </header>
    </div>
  );
}

export default App;
