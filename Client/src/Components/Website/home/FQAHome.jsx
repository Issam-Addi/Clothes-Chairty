import React from "react";
import useFetch from "../../../CustomHooks/UseFetch";
import Loader from "../Loader";

const FQAHome = () => {

  const { data, loading, error } = useFetch('http://localhost:8000/dashboard/questions');

  if (loading) {
    return (
      <Loader />
    )
  }
  if (error) {
    return (
      <div>server error...</div>
    )
  }
  return (
    <div className="bg-services">
      <div>
        <section class="dark:bg-gray-800 dark:text-gray-100 py-6 ">
          <div class="container flex flex-col justify-center p-4 mx-auto md:p-8 my-5">
            <h2 class="mb-12 text-[#006E6A] text-3xl text-center font-bold my-5">
              الأسئلة الشائعة
            </h2>
            <div
              class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 my-8 "
              style={{ direction: "rtl" }}
            >
              {data?.map((question) => {
                return (
                  <details className="mb-5">
                    <summary class="py-2 bg-[#006E6A] text-white font-bold  outline-none cursor-pointer focus:underline ps-5 mb-4">
                      {question.question}
                    </summary>
                    <div class="px-4 pb-4">
                      <p>
                        {question.answer}
                      </p>
                    </div>
                  </details>
                )
              })
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FQAHome;
