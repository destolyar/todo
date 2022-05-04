import { useSelector } from "react-redux"
import { ReduxState } from "../../enities/interfaces/redux-state"
import { ToDoHistoryItem } from './ToDoHistoryItem'

export const ToDoHistory = () => {
  const history: string[] = useSelector((state: ReduxState) => state.taskHistory)
  const {theme} = useSelector((state: ReduxState) => state)

  return(
    <main className="todo-list">
      <h1 className='todo-list__title'>ToDo History</h1>
      <div className='todo-list__items'>
        {history.map((task, index) => <ToDoHistoryItem key={index} theme={theme} task={task}/>)}
      </div>
    </main>
  )
}