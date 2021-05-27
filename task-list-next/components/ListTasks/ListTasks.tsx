import Task from '../Task/Task';
import styles from './styles.module.css';

type TypeTask = {
    id: number;
    text: string;
};

type Props = {
    tasks: Array<TypeTask>;
    doTask: (taskId: number) => void;
    setTaskEdited: (task: TypeTask) => void;
};

const ListTasks = ({ tasks, doTask, setTaskEdited }: Props) => {
    return (
        <div className={styles.tasks}>
            {
                tasks.map(
                    (task) => (
                        <Task key={task.id} task={task} doTask={doTask} setTaskEdited={setTaskEdited} />
                    )
                )
            }
        </div>
    )
}

export default ListTasks