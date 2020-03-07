import React from 'react';

export class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          text: props.text,
          isDone: props.isDone
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        isDone: event.target.checked
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <div className={`ItemText ${this.state.isDone === true ? "IsDone" : ""}`}>{this.state.text}</div>
            <input
                className="ItemCheckbox"
                onChange={this.handleChange}
                name="isDone"
                type="checkbox"
                checked={this.state.isDone} />
        </div>
      );
    }
  }