// Step 24 - Create ToDo component
import { useState } from "react";

// Step 22 - Import UI component
import Checkbox from "../checkbox";

import classes from "./todo.module.css";

const TodoList = () => {
  // Step 3 - Create a new state variable
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false,
  });
  // Step 5 - Create a new useState hook
  const [todos, setTodos] = useState([]);
  // Step 6 - Create a new function
  function addTodos(e) {
    e.preventDefault();
    // Step 7
    setTodos([
      // Step 8 - Add spread operator
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false,
      },
    ]);
    // Step 9 - Reset the state
    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false,
    });
  }

  // Step 14 - Create a new function
  const handleToggle = (id) => {
    // Step 15 - Sieving through the todos to return only completed todos
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, isCompleted: true }
        : { ...task };
    });
    // Set new ToDo list with updated variables
    setTodos(mapped);
  };

  // Step 17 - Add a handleClick handler for button
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   handleToggle(e.currentTarget.id);
  // };
  return (
    <div className="App">
      {/* <h1>ToDo List</h1> */}
      <form
        // Step 10 & 11 - Add onSubmit event handler
        onSubmit={addTodos}
      >
        <div className={classes["flex-group"]}>
          <label className={classes.label}>
            Task
            <input
              className={classes.input}
              type="text"
              placeholder="Walk the dog..."
              value={task.taskDescription}
              name="taskDescription"
              // Step 4 - Add setTask() to onChange event handler
              onChange={(event) =>
                setTask({
                  taskDescription: event.target.value,
                  isCompleted: false,
                })
              }
            />
          </label>
          <button className={classes.button}>Add to List</button>
        </div>
      </form>
      <>
        {todos.length > 0 ? (
          <>
            {todos.map((t, index) => {
              return (
                <div id={t.id} key={index + t.id} value={t.id}>
                  {t.isCompleted ? (
                    <strike>
                      <p>{t.taskDescription}</p>
                    </strike>
                  ) : (
                    // <>
                    //   <p>{t.taskDescription}</p>
                    //   <button
                    //     id={t.id}
                    //     key={index + t.id}
                    //     value={t.id}
                    //     // onClick={() => console.log("Clicked as completed.")}
                    //     // Step 18 - Add handleClick handler
                    //     onClick={handleClick}
                    //   >
                    //     Complete
                    //   </button>
                    // </>
                    // Step 23 - Replace code and insert checkbox component //
                    <Checkbox
                      label={t.taskDescription}
                      value={t.id}
                      checked={t.isCompleted}
                      onChange={(e) => handleToggle(t.id)}
                    />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <p>No tasks for today!</p>
        )}
      </>
    </div>
  );
};

export default TodoList;
