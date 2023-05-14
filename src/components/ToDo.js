import React, { useState } from "react";
import "./ToDo.css"
function TodosComponent() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "bake a cake",
      isCompleted: true
    },
    {
      todo: "go for a walk",
      isCompleted: false
    },
    {
      todo: "contribute a web development tutorial on Enlight",
      isCompleted: false
    }
  ]);

  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }

  return (
    <div className="cardTo">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
     <div>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={e => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="What needs to get done?"
      />
      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  </div>
</div>
   
  );
}
export default TodosComponent;