import React from "react";

export default class Button extends React.Component {
    /**
     * Constructs a Button react component
     * @param {string} text - The text inside the button
     * @param {string} type - (Optional) Button type: primary/secondary/nav
     * @param {function reference} onClick - onClick listener
     * @returns Button component with [text]
     */
    render() {
        if (this.props.type === "secondary") {
            return (
                <button className="button secondary">{this.props.text}</button>
            );
        } else if (this.props.type === "nav") {
            return <button className="button header">{this.props.text}</button>;
        } 

        // Default type
        return <button className="button primary" onClick={this.props.onClick}>{this.props.text}</button>;
    }
}