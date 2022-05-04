import '../../styles/components/todo-item.scss'
import { useSelector } from 'react-redux'
import { ToDoListItemProps } from '../../enities/interfaces/todo-list-item'
import { useState } from 'react'
import { Transition } from 'react-transition-group'

export const ToDoListItem = ({task, index}: ToDoListItemProps) => {
  let theme = useSelector((state: any) => state.theme)
  const [visability, setVisability] = useState<boolean>(true)

  return(
    <Transition in={visability} timeout={490} mountOnEnter unmountOnExit>
      {(state: any) =>     
        <div className={`todo-item ${state}`} 
        style={theme !== 'Light' ? {backgroundColor: "#2e2e2e"} : {}} 
        onClick={() => setVisability(!visability)}>
          <input className='todo-item__checkbox' type="checkbox" id={`todo-item-${index}`}/>
          <label className='todo-item__checkbox-label' htmlFor={`todo-item-${index}`}></label>
          <h3 className='todo-item__title'>{task}</h3>
        </div>}
    </Transition>
  )
}