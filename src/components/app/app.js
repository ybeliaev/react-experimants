import React, { Component } from "react";
import List from "../list";
import ItemAddForm from "../item-add-form";
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
  // вариант с использованием ф-ии
  // onAddItem = text => {
  //   const newItem = this.createItem(text);
  //   this.setState(({ someData }) => {
  //     const newArr = [...someData, newItem];
  //     return {
  //       someData: newArr
  //     };
  //   });
  // };
  // вариснт с использованием объекта
  onAddItem = text => {
    const newItem = {
      label: text,
      done: false,
      important: false,
      id: this.maxId++
    };
    this.setState(({ someData }) => {
      const newArr = [...someData, newItem];
      return {
        someData: newArr
      };
    });
  };

  render() {
    const { someData } = this.state;

    return (
      <div className="app">
        <h1>Пример добавления элемента.</h1>
        <h2>Бонус: проброс события c list-item.</h2>
        <List someProps={someData} />
        <ItemAddForm onAddItem={this.onAddItem} />
      </div>
    );
  }
}
