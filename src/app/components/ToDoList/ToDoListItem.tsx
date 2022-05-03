import '../../styles/components/todo-item.scss'

export const ToDoListItem = () => {
  return(
    <div className="todo-item">
      <input className='todo-item__checkbox' type="checkbox" id='todo-item-1'/>
      <label className='todo-item__checkbox-label' htmlFor="todo-item-1"></label>
      <h3 className='todo-item__title'>Item</h3>
    </div>
  )
}