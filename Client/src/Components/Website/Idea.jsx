import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../CSS/Idea.css";
import IdeaImage from "../../Images/donate1.jpg";
import IdeaImage1 from "../../Images/Idea1.png";
import Idea12 from "../../Images/idea12.png";
import Idea13 from "../../Images/idea13.png";
import Idea15 from "../../Images/idae15.png";
import Idea16 from "../../Images/idea16.png";
import SSwiper from "./SSwiper";

export default function Idea() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/statistics")

      .then((result) => setData(result.data))

      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {" "}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${IdeaImage})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "20rem",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 overflow-hidden bg-gray-600 opacity-50"></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          viewBox="0 0 283.5 19.6"
        >
          <path
            d="M0 0v18.8L141.8 4.1l141.7 14.7V0z"
            className="main-bk-green"
            opacity="0.33"
          ></path>
          <path
            d="M0 0v12.6L141.8 4l141.7 8.6V0z"
            className="main-bk-green"
            opacity="0.33"
          ></path>
          <path
            d="M0 0v6.4L141.8 4l141.7 2.4V0z"
            className="main-bk-green"
            opacity="0.33"
          ></path>
          <path
            d="M0 0v1.2L141.8 4l141.7-2.8V0z"
            className="main-bk-green"
          ></path>
        </svg>
      </div>
      <div className="container my-24 mx-auto px-4 md:px-6">
        <div className="container lg:max-w-screen-xl mx-auto px-5 ">
          <section className="mb-32 text-center lg:text-left">
            <h2 className="mb-12 text-center text-3xl font-bold font-main-green">
              الفكرة
            </h2>
            <div className="flex justify-end">
              <img src={IdeaImage1} />
            </div>
            <p className=" flex justify-end text-justify text-rtl	" dir="rtl">
              تتلقى الجمعيات الخيرية يوميًا المئات من الملابس القديمة
              والمستعملة، مما يترك لديهم كمًا هائلاً من الملابس التي يضطرون
              لتوزيعها. ويبقى الكثير من المخلفات في حوزتهم لتلقى مصيرها المحتوم
              في صناديق النفايات. من هنا ألهمتنا رؤية هذه الملابس التي تلقى
              حتفها في النفايات، للقيام بمبادرة لحل هذه المشكلة التي تودي بحياة
              البيئة دون أن يشعر أحد. ومن هنا انبثقت فكرة ,وشاح الامل من أجل
              مستقبل أفضل وحماية للبيئة من النفايات الضارة. نحن دائمًا نتوق إلى
              العمل والتفاعل مع العقول الناضجة والواعية والقلوب الرحيمة، التي
              تهدف إلى تحقيق حياة كريمة للفرد وفي نفس الوقت الحفاظ على البيئة
              بكل السُبل الممكنة.
              <br></br>
              نحن الآن نحقق أهدافنا ومهمتنا على أرض الواقع، ونأمل أن نخطو خطوات
              واثقة نحو وطن مستقر يكفل العيش بكرامة للمواطنين وبيئة أكثر أمانًا
              للأجيال القادمة. التي سوف تتحقق بتكاتف جهود المواطنين المثقفين
              وتآلُف قلوب المتبرعين والمتطوعين الرحماء. هذا لأننا نؤمن أن
              الاتحاد على الخير قوة تصنع المستحيل وتخلق غدًا أفضل.
            </p>
          </section>
        </div>
      </div>
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
                <div className="flex justify-center text-white text-6xl	font-bold	">
                  {data?.lengthCharty}
                </div>
                <div className="flex justify-center text-white text-xl	font-bold pt-2">
                  عدد الجمعيات الخيرية{" "}
                </div>
              </div>
              <div className="grid grid-cols-1  justify-center	">
                <div className="flex justify-center">
                  <img src={Idea15}></img>
                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">
                  {data?.lengthDoner}
                </div>
                <div className="flex justify-center text-white text-xl	font-bold pt-2">
                  عدد المتبرعين{" "}
                </div>
              </div>
              <div className="grid grid-cols-1 justify-center	">
                <div className="flex justify-center">
                  <img src={Idea13}></img>
                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">
                  {data?.totalPieces}
                </div>
                <div className="flex justify-center text-white text-l	font-bold pt-2">
                  عدد القطع من الملابس
                </div>
              </div>
              <div className="grid grid-cols-1 justify-center	">
                <div className="flex justify-center">
                  <img src={Idea12}></img>
                </div>
                <div className="flex justify-center text-white text-6xl	font-bold	">
                  12
                </div>
                <div className="flex justify-center text-white text-l	font-bold pt-2">
                  عدد المحافظات المتواجدين فيها{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container my-24 mx-auto px-4 md:px-6 bg-white dark:bg-gray-900">
          <SSwiper />
        </section>
      </>
    </>
  );
}
