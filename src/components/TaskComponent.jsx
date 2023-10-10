/* eslint-disable react/prop-types */
import style from './TaskComponents.module.css'
import { Trash, Check } from "@phosphor-icons/react";
import { useState } from 'react';

export const TaskComponent = ({task, deleteTask, toggleComplete}) => {

  const [isActive, setIsActive] = useState(false);
  const [changeIconOnCheck, setChangeIconOnCheck] = useState(false)

  const handleTaskCheck = () => {
    setIsActive(current => !current);
    setChangeIconOnCheck(current => !current)

    toggleComplete(task.id)
  }

  return (
    <div className={style.taskList}>
        <div className={style.taskCheckAndText}>
          <button 
            style={{
              width: '1rem',
              height: '1rem',
              borderRadius: '8px',
              backgroundColor: isActive ? 'var(--purple-dark)' : 'var(--gray-500)',
              border: isActive ? 'none' : '2px solid var(--blue-light)',
            }}
            onClick={handleTaskCheck}
          >
            {changeIconOnCheck ? <Check size={10} color="#fff"/> : ''}
          </button>
          <p
            style={{
              color: isActive? 'var(--gray-300)' : 'var(--gray-100)',
              textDecoration: isActive? 'line-through' : 'none',
            }}
          >{task.task}</p>
        </div>
        
        <button 
          onClick={() => deleteTask(task.id)}
          className={style.buttonDelete}
        >
          <Trash size={20} color="var(--gray-300)" />
        </button>
    </div>
  )
}
