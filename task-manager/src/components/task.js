import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task, onUpdate, onDelete }) => {
    const handleToggleCompletion = () => {
        onUpdate({ ...task, completed: !task.completed });
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <div className="task">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <Button
                variant={task.completed ? 'success' : 'warning'}
                onClick={handleToggleCompletion}
            >
                {task.completed ? 'Completed' : 'Incomplete'}
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};

export default Task;
