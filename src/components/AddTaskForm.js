import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [lastId, setLastId] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('Title is required!');
      return;
    }

    if (!description.trim()) {
      const confirmAddWithoutDescription = window.confirm(
        'Description is empty. Are you sure you want to add the task without a description?'
      );
      if (!confirmAddWithoutDescription) {
        return;
      }
    }

    onAddTask({
      id: lastId + 1,
      title,
      description,
      status,
    });

    setTitle('');
    setDescription('');
    setStatus('To Do');
    setLastId((prevId) => prevId + 1);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-md p-2 w-full"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded-md p-2 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-md p-2 w-full md:w-48"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white rounded-md p-2 w-full md:w-32"
      >
        Add      </button>
    </form>
  );
};

export default AddTaskForm;
