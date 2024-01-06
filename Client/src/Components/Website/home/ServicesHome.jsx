import React from "react";
import S1 from "../../../Images/S1.png"
import S2 from "../../../Images/S2.png"
import S3 from "../../../Images/S3.png"
import S4 from "../../../Images/S4.png"
import S5 from "../../../Images/S5.png"
import S6 from "../../../Images/S6.png"

const ServicesHome = () => {
  return (
    <div className="bg-services">
      <div className="mx-auto max-w-screen-xl py-9">
        <h2 className="text-[#006E6A] text-3xl text-center font-bold py-9">
          ماذا نستقبل في وشاح الأمل؟
        </h2>
        <div className="grid max-[900px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="services-card">
            <div className="img-card">
              <img src={S1} alt="S1"/>
            </div>
            <p className=" text-center">جميع أنواع الملابس</p>
          </div>
          <div className="services-card">
            <div className="img-card">
              <img src={S2} alt="S2"/>
            </div>
            <p className=" text-center">جميع أنواع الأحذية</p>
          </div>
          <div className="services-card">
            <div className="img-card">
              <img src={S3} alt="S3"/>
            </div>
            <p className=" text-center">جميع أنواع الحقائب</p>
          </div>
          <div className="services-card">
            <div className="img-card">
              <img src={S4} alt="S4"/>
            </div>
            <p className=" text-center"> الألحفة </p>
          </div>
          <div className="services-card">
            <div className="img-card">
              <img src={S5} alt="S5"/>
            </div>
            <p className=" text-center"> جميع أنوع الشراشف </p>
          </div>
          <div className="services-card">
            <div className="img-card">
              <img src={S6} alt="S6"/>
            </div>
            <p className=" text-center">الأقمشة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
