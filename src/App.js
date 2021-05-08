import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTasks, setShowAddTasks] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Wake up',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Do my homework',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Take some rest',
      day: 'Feb 2th at 2:00pm',
      reminder: false,
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ?
        {
          ...task,
          reminder: !task.reminder
        } :
        task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={()=>{setShowAddTasks(!showAddTasks)}} showAdd={showAddTasks}/>
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
        (<h3 style={{ marginTop: '50px' }}>No tasks to show</h3>)}
    </div>
  )
}

export default App;
