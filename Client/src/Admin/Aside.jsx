/* eslint-disable react/prop-types */
import { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


// icons
import { SiCircle } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { CiInboxIn } from "react-icons/ci";
import { TbHeartHandshake } from "react-icons/tb";
import { AiFillMessage } from "react-icons/ai";
import { FaDonate } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";




export const Aside = (props) => {
  const [hotels, setHotels] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  function handleLogOut() {      
    window.scrollTo(0, 0);
    
    var Nav = document.getElementById("Nav");
    Nav.style.display = "block";
    var Footer = document.getElementById("Footer");
    Footer.style.display = "block";

    localStorage.removeItem("token");
    props.forceUpdate()
  }

  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/hotel/hotels/request")
      .then((response) => {
        setHotels(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  const count = hotels.length;

  return (

    <aside className="fixed top-0 z-50 w-64  h-screen pt-[62px] pb-1 transition-transform translate-x-full  md:translate-x-0">
      <div className="overflow-y-auto py-5 px-3 h-full bg-teal-600 ">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex  items-center p-2 text-base font-medium text-white rounded-lg  hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <SiCircle />
              <span className="mr-3">نظرة عامة</span>
            </Link>
          </li>
          <li>
            <Link
              to="/donors"
              className="flex   items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488]"
            >
              <RiHandHeartFill />
              المتبرعون
            </Link>
          </li>
          <li>
            <Link
              to="/benfi"
              className="flex    items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <TbHeartHandshake />
              الجمعيات المستفيدة
            </Link>
          </li>
          <li>
            <Link
              to="/donation"
              className="flex     items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <FaDonate />
              التبرعات
            </Link>
          </li>
          <li>
            <Link
              to="/message"
              className="flex     items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <AiFillMessage />
              الرسائل
            </Link>
          </li>
          <li>
            <Link
              to="/question"
              className="flex     items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <AiFillMessage />
              الاسئلة الشائعة
            </Link>
          </li>
          <li>
            <Link
              to="/donationRequest"
              className="flex     items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <CiInboxIn />
              طلبات التبرع
            </Link>
          </li>
          <li>
            <Link
              to="/orgrequest"
              className="flex     items-center gap-2 p-2  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] "
            >
              <CiInboxIn />
              طلبات الجمعيات
            </Link>
          </li>

          <li>
            <Link
              to="/requests"
              className="flex    items-center p-2 text-base font-medium text-white  rounded-lg  hover:bg-[#fff] hover:text-[#0d9488]  group"
            >
              <CiInboxIn />
              <span className="f mr-3 whitespace-nowrap">طلبات الإنضمام</span>
              {count !== 0 && (
                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-white bg-black">
                  {count}
                </span>
              )}
            </Link>
          </li>
          <a href="/" onClick={handleLogOut}>
            <span className="flex    items-center gap-2 p-2 cursor-pointer  w-full text-base font-medium text-white  rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-[#0d9488] ">
              <FiLogOut />
              تسجيل الخروج
            </span>
          </a>
        </ul>
      </div>
    </aside>
  );
};
