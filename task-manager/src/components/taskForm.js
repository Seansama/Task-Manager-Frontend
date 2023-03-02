import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const task = {
            name,
            description,
            dueDate,
            completed: false,
        };

        onSubmit(task);

        setName('');
        setDescription('');
        setDueDate('');
    };

    return (
        <div className="task-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter task name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter task description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter due date"
                        value={dueDate}
                        onChange={e => setDueDate(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Task
                </Button>
            </Form>
        </div>
    );
};

export default TaskForm;