import React, { useEffect, useState } from "react";
import Idea16 from "../../../Images/SS1.png";
import Idea15 from "../../../Images/SS2.png";
import Idea14 from "../../../Images/SS3.png";
import Idea13 from "../../../Images/SS4.png";
import axios from "axios";

const StatisticsHome = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/statistics')


      .then(result =>

        setData(result.data))

      .catch(error => console.error(error));

  }, []);
  return (
    <>
<section className="counter_dark_green">
          <div className="container lg:max-w-screen-xl mx-auto px-5">
            <div className="text-center text-white	pt-10 text-3xl	font-bold		">
              احصائيات وأرقــــام
            </div>
            <div className="grid grid-cols-2 gap-4 pt-10 pb-10 md:grid-cols-4">
              <div className="grid grid-cols-1 justify-center	">
                <div className="flex justify-center">
                  <img src={Idea16}></img>

                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">{data?.lengthCharty}</div>
                <div className="flex justify-center text-white text-xl	font-bold pt-2">عدد الجمعيات الخيرية </div>
              </div>
              <div className="grid grid-cols-1  justify-center	">
                <div className="flex justify-center">
                  <img src={Idea15}></img>

                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">{data?.lengthDoner
                }</div>
                <div className="flex justify-center text-white text-xl	font-bold pt-2">عدد المتبرعين </div>
              </div>
              <div className="grid grid-cols-1 justify-center	">
                <div className="flex justify-center">
                  <img src={Idea14}></img>

                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">{data?.totalPieces}</div>
                <div className="flex justify-center text-white text-l	font-bold pt-2">عدد القطع من الملابس</div>
              </div>
              <div className="grid grid-cols-1 justify-center	">
                <div className="flex justify-center">
                  <img src={Idea13}></img>

                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">12</div>
                <div className="flex justify-center text-white text-l	font-bold pt-2">عدد المحافظات المتواجدين فيها </div>

              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default StatisticsHome;
