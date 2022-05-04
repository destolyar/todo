import { ReduxState } from '../../enities/interfaces/redux-state'
import '../../styles/components/todo-list.scss'
import { AddTaskForm } from './AddTaskForm'
import { ToDoListItem } from './ToDoListItem'
import {useSelector} from 'react-redux'

export const ToDoList = () => {
  const tasks = useSelector((state: ReduxState) => state.currentTasks)

  return(
    <main className="todo-list">
      <h1 className='todo-list__title'>ToDo List</h1>
      <AddTaskForm/>
      <div className='todo-list__items'>
        {tasks.map((task: string, index: number) => <ToDoListItem key={index} task={task} index={index}/>)}
      </div>
    </main>
  )
}