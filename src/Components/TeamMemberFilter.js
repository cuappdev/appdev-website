import React, { Component } from "react";
import "../Pages/Team.css";
import Button from "./BlackWhiteButton.js";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "all"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };

  render() {
    return (
      
         <div className="horizontal-flexbox">
             <Button
            id="all"
            text="all"
            isSelected={true}
            onClick={this.handleOptionChange}
            icon="Apple"
          />
      <Button
            id="team lead"
            text="Team Leads"
            onClick={this.handleOptionChange}
            icon="Apple"
          />
        
          <Button
            id="design"
            text="Design"
            onClick={this.handleOptionChange}
            icon="Apple"
          />
          <Button
            id="ios"
            text="ios"
            onClick={this.handleOptionChange}
            icon="Apple"
          />
          <Button
            id="android"
            text="android"
            onClick={this.handleOptionChange}
            icon="Apple"
          />
          <Button
            id="backend"
            text="backend"
            onClick={this.handleOptionChange}
            icon="Apple"
          />
          <Button
            id="marketing"
            text="marketing"
            onClick={this.handleOptionChange}
            icon="Apple"
          />
    </div>
    );
  }
}

export default App;