import React from "react";
import { useState } from "react";
import StepSecondForm from "./StepSecondForm";

function StepFirstForm(props) {
  const [showSecondStep, setShowSecondStep] = useState(false);

  const handleNextButtonClick = () => {
    var errorFlag = 0
    if (props.jobData.job_title == null || props.jobData.job_title === '') {
      document.getElementById("job_title_error").hidden = false
      errorFlag = 1
    }
    if (props.jobData.company_name == null || props.jobData.company_name === '') {
      document.getElementById("company_name_error").hidden = false
      errorFlag = 1
    }
    if (props.jobData.industry == null || props.jobData.industry === '') {
      document.getElementById("industry_error").hidden = false
      errorFlag = 1
    }

    if (!errorFlag) {
      setShowSecondStep(true)
    }
  }

  const onValueChange = (e) => {
    props.setJobData({ ...props.jobData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {showSecondStep ?
        <StepSecondForm jobData={props.jobData} setJobData={props.setJobData} />
        :
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex justify-between p-5 border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create a Job
                  </h3>
                  <div className="text-2xl font-semibold">
                    Step 1
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3 mb-6 md:mb-0">
                        <div class="flex tracking-wide text-sm font-bold mb-2" for="grid-first-name">
                          Job Title
                          <div class="text-red-500">*</div>
                        </div>
                        <input value={props.jobData.job_title} name="job_title" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="ex. UX UI Designer" />
                        <p id="job_title_error" class="text-red-500 text-xs italic" hidden="true">Please fill out this field.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3 mb-6 md:mb-0">
                        <div class="flex tracking-wide text-sm font-bold mb-2" for="grid-first-name">
                          Company Name
                          <div class="text-red-500">*</div>
                        </div>
                        <input value={props.jobData.company_name} name="company_name" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="ex. Google" />
                        <p id="company_name_error" class="text-red-500 text-xs italic" hidden="true">Please fill out this field.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3 mb-6 md:mb-0">
                        <div class="flex tracking-wide text-sm font-bold mb-2" for="grid-first-name">
                          Industry
                          <div class="text-red-500">*</div>
                        </div>
                        <input value={props.jobData.industry} name="industry" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="ex. Information Technology" />
                        <p id="industry_error" class="text-red-500 text-xs italic" hidden="true">Please fill out this field.</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                      <div class="w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-city">
                          Location
                        </label>
                        <input value={props.jobData.location} name="location" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="ex. Chennai" />
                      </div>
                      <div class="w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-zip">
                          Remote Type
                        </label>
                        <input value={props.jobData.remote_type} name="remote_type" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="ex. In-office" />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-custom_primary text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleNextButtonClick}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      }
    </>
  );
}

export default StepFirstForm;