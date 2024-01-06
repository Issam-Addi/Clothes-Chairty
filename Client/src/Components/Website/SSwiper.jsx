import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import C1 from "../../Images/C1.png";
import C2 from "../../Images/C2.png";
import C3 from "../../Images/C3.jpg";
// import C4 from "../../../Images/C4.webp";
import "../../CSS/swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const SSwiper = () => {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <div className=".bg-services">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-[#006E6A] text-3xl text-center font-bold my-5">
            الشـــــركاء
          </h2>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            grabCursor={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="services-card">
                <div className="img-card">
                  <img src={C1} alt="S2" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services-card">
                <div className="img-card">
                  <img src={C2} alt="S2" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services-card">
                <div className="img-card">
                  <img src={C3} alt="S2" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SSwiper;