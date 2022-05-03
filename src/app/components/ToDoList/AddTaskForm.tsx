import { useState } from 'react'
import '../../styles/components/add-task-form.scss'

export const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState<string>('')
  return(
    <div className='add-task-form'>
      <input className='add-task-form__input' type="text" value={inputValue} onChange={(element => setInputValue(element.target.value))}/>
      <button className='add-task-form__button'>Add</button>
  </div>
  )
}