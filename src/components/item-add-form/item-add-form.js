import React from "react";
import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = () => {};
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Whats need to be asdone?"
          onChange={this.onLabelChange}
        />
        <p>{this.state.label}</p>
        <button className="btn btn-warning">Add item</button>
      </form>
    );
  }
}
