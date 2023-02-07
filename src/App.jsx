import { Component } from "react";
import DisplayTodos from "./DisplayTodos";
import AddTodo from "./AddTodo";
import "./App.css";
// const Todos = [
//   { id: 1, title: "First Todo", completed: false },
//   { id: 2, title: "Second Todo", completed: false },
// ];
class App extends Component {
  constructor() {
    super();
    this.state = {
      Todos: [],
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  toggleTodo(id) {
    this.setState((prevState) => ({
      ...prevState,
      Todos: prevState.Todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    }));
  }
  deleteTodo(id) {
    console.log(id);
    this.setState((prevState) => ({
      ...prevState,
      Todos: prevState.Todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      }),
    }));
  }
  addTodo(newTodo) {
    this.setState((prevState) => ({
      ...prevState,
      Todos: [
        ...prevState.Todos,
        { ...newTodo, id: `${Date.now()}`, createdAt: new Date() },
      ],
    }));
  }
  updateTodo(id, newTitle) {
    console.log("id", id, "newTitle", newTitle);
    this.setState((prevState) => ({
      ...prevState,
      Todos: prevState.Todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        } else {
          return todo;
        }
      }),
    }));
  }

  render() {
    console.log(this.state.Todos);
    return (
      <main className="main-page">
        <h1 className="title">Welcome to the Todo app</h1>
        <DisplayTodos
          todos={this.state.Todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </main>
    );
  }
}
export default App;
