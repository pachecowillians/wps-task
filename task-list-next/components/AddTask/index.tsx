import { useState } from "react";
import { Container } from "./style";

type Props = {
    addTask: (taskText: string) => void;
};

const AddTask = ({ addTask }: Props) => {

    const [taskText, setTaskText] = useState('');

    function createTask() {
        if (taskText.length > 0) {
            addTask(taskText);
            setTaskText('');
        } else {
            alert('The field is empty!')
        }

    }

    function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskText(event.target.value)
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            createTask();
        }
    }

    return (
        <Container>
            <input
                id="addTaskText"
                type="text"
                placeholder="Type your task here"
                onChange={handleChangeText}
                value={taskText}
                onKeyPress={handleKeyPress}
            />
            <button type="button" onClick={createTask}>+</button>
        </Container>
    )
}

export default AddTask
