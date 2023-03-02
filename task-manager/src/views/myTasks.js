import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from 'task-manager/src/components/header.js';
import TaskForm from 'task-manager/src/components/taskForm.js';
import TaskList from 'task-manager/src/components/taskList.js';
import Footer from 'task-manager/src/components/footer.js';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const handleAddTask = task => {
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(res => res.json())
            .then(data => setTasks([...tasks, data]));
    };

    const handleUpdateTask = task => {
        fetch(`/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(res => res.json())
            .then(data =>
                setTasks(tasks.map(t => (t.id === data.id ? { ...t, ...data } : t)))
            );
    };

    const handleDeleteTask = id => {
        fetch(`/api/tasks/${id}`, { method: 'DELETE' })
            .then(() => setTasks(tasks.filter(t => t.id !== id)))
            .catch(err => console.error(err));
    };

    const handleSearch = searchTerm => {
        fetch(`/api/tasks/search?name=${searchTerm}`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err));
    };

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <TaskForm onSubmit={handleAddTask} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TaskList
                            tasks={tasks}
                            onUpdateTask={handleUpdateTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer onSearch={handleSearch} />
        </>
    );
};

export default App;