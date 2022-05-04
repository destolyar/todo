import '../../styles/components/todo-item.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ToDoListItemProps } from '../../enities/interfaces/todo-list-item'
import { useState } from 'react'
import { Transition } from 'react-transition-group'
import { ReduxState } from '../../enities/interfaces/redux-state'

export const ToDoListItem = ({task}: ToDoListItemProps) => {
  const dispatch = useDispatch()
  let {theme, currentTasks} = useSelector((state: ReduxState) => state)
  const [visability, setVisability] = useState<boolean>(true)

  return(
    <Transition in={visability} timeout={{
      appear: 500,
      enter: 300,
      exit: 980,
    }} mountOnEnter>
      {(state: any) =>     
        <div className={`todo-item ${state}`} 
        style={theme !== 'Light' ? {backgroundColor: "#2e2e2e"} : {}} 
        onClick={() => {
          setVisability(!visability)
          setTimeout(() => {
            dispatch({type: "REMOVE_TASK", payload: task})
          }, 1000)
        }}>
          <input className='todo-item__checkbox' type="checkbox"/>
          <label className='todo-item__checkbox-label'></label>
          <h3 className='todo-item__title'>{task}</h3>
        </div>}
    </Transition>
  )
}