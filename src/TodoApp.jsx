import { useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [inputString, setInputString] = useState("");

  const inputOnChange = (event) => {
    setInputString(event.target.value);
  };

  const addTodo = () => {
    const newTodoObj = {
      id: todoList.length + 1,
      keyName: inputString,
    };

    setTodoList([...todoList, newTodoObj]);
    console.log(newTodoObj);
  };

  return (
    <>
      <div>
        <div>
          <input type="text" onChange={inputOnChange} />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <TodoList/>
      </div>
    </>
  );
}

export default TodoApp;
