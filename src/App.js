import './App.css';
import React from "react";
import { useEffect } from 'react';
import StepFirstForm from './components/StepFirstForm';
import jobJsonDataStructure from './constants/jobJsonDataStructure'; 

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [jobData, setJobData] = React.useState(jobJsonDataStructure)
  
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Job
      </button>
      {showModal ? (
        <StepFirstForm setShowModal={setShowModal} jobData={jobData} setJobData={setJobData}/>
      ) : null}
    </>
  );
}

export default App;
