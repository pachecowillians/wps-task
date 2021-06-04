import { Button, ButtonGroup, Container, Text } from './style';

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

    function editTask() {
        setTaskEdited(task);
    }

    function removeTask() {
        doTask(task.id);
    }
    return (
        <Container>
            <Text>{task.text}</Text>
            <ButtonGroup>
                <Button color={'#6272a4'} onClick={editTask}>&#9998;</Button>
                <Button color={'#ff5555'} onClick={removeTask}>&#215;</Button>
            </ButtonGroup>
        </Container >
    )
}

export default Task
