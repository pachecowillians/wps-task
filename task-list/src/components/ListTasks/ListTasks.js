import Task from '../Task/Task';
import styles from './styles.module.css';

const ListTasks = ({ tasks, doTask, setTaskEdited }) => {
    return (
        <div className={styles.tasks}>
            {tasks.map(
                (task) => (
                    <Task key={task.id} task={task} doTask={doTask} setTaskEdited={setTaskEdited} />
                )
            )}
        </div>
    )
}

export default ListTasks