import { Component } from "react";
import TodoItem from "./TodoItem";
import styles from "./DisplayTodos.module.css";

class DisplayTodos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={styles.displayTodos}>
        {this.props.todos.length > 0 && this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
            updateTodo={this.props.updateTodo}
          />
        ))}
        {this.props.todos.length == 0 && <h1 className={styles.title}>You don't have any todos, start adding one..</h1>}
      </section>
    );
  }
}
export default DisplayTodos;
