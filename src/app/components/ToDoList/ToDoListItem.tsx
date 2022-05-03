import '../../styles/components/todo-item.scss'
import { useSelector } from 'react-redux'
import { ToDoListItemProps } from '../../enities/interfaces/todo-list-item'
import { ReduxState } from '../../enities/interfaces/redux-state'

export const ToDoListItem = (props: ToDoListItemProps) => {
  let theme = useSelector((state: ReduxState) => state.theme)
  return(
    <div className="todo-item" style={(theme !== 'Light') ? {backgroundColor: "#2e2e2e"} : {}}>
      <input className='todo-item__checkbox' type="checkbox" id='todo-item-1'/>
      <label className='todo-item__checkbox-label' htmlFor="todo-item-1"></label>
      <h3 className='todo-item__title'>{props.task}</h3>
    </div>
  )
}