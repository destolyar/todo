import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { ToDoHistoryItem } from './ToDoHistoryItem'

export const ToDoHistory = () => {
  const history: string[] = useSelector((state: RootState) => state.tasksSlice.taskHistory)
  const theme = useSelector((state: RootState) => state.themeSlice.theme)

  return(
    <main className="todo-list">
      {(history.length <= 0) ? <h1 className='todo-list__title'>You don't have history any yet</h1> : 
      <>     
      <h1 className='todo-list__title'>ToDo History</h1>
      <div className='todo-list__items'>
        {history.map((task, index) => <ToDoHistoryItem key={index} theme={theme} task={task}/>)}
      </div>
      </>} 
    </main>
  )
}