import '../../styles/components/todo-item.scss'
import { useSelector } from 'react-redux'

export const ToDoListItem = () => {
  let theme = useSelector((state: any) => state.theme)
  return(
    <div className="todo-item" style={(theme !== 'Light') ? {backgroundColor: "#2e2e2e"} : {}}>
      <input className='todo-item__checkbox' type="checkbox" id='todo-item-1'/>
      <label className='todo-item__checkbox-label' htmlFor="todo-item-1"></label>
      <h3 className='todo-item__title'>Item</h3>
    </div>
  )
}