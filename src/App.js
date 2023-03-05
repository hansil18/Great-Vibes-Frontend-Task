import './App.css';
import React from "react";
import StepFirstForm from './components/StepFirstForm';
import jobJsonDataStructure from './constants/jobJsonDataStructure'; 

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [jobData, setJobData] = React.useState(jobJsonDataStructure)
  
  return (
    <>
      <button
        className="bg-custom_primary mx-5 my-5 flex content-center font-poppins text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Create Job
      </button>
      {showModal ? (
        <StepFirstForm setShowModal={setShowModal} jobData={jobData} setJobData={setJobData} fontType="poppins"/>
      ) : null}
    </>
  );
}

export default App;
