import React from "react";
import { useEffect } from "react";

function StepSecondForm(props) {
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
      console.log("submitting")
    }
  }

  const onValueChange = (e) => {
    props.setJobData({ ...props.jobData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">
                Create a Job
              </h3>
              <div className="text-1xl font-semibold">
                Step 2
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                      Experience
                    </label>
                    <div className="flex justify-between">
                      <input value={props.jobData.location} name="location" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded mr-4 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Minimum" />
                      <input value={props.jobData.remote_type} name="remote_type" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Maximum" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                      Salary
                    </label>
                    <div className="flex justify-between">
                      <input value={props.jobData.location} name="location" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded mr-4 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Minimum" />
                      <input value={props.jobData.remote_type} name="remote_type" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Maximum" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <div class="flex tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                      Total employee
                    </div>
                    <input value={props.jobData.company_name} name="company_name" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="ex. 100" />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <div class="flex tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                      Apply type
                    </div>
                    <div className="flex">
                      <div class="flex items-center mr-4">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 py-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-1" class="w-full py-4 ml-1 block tracking-wide text-gray-500 text-xs font-bold">Default radio</label>
                      </div>
                      <div class="flex items-center">
                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-2" class="w-full py-4 ml-1 block tracking-wide text-gray-500 text-xs font-bold">Checked state</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-custom_primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleNextButtonClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default StepSecondForm;