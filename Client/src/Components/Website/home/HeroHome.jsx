import React from "react";
import FormHome from "./FormHome";
import logo from "../../../Images/ScarfOfHope.png";
const HeroHome = () => {
  return (
    <>
      <div className="bg-img-home">
        <div className="black-opictiy">
          <div
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 max-[900px]:justify-items-center md:justify-items-center lg:justify-center  mx-auto max-w-screen-xl"
          >
            <div className="my-7 w-4/5">
              <FormHome />
            </div>

            <div className="flex flex-col justify-center items-end">
              <h1 className="font-black text-5xl text-white text-right mb-7">
                #وشاحك_واصل
              </h1>
              <p className="text-xl text-white text-right">
                وشاح الأمل هو مشروع غير ربحي لجمع الملابس المستعملة من 12 محافظة
                أردنية وتوزيعها لمستحقيها بأفضل صورة
              </p>
            </div>
          </div>
          <div>
            <div
              class="elementor-shape elementor-shape-bottom"
              data-negative="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 283.5 19.6"
                preserveAspectRatio="none"
              >
                <path
                  class="elementor-shape-fill"
                  style={{ opacity: 0.33 }}
                  d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                ></path>
                <path
                  class="elementor-shape-fill"
                  style={{ opacity: 0.33 }}
                  d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                ></path>
                <path
                  class="elementor-shape-fill"
                  style={{ opacity: 0.33 }}
                  d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                ></path>
                <path
                  class="elementor-shape-fill"
                  d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                ></path>
              </svg>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
