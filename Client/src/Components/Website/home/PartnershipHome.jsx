import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import C1 from "../../../Images/C1.png";
import C2 from "../../../Images/C2.png";
import C3 from "../../../Images/C3.jpg";
import C4 from "../../../Images/C4.webp";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const PartnershipHome = () => {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <div className=".bg-services">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-[#006E6A] text-3xl text-center font-bold py-9 my-5">
            الشـــــركاء
          </h2>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            grabCursor={true}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            className="mySwiper"
            // initialSlide={Math.floor(items.length / 2)}
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
            <SwiperSlide>
              <div className="services-card">
                <div className="img-card">
                  <img src={C4} alt="S2" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnershipHome;
