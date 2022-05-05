import '../../styles/components/add-task-form.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask as addTaskReducer } from '../../store/slices/tasksSlice'
import { RootState } from '../../store/store'

export const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const tasks = useSelector((state: RootState) => state.tasksSlice.currentTasks)
  const dispatch = useDispatch()

  const addTask = () => {
    if(inputValue.split(' ').join('').length > 0 && !tasks.includes(inputValue)) {
      dispatch(addTaskReducer(inputValue))
      setInputValue('')
    }
  }

  return(
    <div className='add-task-form'>
      <input 
      className='add-task-form__input' 
      placeholder='Type what you want to do here' 
      type="text" value={inputValue} 
      onChange={element => element.target.value.length <= 72 && setInputValue(element.target.value)}
      onKeyDown={event => event.key === 'Enter' && addTask()}/>
      <button className='add-task-form__button' onClick={() => addTask()}>Add</button>
  </div>
  )
}