import styles from './styles.module.css';

type TypeTask = {
    id: number;
    text: string;
};

type Props = {
    task: TypeTask;
    doTask: (taskId: number) => void;
    setTaskEdited: (task: TypeTask) => void;
};

const Task = ({ task, doTask, setTaskEdited }: Props) => {
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
