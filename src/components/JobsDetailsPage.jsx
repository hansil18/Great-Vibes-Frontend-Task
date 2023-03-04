import React from "react";
import { useState, useEffect } from "react";
import { jobDataSendPostRequest } from "../services/jobDataSendPostRequest";
import { jobDataFromGetRequest } from "../services/jobDataReceiveGetRequest"

function JobsDetailsPage(props) {
  return (
    <>
      <div class="grid grid-cols-2 gap-4 p-4 fixed w-full z-50">
        {
          props.jobDetails ?
            props.jobDetails.filter((job) => (job.is_quick_apply === props.jobData.is_quick_apply)).map((job) => (
              <div class="flex flex-col bg-white border rounded-lg mx-5 md:flex-row p-4">
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
                      {job.is_quick_apply ? "Quick Apply" : "External Apply"}
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
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default JobsDetailsPage;