import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import './Components/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button text="PRIMARY BUTTON" onClick={() => alert('primary button clicked')}/>
        <Button text="secondary button" type="secondary" onClick={() => alert('secondary button clicked')}/>
      </header>
    </div>
  );
}

export default App;
