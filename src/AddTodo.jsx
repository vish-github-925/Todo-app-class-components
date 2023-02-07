import { Component } from "react";
import styles from "./AddTodo.module.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("clicking addtodo button");
    e.preventDefault();
    this.props.addTodo(this.state);
    console.log("dispatched addtodo");
    this.setState({ ...this.state, title: "" });
  }
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit} className={styles.addTodo}>
          <label htmlFor="todoTitle">
            <input
              className={styles.inputForm}
              name="todoTitle"
              type="text"
              placeholder="Add your todo"
              value={this.state.title}
              onChange={(e) =>
                this.setState({ ...this.state, title: e.target.value })
              }
              required
            />
          </label>
          <button type="submit" className={styles.submit}>
            Add Todo
          </button>
        </form>
      </section>
    );
  }
}
export default AddTodo;
