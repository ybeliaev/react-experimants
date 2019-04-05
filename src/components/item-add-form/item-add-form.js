import React from "react";
import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  render() {
    return (
      <form>
        <form className="item-add-form">
          <input
            type="text"
            className="form-control"
            placeholder="Whats need to be done?"
          />
          <button className="btn btn-warning">Add item</button>
        </form>
      </form>
    );
  }
}
