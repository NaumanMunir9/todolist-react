import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>
          Todo Item
        </h2>
        <TodoItem />
      </section>
    );
  }
}

export default TodoList;
