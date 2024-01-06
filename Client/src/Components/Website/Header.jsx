import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScarfOfHope from '../../Images/ScarfOfHope.png'
import axios from "axios";

export default function Header({ isLog, updateIsLog }) {

   const [nav, setNav] = useState(false);
   const [userRole, setUserRole] = useState();

   async function verifyToken() {
      const token = localStorage.getItem("token") || false;

      if (token) {
         try {
            const res = await axios.get(`http://localhost:8000/Verify_token`, {
               headers: {
                  authorization: `Bearer ${token}`,
               },
            });

            setUserRole(res.data.role)
         } catch (error) {
            console.log(error);
         }
      }
   }

   useEffect(() => {
      verifyToken();
      window.scrollTo(0, 0);
   }, [isLog]);

   function handleLogOut() {
      localStorage.removeItem('token');
      updateIsLog(false)
      setUserRole('')
   }

   return (

      <header aria-label="Site Header" class="bg-white" id='Nav'>
         <div
            class="mx-auto flex h-24 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
         >
            <div class="sm:flex sm:gap-4">
               {
                  isLog ?
                     <>
                        <Link onClick={handleLogOut} to="/signIn"
                           className="rounded-md bg-teal-600 px-8 py-1.5 text-sm font-medium text-white transition hover:bg-teal-700 flex items-center mb-2 sm:mb-0"
                        >
                           {/* <span className="mr-1">تسجيل الخروج</span> */}
                           <svg height="32" fill="#fff" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="1" id="_1"><path d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM10.71,20.29,7.41,17H18V15H7.41l3.3-3.29L9.29,10.29l-5,5a1,1,0,0,0,0,1.42l5,5Z" id="logout_account_exit_door" /></g></svg>
                        </Link>
                        <Link
                           to="/profile"
                           className="rounded-md bg-teal-600 px-8 py-1.5 text-sm font-medium text-white transition hover:bg-teal-700 flex items-center"
                        >

                           <svg
                              viewBox="0 0 512 512"
                              width="30"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current text-gray-800"
                           >
                              <path
                                 d="M369.5 135.9c0 67.1-50.8 161.3-113.5 161.3S142.5 203 142.5 135.9 193.3 14.3 256 14.3s113.5 54.4 113.5 121.6z"
                                 fill="#fff"
                                 stroke="#2c3e50"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-miterlimit="10"
                              ></path>
                              <path
                                 d="M464.1 365.8c-19-18-131.7-51.2-131.7-51.2l-76.3 85.3h0l-76.3-85.3S67.1 347.8 48.1 365.8c-29.3 27.7-31.6 132-31.6 132h479.2c-.1-.1-2.3-104.3-31.6-132z"
                                 fill="#0d9488"
                                 stroke="#fff"
                                 stroke-width="20"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-miterlimit="10"
                              ></path>
                           </svg>
                        </Link>
                     </>
                     :
                     <Link to="/signIn" className="rounded-md bg-teal-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 flex items-center">
                        <span className="mr-1 text-white">تسجيل الدخول</span>
                        <svg viewBox="0 0 32 32" height="32" width="32" fill='#fff' xmlns="http://www.w3.org/2000/svg">
                           <defs>
                              <style>
                                 {`.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
                              </style>
                           </defs>
                           <title />
                           <g id="logout">
                              <line className="cls-1" x1="15.92" x2="28.92" y1="16" y2="16" />
                              <path d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z" />
                              <line className="cls-1" x1="28.92" x2="24.92" y1="16" y2="20" />
                              <line className="cls-1" x1="28.92" x2="24.92" y1="16" y2="12" />
                              <line className="cls-1" x1="24.92" x2="24.92" y1="8.09" y2="6.09" />
                              <line className="cls-1" x1="24.92" x2="24.92" y1="26" y2="24" />
                           </g>
                        </svg>
                     </Link>

               }
            </div>
            <div class="flex flex-1 items-center justify-end">

               <button onClick={() => setNav(!nav)} class="block ml-4 rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-teal-600 md:hidden">
                  <span class="sr-only">Toggle menu</span>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2">
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
               </button>

               <nav className={`md:hidden fixed top-[0px] rounded-md  w-60 border-teal-600	border-2	 bg-gray-100 z-40 duration-700 ${nav ? "right-[53px] top-[53px]" : "right-[-100vw]"
                  } `}>
                  <ul class="flex flex-col items-center" dir="rtl">
                     {
                        userRole === 'charity' &&
                        <li>
                           <Link to="/donations" className='text-gray-500 font-bold transition hover:text-teal-600'>التبرعات</Link>
                        </li>
                     }
                     <li>
                        <Link to="/aboutUs" className='text-gray-500 font-bold transition hover:text-teal-600'>عنا</Link>
                     </li>
                     <li>
                        <Link to="/contactUs" className='text-gray-500 font-bold transition  hover:text-teal-600'>تواصل معنا</Link>
                     </li>

                     <li>
                        <Link to="/idea" className='text-gray-500 font-bold transition  hover:text-teal-600'>الفكرة</Link>
                     </li>

                     <li>
                        <Link to="/our_services" className='text-gray-500 font-bold transition  hover:text-teal-600'>خدماتنا</Link>
                     </li>
                     <li>
                        <Link to="/" className='text-gray-500 font-bold transition hover:text-teal-600'>الرئيسية</Link>
                     </li>
                  </ul>
               </nav>

               <nav aria-label="Site Nav" class="hidden md:block">
                  <ul class="flex items-center gap-6 text-sm ">
                     {
                        userRole === 'charity' &&
                        <li>
                           <Link to="/donations" className='text-gray-500 font-bold transition hover:text-teal-600'>التبرعات</Link>
                        </li>
                     }
                     <li>
                        <Link to="/aboutUs" className='text-gray-500 font-bold transition hover:text-teal-600'>عنا</Link>
                     </li>
                     <li>
                        <Link to="/contactUs" className='text-gray-500 font-bold transition  hover:text-teal-600'>تواصل معنا</Link>
                     </li>

                     <li>
                        <Link to="/idea" className='text-gray-500 font-bold transition  hover:text-teal-600'>الفكرة</Link>
                     </li>

                     <li>
                        <Link to="/our_services" className='text-gray-500 font-bold transition  hover:text-teal-600'>خدماتنا</Link>
                     </li>
                     <li>
                        <Link to="/" className='text-gray-500 font-bold transition hover:text-teal-600'>الرئيسية</Link>
                     </li>
                  </ul>
               </nav>
            </div>

            <div class="flex items-center gap-4">

               <Link to="/" className='block text-teal-600'>
                  <a class="block text-teal-600" href="/">
                     <span class="sr-only">Home</span>
                     <div class="flex-shrink-0 justify-center">
                        <img src={ScarfOfHope} alt="Workflow logo" width={150} />
                     </div>
                  </a>
               </Link>

            </div>
         </div>
      </header>
   )
}
