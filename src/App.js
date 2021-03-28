import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
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
