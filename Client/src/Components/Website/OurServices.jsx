import React from "react";
import IdeaImage from "../../Images/donate31.jpg";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

export default function OurServices() {
  return (
    <>
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
          preserveAspectRatio="none"
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

      <h2 className="mt-10 text-center text-teal-600 text-3xl font-bold">
        خدماتنا
      </h2>
      <p className="mr-[10%] mt-10 text-end pr-4 text-teal-600 border-r-4 border-teal-600 text-xl font-bold">
        الخير نهر جارٍ ما من مكان يمر به إلا وتثمر الدنيا ويرتوي الظمآن
      </p>

      <p className="mr-[10%] mt-10 text-end pr-4 text-xl font-bold text-teal-600">
        خدمة الاستلام المباشر للتبرعات:
        <span className="text-lg text-gray-400">
          تتم خدمة استلام التبرعات العينية مباشرة من المتبرعين عبر المنصة
          الوطنية للتبرعات
        </span>
      </p>

      {/* component */}
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <h2 className="my-10 text-center text-teal-600 text-3xl font-bold font-main">
          إجراءات التبرع
        </h2>
        <div className="py-3 sm:mx-auto px-2 sm:px-0">
          <div className="relative antialiased text-sm font-semibold">
            {/* Vertical bar running through middle */}
            <div className="hidden sm:block w-1 bg-teal-600 absolute h-full left-1/2 transform -translate-x-1/2" />

            {/* Left section, set by justify-end and sm:pl-8 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow" style={{direction: "rtl" }} >
                      1
                      <br />
                      نقوم بإمداد المتبرعين بكافة المعلومات والوسائل المطلوبة
                      لتسهيل إجراء مهمة التبرع، بالإضافة إلى نشر التوعية البيئية
                      والخيرية من خلال الحملات التسويقية على نطاق واسع.
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute right-1/2 -translate-y-4 sm:translate-y-0 transform translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right section, set by justify-start and sm:pr-8 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow" style={{direction: "rtl" }}>
                      2
                      <br />
                      سيتم التواصل مع المتبرع خلال مدة زمنية قصيرة بحد أقصى ٢٤
                      ساعة
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute right-1/2 -translate-y-4 sm:translate-y-0 transform translate-x-1/2 flex items-center justify-center">
                  <RiCustomerService2Line className="text-white w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Left section, set by justify-end and sm:pl-8 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow" style={{direction: "rtl" }}  >
                      3
                      <br />
                      تأتي راحة المتبرع في مقدمة أولويتنا، لذا للمتبرع حرية
                      اختيار الموعد والمكان المناسب له. حتى يتمكن مندوب خيرُك من
                      الحصول على التبرعات، التي قد تم الإبلاغ عن الرغبة في
                      التبرع بها.
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute right-1/2 -translate-y-4 sm:translate-y-0 transform translate-x-1/2 flex items-center justify-center">
                  <AiOutlineFieldTime className=" text-white w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Right section, set by justify-start and sm:pr-8 */}
            <div className="mt-6 sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow" style={{direction: "rtl" }}>
                      4
                      <br />
                      تقوم خيرُك بإرسال رسائل دورية لمتابعة أثر التبرع، وكذلك
                      ترسل استقصاء رأي حول مستوى أداء الخدمة ومدى تفاعل مندوبينا
                      لمساعدة المتبرعين وتوفير كل سُبل التيسير لهم.
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute right-1/2 -translate-y-4 sm:translate-y-0 transform translate-x-1/2 flex items-center justify-center">
                  <FaHandshake className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mr-[10%] px-40 mt-10 mb-20 text-end pr-4 text-xl font-bold text-teal-600">
        ...قريبا
        <br />
        فعاليات وأنشطة التوعية البيئية
        <br />
        <br />
        <span className="text-lg text-gray-400">
          تشكل المنسوجات الموضوعة في صناديق النفايات مصدر قلق بيئي خطير. أثبتت
          الدراسات أن هذه الألياف تستغرق سنوات حتى تتحلل في مدافن النفايات وتطلق
          غازات الاحتباس الحراري في هذه العملية. فقد تم تصميم المنسوجات
          الاصطناعية كي لا تتحلل على الإطلاق، ويمكن أن تتسرب المواد السامة
          الناتجة عنها إلى التربة والمياه الجوفية أثناء تواجدها في مدافن
          النفايات
        </span>
        <br />
        <br />
        <span className="text-lg text-gray-400">
          لذلك تحرص وشاح الأمل على تنظيم العديد من الفعاليات والأنشطة التوعوية في
          مراكز التجارية والنوادي والمدارس، لنشر وزيادة الوعي بأهمية الموضة
          المستدامة من حيث أهمية اختيار الأقمشة الصديقة للبيئة. بالإضافة إلى
          تعزيز أهمية الأعمال الخيرية، كمثال عظيم لمحاولة رفع مستوى الإنسانية
          والارتقاء بحياة الفرد
        </span>
      </p>
    </>
  );
}
