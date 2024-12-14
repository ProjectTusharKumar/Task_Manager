import React, { useState } from 'react';
import TaskTable from './components/TaskTable';
// import AddTaskForm from './components/AddTaskForm';
import FilterDropdown from './components/FilterDropdown';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen m-5">
    <h1 className="text-4xl font-bold mb-4">Task List Manager</h1>
      <div className="mb-4 flex gap-4">
        <SearchBar onSearch={setSearchQuery} />
        <FilterDropdown onFilter={setFilterStatus} />
      </div>
      <TaskTable searchQuery={searchQuery} filterStatus={filterStatus} />
      <ToastContainer />
    </div>
    </>
  );
};

export default App;