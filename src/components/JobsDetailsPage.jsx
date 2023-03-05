import React from "react";

function JobsDetailsPage(props) {
  return (
    <>
      <div class="grid grid-cols-2 gap-4 p-4 overflow-y-auto absolute overflow-x-hidden w-full z-50">
        {
          props.jobDetails ?
            props.jobDetails.map((job) => (
              <div class="flex flex-col bg-white border rounded-lg mx-5 md:flex-row px-4 py-6">
                <img class="my-1 ml-1 w-12 h-12 rounded" src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=684&h=456" />
                <div class="my-1 mx-3 w-1/2 flex flex-col justify-start">
                  <h5 class={`text-xl font-medium font-${props.fontType}`}>
                    {job.job_title}
                  </h5>
                  <h6 class={`text-sm font-${props.fontType}`}>
                    {job.company_name} - {job.industry}
                  </h6>
                  <h6 class={`text-sm text-gray-400 font-${props.fontType}`}>
                    {job.location} ({job.remote_type})
                  </h6>
                  <h5 class={`text-sm mt-4 mb-2 font-${props.fontType}`}>
                    Part-Time(9.00 am - 5.00pm IST)
                  </h5>
                  <h5 class={`text-sm mb-2 font-${props.fontType}`}>
                    Experience  ({job.min_experience} - {job.max_experience} years)
                  </h5>
                  <h5 class={`text-sm mb-2 font-${props.fontType}`}>
                    INR(₹) {job.min_salary} - {job.max_salary} / Month
                  </h5>
                  <h5 class={`text-sm mb-4 font-${props.fontType}`}>
                    {job.total_employees} employees
                  </h5>
                  <div>
                    {
                      job.is_quick_apply ? <button
                        className={`bg-custom_primary font-${props.fontType} text-white active:bg-emerald-600 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 my-2 ease-linear transition-all duration-150`}
                        type="button"
                      >
                        Apply Now
                      </button>
                        :
                        <button
                          className={`bg-transparent font-${props.fontType} text-custom_primary my-2 hover:bg-custom_primary text-custom_primay text-sm font-semibold hover:text-white py-2 px-2 border border-custom_primary hover:border-transparent rounded`}
                          type="button"
                        >
                          {job.is_quick_apply ? "Quick Apply" : "External Apply"}
                        </button>
                    }
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