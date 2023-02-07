import { Component } from "react";
import styles from "./TodoItem.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import classes from "./AddTodo.module.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      updatedTitle: this.props.todo.title,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.todo.id, this.state.updatedTitle);
    this.state.isEdit = false;
  }
  render() {
    if (this.state.isEdit) {
      return (
        <form onSubmit={this.handleSubmit} className={classes.addTodo}>
          <input
            type="text"
            value={this.state.updatedTitle}
            className={classes.inputForm}
            onChange={(e) =>
              this.setState((prevState) => ({
                ...prevState,
                updatedTitle: e.target.value,
              }))
            }
          />
          <button type="submit" className={classes.submit}>
            update
          </button>
        </form>
      );
    } else {
      return (
        <div className={styles.singleTodo}>
          <h3 className={this.props.todo.completed ? styles.strikeThrough : ""}>
            {this.props.todo.title}
          </h3>
          <p className={styles.date}>
            {this.props.todo.createdAt.toISOString().split("T")[0]}{" "}
            {
              this.props.todo.createdAt
                .toISOString()
                .split("T")[1]
                .split(".")[0]
            }
          </p>
          <div className={styles.singleTodoBtns}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={this.props.todo.completed}
              onChange={() => {
                this.props.toggleTodo(this.props.todo.id);
              }}
            />
            {!this.props.todo.completed && (
              <>
                <FiEdit
                  type="button"
                  onClick={() => {
                    this.setState((prevState) => ({
                      ...prevState,
                      isEdit: !prevState.isEdit,
                    }));
                  }}
                />
                <AiOutlineDelete
                  type="button"
                  className={styles.deleteTodo}
                  onClick={() => {
                    this.props.deleteTodo(this.props.todo.id);
                  }}
                />
              </>
            )}
          </div>
        </div>
      );
    }
  }
}
export default TodoItem;
