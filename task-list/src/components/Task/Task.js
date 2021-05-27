import styles from './styles.module.css';

const Task = ({ task, doTask, setTaskEdited }) => {
    return (
        <div className={styles.task}>
            <div className={styles.textTask}>
                {task.text}
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttonEditTask} type="button" onClick={() => { setTaskEdited(task) }}>&#9998;</button>
                <button className={styles.buttonDeleteTask} type="button" onClick={() => { doTask(task.id); }}>&#215;</button>
            </div>
        </div>
    )
}

export default Task
