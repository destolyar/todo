import '../../styles/components/todo-item.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ToDoListItemProps } from '../../enities/interfaces/todo-list-item'
import { useState } from 'react'
import { Transition } from 'react-transition-group'
import { RootState } from '../../store/store'
import { removeTask } from '../../store/slices/tasksSlice'

export const ToDoListItem = ({task}: ToDoListItemProps) => {
  const dispatch = useDispatch()
  let theme = useSelector((state: RootState) => state.themeSlice.theme)
  const [visability, setVisability] = useState<boolean>(true)

  return(
    <Transition in={visability} timeout={{
      appear: 500,
      enter: 500,
      exit: 1000,
    }} mountOnEnter>
      {(state) =>     
        <div className={`todo-item ${state}`} 
        style={theme !== 'Light' ? {backgroundColor: "#2e2e2e"} : {}} 
        onClick={() => {
          setVisability(!visability)
          setTimeout(() => {
            dispatch(removeTask(task))
          }, 1000)
        }}>
          <div className='todo-item__marker'></div>
          <h3 className='todo-item__title'>{task}</h3>
        </div>}
    </Transition>
  )
}