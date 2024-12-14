import React, { useEffect, useState } from 'react';
import AddTaskForm from './AddTaskForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const TaskTable = ({ searchQuery, filterStatus }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      const initialTasks = res.data.slice(0, 20).map((task) => ({
        id: task.id,
        title: task.title,
        description: 'N/A',
        status: task.completed ? 'Done' : 'To Do',
      }));
      setTasks(initialTasks);
    });
  }, []);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
    toast.success('Task added successfully!');
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (filterStatus === 'All' || task.status === filterStatus) &&
      (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <AddTaskForm onAddTask={handleAddTask} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-gradient-to-r from-orange-500 to-pink-500 p-5 rounded-lg shadow-md relative"
          >
            <button
              onClick={() => deleteTask(task.id)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-md p-2"
            >
              Delete
            </button>
            <h1 className="text-lg font-semibold">{task.title}</h1>
            <p>{task.description}</p>
            <p className="text-sm text-gray-700">Status: {task.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskTable;
