import '../../styles/components/todo-list.scss'
import { AddTaskForm } from './AddTaskForm'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = () => {
  return(
    <main className="todo-list">
      <h1 className='todo-list__title'>ToDo List</h1>
      <AddTaskForm/>
      <div className='todo-list__items'>
        <ToDoListItem/>
      </div>
    </main>
  )
}