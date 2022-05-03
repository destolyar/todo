import { useState } from 'react'
import '../../styles/components/add-task-form.scss'
import {useDispatch} from 'react-redux'

export const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const dispatch = useDispatch()

  const addTask = () => {
    if(inputValue.split(' ').join('').length > 0) {
      dispatch({type: "ADD_TASK", payload: inputValue})
      setInputValue('')
    }
  }

  return(
    <div className='add-task-form'>
      <input 
      className='add-task-form__input' 
      placeholder='Type what you want to do here' 
      type="text" value={inputValue} 
      onChange={(element => setInputValue(element.target.value))}
      onKeyDown={(event) => {
        if(event.key === 'Enter') {
          addTask()
        }
      }}/>
      <button className='add-task-form__button' onClick={() => addTask()}>Add</button>
  </div>
  )
}