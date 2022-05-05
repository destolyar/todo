import '../../styles/components/todo-list.scss'
import { AddTaskForm } from './AddTaskForm'
import { ToDoListItem } from './ToDoListItem'
import {useSelector} from 'react-redux'
import { RootState } from '../../store/store'

export const ToDoList = () => {
  const tasks = useSelector((state: RootState) => state.tasksSlice.currentTasks)
  const theme = useSelector((state: RootState) => state.themeSlice.theme)
  return(
    <main className="todo-list">
      <h1 className='todo-list__title'>ToDo List</h1>
      <AddTaskForm/>
      <div className='todo-list__items'>
        {tasks && tasks.map((task: string, index: number) => <ToDoListItem key={index} task={task} theme={theme}/>)}
      </div>
    </main>
  )
}