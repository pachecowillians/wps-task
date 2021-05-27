import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ListTasks from './components/ListTasks/ListTasks'
import EditTask from './components/EditTask/EditTask'
import styles from './style.module.css'

function App() {

    const [taskEdited, setTaskEdited] = useState({});
    const [countTasks, setCountTasks] = useState(0);
    const [tasks, setTasks] = useState([]);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = (text) => {
        setCountTasks(countTasks + 1);

        const newTask = {
            id: countTasks,
            text
        }

        setTasks([newTask, ...tasks])
    }

    const editTask = (task) => {
        var item = tasks.find(taskSearched => taskSearched.id == task.id);
        if (item) {
            item.text = task.text;
        }
    }

    const renderTaskEdit = () => {
        if (Object.keys(taskEdited).length === 0 && taskEdited.constructor === Object) {
            return;
        } else {
            return <EditTask editTask={editTask} stateTaskEdited={[taskEdited, setTaskEdited]} />;
        }
    }

    return (
        <div>
            <Header />
            {renderTaskEdit()}
            <div className={styles.taskContainer}>
                <AddTask addTask={addTask} />
                <ListTasks tasks={tasks} doTask={deleteTask} setTaskEdited={setTaskEdited} />
            </div>
        </div>
    )
}

export default App;
