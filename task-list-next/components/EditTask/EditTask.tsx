import styles from './styles.module.css';

type Task = {
    id: number;
    text: string;
};

type Props = {
    editTask: (task: Task) => void;
    taskEdited: Task;
    setTaskEdited: (taskEdited: Task) => void;
};

const EditTask = ({ editTask, taskEdited, setTaskEdited }: Props) => {

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskEdited({ id: taskEdited.id, text: event.target.value });
    }

    function closeDialog() {
        setTaskEdited({} as Task);
    }

    function updateTask() {
        if (taskEdited.text.length > 0) {
            editTask(taskEdited);
            setTaskEdited({} as Task);
        } else {
            alert('The field is empty!')
        }
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            updateTask();
        }
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalBody} >
                <div className={styles.modalHeader} >
                    <button type="button" onClick={closeDialog}>&#215;</button>
                </div>
                <div className={styles.modalMain} >
                    <input type='text' placeholder="Type your task here" onChange={handleOnChange} onKeyPress={handleKeyPress} value={taskEdited.text} />
                    <button type="button" onClick={updateTask}>&#10003;</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask