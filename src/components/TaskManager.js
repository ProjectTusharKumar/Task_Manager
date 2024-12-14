import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskManager = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('To Do');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (!taskTitle) {
      toast.error("Task title is required!");
      return;
    }

    if (!taskDescription) {
      if (window.confirm("Description is empty. Do you want to add the task without description?")) {
        addTaskToList();
      }
    } else {
      addTaskToList();
    }
  };

  const addTaskToList = () => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      status: taskStatus
    };
    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('To Do');
    toast.success("Task added successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Task Manager</h2>
      
      {/* Task Title */}
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        className="border p-2 w-full mb-2"
      />

      {/* Task Description */}
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
        className="border p-2 w-full mb-2"
      />

      {/* Task Status Dropdown */}
      <select
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
        className="border p-2 mb-4 w-full"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Add Task Button */}
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Add Task
      </button>

      {/* Display Tasks */}
      <div className="mt-4">
        <h3 className="text-lg mb-2">Tasks:</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="mb-2">
              <div className="font-semibold">{task.title}</div>
              <div>{task.description}</div>
              <div>Status: {task.status}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default TaskManager;
