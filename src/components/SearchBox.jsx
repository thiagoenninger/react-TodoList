/* eslint-disable react/prop-types */
import style from './SearchBox.module.css'
import {PlusCircle} from '@phosphor-icons/react'
import { useState } from 'react'

export function SearchBox(props) {

  const [value, setValue] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addTask(value)
    setValue("")
  }

  return (
    <div className={style.wrapper}>
      <form className={style.searchBox} onSubmit={handleSubmit}>
        <input
          placeholder='Adicione uma nova tarefa'
          className={style.textArea}
          required
          onChange={handleChange}
          value={value}
        />
        <button 
          type="submit"
          className={style.createTask}  
        >
          <p>Criar</p>
          <PlusCircle size={16} />    
        </button>
      </form>
    </div>
  )
}