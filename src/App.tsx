import './App.scss';
import { Header } from './app/components/Header';
import { Layout } from './app/components/Layout';
import { ToDoHistory } from './app/components/ToDoHistory/ToDoHistory';
import { ToDoList } from './app/components/ToDoList/ToDoList';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Routes>
          <Route path='/' element={<ToDoList/>}/>
          <Route path='/history' element={<ToDoHistory/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
