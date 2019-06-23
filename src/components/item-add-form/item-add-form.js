import React from "react";
import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      // можно добавить ф-ию к e.target.value для обработки , напр. toUpperCase()
      label: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    // сброс значения label
    this.setState({
      label: ""
    });
  };
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Whats need to be asdone?"
          onChange={this.onLabelChange}
          // для контролирования элемента:
          value={this.state.label}
        />
        <p>{this.state.label}</p>
        <button className="btn btn-warning">Add item</button>
      </form>
    );
  }
}
