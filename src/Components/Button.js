import React from "react";

import "./css/Button.css";
import Apple from "../Assets/Apple"
import GooglePlay from "../Assets/GooglePlay"

export default class Button extends React.Component {
    /**
     * Constructs a Button react component
     * @param {string} text - The text inside the button
     * @param {string} type - Button type: "primary"(default)/"secondary"/"nav"
     * @param {function reference} onClick - onClick listener
     * @param {string} size - Size of font (optional)
     * @param {string} color - Primary color of button. Default: red(CA4238)
     * @param {string} icon - Show icon: "Apple"(app store) / "Google"(play store)
     * @returns Button component with [text]
     */
    state = {
        isSelected: false,
        type: "primary",
    };
    // Sets a button to selected
    toggleSelected = () => {
        this.setState((prevState) => ({ isSelected: !prevState.isSelected }));
    };
    render() {
        const type = this.props.type ? this.props.type : this.state.type;
        const isSelected = this.props.isSelected
            ? this.props.isSelected
            : this.state.isSelected;

        return (
            <button
                className={`button ${type} ${isSelected ? "selected" : ""}`}
                onClick={
                    type === "nav"
                        ? () => {
                              this.toggleSelected();
                              if (this.props.onClick) this.props.onClick();
                          }
                        : this.props.onClick
                }
                style={{
                    fontSize: this.props.size ? this.props.size : "",
                    background:
                        type === "primary" && this.props.color
                            ? this.props.color
                            : "",
                    color:
                        type !== "primary" && this.props.color
                            ? this.props.color
                            : "",
                }}
            >
                {this.props.icon === "Apple" && <Apple />}
                {this.props.icon === "Google" && <GooglePlay />}
                {this.props.text}
            </button>
        );
    }
}