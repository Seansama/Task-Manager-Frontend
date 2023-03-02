import React from 'react';
import Task from './task';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TaskList;