import { useState } from "react";

const Header = ({setRefresh}) => {
  const [task, setTask] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
	  const newTodo = {task, done: false}

	  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			setTask("")
			setRefresh(true)

			setTimeout(() => {
				alert('new todo added.')
			}, 500)
        });
  }

  return (
    <div id="todo-header" className="header">
      <h2>Task Todo Winda Anastasya</h2>
	  <input 
		  type="text"
		  value={task}
		  onChange={(e) => setTask(e.target.value)}
	  />
      <span className="add-button" onClick={addTodo}>Add</span>
    </div>
  );
};

export default Header;