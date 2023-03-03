import React from "react";
import { useState, useEffect } from "react";
import { jobDataSendPostRequest } from "../services/jobDataSendPostRequest";
import { jobDataFromGetRequest } from "../services/jobDataReceiveGetRequest"

function StepSecondForm(props) {
  const [jobDetails, setJobDetails] = useState();
  const [showJobCards, setShowJobCards] = useState(false);

  const handleSaveButtonClick = async () => {
    await jobDataSendPostRequest(props.jobData)
    const jobDetails = await jobDataFromGetRequest()
    setJobDetails(jobDetails.data)
    setShowJobCards(true)
  }

  useEffect(() => {
    console.log(jobDetails)
  }, [jobDetails]);

  const onValueChange = (e) => {
    if (e.target.id == "bordered-radio-1") {
      console.log("hell")
      props.setJobData({ ...props.jobData, "is_quick_apply": true })
    }
    else if (e.target.id == "bordered-radio-2") {
      props.setJobData({ ...props.jobData, "is_quick_apply": false })
    }
    else {
      props.setJobData({ ...props.jobData, [e.target.name]: e.target.value })
    }
  }

  return (
    <>
      {
        showJobCards ?
          <div class="grid grid-cols-2 gap-4 p-4">
            {
              jobDetails ?
                jobDetails.filter((job) => (job.is_quick_apply === props.jobData.is_quick_apply)).map((job) => (
                  <div class="flex flex-col border rounded-lg bg-white mx-5 md:flex-row p-4">
                    <img class="my-1 ml-1 w-10 h-10" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=684&h=456" />
                    <div class="my-1 mx-3 w-1/2 flex flex-col justify-start">
                      <h5 class="text-xl font-medium">
                        {job.job_title}
                      </h5>
                      <h6 class="text-xs">
                        {job.company_name} - {job.industry}
                      </h6>
                      <h6 class="text-xs text-gray-400">
                        {job.location} ({job.remote_type})
                      </h6>
                      <h5 class="text-xs mt-4">
                        Part-Time(9.00 am - 5.00pm IST)
                      </h5>
                      <h5 class="text-xs">
                        Experience  ({job.min_experience} - {job.max_experience} years)
                      </h5>
                      <h5 class="text-xs">
                        INR(₹) {job.min_salary} - {job.max_salary} / Month
                      </h5>
                      <h5 class="text-xs">
                        {job.total_employees} employees
                      </h5>

                      <div>
                        <button
                          className="bg-custom_primary text-white active:bg-emerald-600 font-bold text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 my-2 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Apply Now
                        </button>
                        <button
                          className="bg-transparent text-custom_primary my-2 hover:bg-custom_primary text-custom_primay text-sm font-semibold hover:text-white py-2 px-2 border border-custom_primary hover:border-transparent rounded"
                          type="button"
                        >
                          {job.is_quick_apply? "Quick Apply": "External Apply"}
                        </button> 
                      </div>
                    </div>
                  </div>
                ))
                :
                <button type="button" class="bg-indigo-500 ..." disabled>
                  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                  </svg>
                  Processing...
                </button>
            }
          </div>
          :
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-between p-5 rounded-t">
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
                            <input value={props.jobData.min_experience} name="min_experience" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded mr-4 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Minimum" />
                            <input value={props.jobData.max_experience} name="max_experience" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Maximum" />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3 mb-6 md:mb-0">
                          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Salary
                          </label>
                          <div className="flex justify-between">
                            <input value={props.jobData.min_salary} name="min_salary" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded mr-4 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Minimum" />
                            <input value={props.jobData.max_salary} name="max_salary" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Maximum" />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3 mb-6 md:mb-0">
                          <div class="flex tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            Total employee
                          </div>
                          <input value={props.jobData.total_employees} name="total_employees" onChange={(e) => onValueChange(e)} class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="ex. 100" />
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3 mb-6 md:mb-0">
                          <div class="flex tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                            Apply type
                          </div>
                          <div className="flex">
                            <div class="flex items-center mr-4">
                              <input id="bordered-radio-1" type="radio" value={props.jobData.is_quick_apply} onChange={(e) => onValueChange(e)} name="bordered-radio" class="w-4 h-4 py-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="bordered-radio-1" class="w-full py-4 ml-1 block tracking-wide text-gray-500 text-xs font-bold">Quick Apply</label>
                            </div>
                            <div class="flex items-center">
                              <input id="bordered-radio-2" type="radio" value={props.jobData.is_quick_apply} onChange={(e) => onValueChange(e)} name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label for="bordered-radio-2" class="w-full py-4 ml-1 block tracking-wide text-gray-500 text-xs font-bold">External Apply</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="bg-custom_primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSaveButtonClick}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
      }
    </>
  );
}

export default StepSecondForm;