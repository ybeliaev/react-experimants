import React, { Component } from "react";
import List from "../list";
import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    someData: [
      this.createItem("Drink Coffee", true, true),
      this.createItem("Create React App"),
      this.createItem("Study Bible", false, true),
      this.createItem("Read book of Hemingway")
    ]
  };
  createItem(label, done = false, important = false) {
    return {
      label,
      done,
      important,
      id: this.maxId++
    };
  }

  render() {
    const { someData } = this.state;

    return (
      <div className="app">
        <h1>Пример удаления элемента</h1>
        <List someProps={someData} />
      </div>
    );
  }
}
