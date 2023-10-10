import { useState } from "react";
import style from "./Task.module.css";
import { SearchBox } from "./SearchBox";
import { v4 as uuidv4 } from "uuid";
import { TaskComponent } from "./TaskComponent";

uuidv4();

export function Task() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (text) => {
    setTaskList([...taskList, { id: uuidv4(), task: text }]);
    console.log(taskList);
  };

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id))
  }

  const toggleComplete = id => {
    setTaskList(taskList.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }

  const tasksCompleted = taskList.filter(task => task.completed).length
  const totalTasks = taskList.length;

  return (
    <div className={style.container}>
      <SearchBox addTask={addTask} />

      <div className={style.taskInfo}>
        <div className={style.taskInfoLeftSide}>
          <p>Tarefas criadas</p>
          <p className={style.contador}>{totalTasks}</p>
        </div>
        <div className={style.taskInfoRightSide}>
          <p>Concluídas</p>
          <p className={style.contador}>{tasksCompleted} de {totalTasks}</p>
        </div>
      </div>
      
      {taskList.map((text, index) => (
        <TaskComponent 
          task={text} 
          key={index}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}

    </div>
  );
}
