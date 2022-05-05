import '../../styles/components/todo-item.scss'
import { ToDoListItemProps } from '../../enities/interfaces/todo-list-item'

export const ToDoHistoryItem = ({task, theme}: ToDoListItemProps) => {
  return(
    <div className="todo-item" 
      style={theme !== 'Light' ? {backgroundColor: "#2e2e2e"} : {}} >
        <div className='todo-item__marker'></div>
        <h3 className='todo-item__title'>{task}</h3>
    </div>
  )
}