import React from "react";
import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  render() {
    return (
      <form className="item-add-form">
        <input
          type="text"
          className="form-control"
          placeholder="Whats need to be done?"
          onChange={this.onLabelChange}
        />
        <button className="btn btn-warning">Add item</button>
      </form>
    );
  }
}
