import React, { useEffect, useState } from 'react'
import '../../CSS/Users.css'
import Logo from '../../Images/ScarfOfHope.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignGoogle from './SignInWithGoogle';
import Facebook from './SigInWithFacebook';
import axios from 'axios'


export default function SignUp({ updateIsLog }) {

  useEffect(() => {
    const token = localStorage.getItem("token") || false;
    if (token) {
      checkToken(token).then((resultUsers) => {
        if (resultUsers) {
          updateIsLog(true);
          navigate(path);
        }
      });
    }

    async function checkToken(token) {
      try {
        const response = await axios.get("http://localhost:5000/checkToken", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [path, setPath] = useState('/');


  const [user, setUser] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    serial: ''
  })

  const [checkInput, setCheckInput] = useState({
    username: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false,
    type: false,
    serial: false

  });

  const themeValue = {
    success: "green",
    error: "red",
    warning: "red",
    normal: "teal"
  }

  const [inputTheme, setInputTheme] = useState({
    email: themeValue.normal,
    password: themeValue.normal,
    username: themeValue.normal,
    phone: themeValue.normal,
    confirmPassword: themeValue.normal,
    serial: themeValue.normal
  });

  const [massageWarning, setMassageWarning] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    submit: '',
    serial_number: ''
  });

  const [selectedUserType, setSelectedUserType] = useState("");
  const [passwordMode, setPasswordMode] = useState(true);
  const [passwordModeCon, setPasswordModeCon] = useState(true);


  function handlePasswordMode() {
    setPasswordMode(!passwordMode);
  }

  function handlePasswordModeCon() {
    setPasswordModeCon(!passwordModeCon);
  }

  function handleUserType(e) {
    const type = e.target.value;
    setCheckInput({ ...checkInput, type: false });

    if (type === "") {
      setMassageWarning({
        ...massageWarning,
        type: "الرجاء اختيار نوع المستخدم",
      });
    } else {
      setMassageWarning({
        ...massageWarning,
        type: "",
      });
      setSelectedUserType(e.target.value);
      setCheckInput({ ...checkInput, type: true });
    }
  }

  function handleSerialNumber(event) {
    const serial = event.target.value;
    setCheckInput({ ...checkInput, serial: false });

    if (serial === '') {
      setInputTheme({ ...inputTheme, serial: themeValue.normal });
      setMassageWarning({ ...massageWarning, serial: 'حقل مطلوب' });
    }
    else {
      setInputTheme({ ...inputTheme, serial: themeValue.success })
      setMassageWarning({ ...massageWarning, serial: '' });
      setUser({ ...user, serial_number: serial });
      setCheckInput({ ...checkInput, serial: true });
    }
  }
  function handleName(event) {
    const username = event.target.value;
    setCheckInput({ ...checkInput, username: false });

    if (username === '') {
      setInputTheme({ ...inputTheme, username: themeValue.normal });
      setMassageWarning({ ...massageWarning, username: 'حقل مطلوب' });
    }
    else {
      setInputTheme({ ...inputTheme, username: themeValue.success })
      setMassageWarning({ ...massageWarning, username: '' });
      setUser({ ...user, username: username });
      setCheckInput({ ...checkInput, username: true });
    }
  }

  function handlePhone(event) {
    const patternPhone = /^07\d{8}$/;
    setCheckInput({ ...checkInput, phone: false });
    const phone = event.target.value;

    if (phone === '') {
      setInputTheme({ ...inputTheme, phone: themeValue.normal });
      setMassageWarning({ ...massageWarning, phone: 'حقل مطلوب' });
    }
    else if (!patternPhone.test(phone)) {
      setInputTheme({ ...inputTheme, phone: themeValue.error })
      setMassageWarning({ ...massageWarning, phone: 'رقم خطأ' })
    }
    else {
      setMassageWarning({ ...massageWarning, phone: '' })
      setInputTheme({ ...inputTheme, phone: themeValue.success })
      setUser({ ...user, phone: phone });
      setCheckInput({ ...checkInput, phone: true });
    }
  }

  function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    setCheckInput({ ...checkInput, email: false });
    const email = event.target.value;

    if (email === '') {
      setInputTheme({ ...inputTheme, email: themeValue.normal });
      setMassageWarning({ ...massageWarning, email: 'حقل مطلوب' });
    }
    else if (!patternEmail.test(email)) {
      setInputTheme({ ...inputTheme, email: themeValue.error });
      setMassageWarning({ ...massageWarning, email: 'بريد الكتروني غير صالح' });
    }
    else {
      setMassageWarning({ ...massageWarning, email: '' });
      setInputTheme({ ...inputTheme, email: themeValue.success });
      setUser({ ...user, email: email });
      setCheckInput({ ...checkInput, email: true });
    }
  }

  function handlePassword(event) {
    // more than 8 characters, with at least 1 number, uppercase, and special characters.
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    setCheckInput({ ...checkInput, password: false });
    const password = event.target.value;

    if (password === '') {
      setInputTheme({ ...inputTheme, password: themeValue.normal });
      setMassageWarning({ ...massageWarning, password: 'حقل مطلوب' });
    }
    else if (!patternPassword.test(password)) {
      setInputTheme({ ...inputTheme, password: themeValue.error });
      setMassageWarning({ ...massageWarning, password: `يرجى ادخال كلمة المرور التي تتكون من 8 أحرف على الأقل وتحتوي على حرف كبير واحد ، ورقم واحد ، ورمز خاص واحد ` })
    }
    else {
      setMassageWarning({ ...massageWarning, password: '' });
      setInputTheme({ ...inputTheme, password: themeValue.success });
      setUser({ ...user, password: password });
      setCheckInput({ ...checkInput, password: true });
    }
  }

  function handleConfirmPassword(event) {

    const password = event.target.value;

    setCheckInput({ ...checkInput, confirmPassword: false });

    if (password === '') {
      setInputTheme({ ...inputTheme, confirmPassword: themeValue.normal });
      setMassageWarning({ ...massageWarning, confirmPassword: 'حقل مطلوب' });
    }
    else if (password !== user.password) {
      setInputTheme({ ...inputTheme, confirmPassword: themeValue.error });
      setMassageWarning({ ...massageWarning, confirmPassword: 'كملة المرور غير متطابقة' });
    }
    else {
      setMassageWarning({ ...massageWarning, confirmPassword: '' });
      setInputTheme({ ...inputTheme, confirmPassword: themeValue.success });
      setCheckInput({ ...checkInput, confirmPassword: true });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedUserType === "donor") {
      delete user.serial_number;
    }
    else if (!checkInput.serial) {
      setMassageWarning({
        ...massageWarning,
        submit:
          "الرجاء ادخال رقم وطني صالح",
      });
      return;
    }

    if (
      checkInput.username &&
      checkInput.email &&
      checkInput.phone &&
      checkInput.password &&
      checkInput.confirmPassword &&
      checkInput.type
    ) {
      sendDataToServer(user);
    } else {
      setMassageWarning({
        ...massageWarning,
        submit:
          "الرجاء ادخال جميع الحقول المطلوبة",
      });
    }
  }

  async function sendDataToServer(user) {

    try {
      const res = await axios.post(`http://localhost:8000/${selectedUserType === "donor" ? "donor" : "charity"}`, user);

      if (selectedUserType === "charity") {
        setMassageWarning({
          ...massageWarning,
          submit: "تمت العملية بنجاح ،يجب عليك انتظار موافقة المسؤول الان، سوف تصلك رسالة بريد الكترونية عندما تتم الموافقة او الرفض",
        });
        return;
      }

      localStorage.setItem("token", res.data.Token);
      updateIsLog(true);
      navigate(path);
    } catch (err) {
      setMassageWarning({
        ...massageWarning,
        email: "البريد الالكتروني موجود بالفعل",
      });
      console.error(err);
    }
  }

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">

      <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">

        <div class="flex-1 bg-teal-600 text-center hidden lg:flex">
          <div class="hero-img xl:m-16 w-full bg-contain bg-center bg-no-repeat">
          </div>
        </div>


        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-10/12">
          <h1 class="text-2xl xl:text-3xl font-extrabold text-teal-600 text-center">
            سجل الان للاضمام لنا
          </h1>
          <div className="flex flex-wrap mt-4 items-center justify-around border-2 border-teal-600 border-opacity-50 rounded-lg">
            <div className="my-3">
              <label htmlFor="donor" className="me-3 text-sm font-medium">
                متبرع
              </label>
              <input
                onChange={handleUserType}
                value="donor"
                checked={selectedUserType === "donor"}
                type="radio"
                id="donor"
                name="flexRadioDefault"
                className=""
              />
            </div>
            <div className="my-3">
              <label htmlFor="charity" className="me-3 text-sm font-medium">
                جهة خيرية
              </label>
              <input
                onChange={handleUserType}
                value="charity"
                checked={selectedUserType === "charity"}
                type="radio"
                id="charity"
                name="flexRadioDefault"
                className=""
              />
            </div>
          </div>
          <div class=" flex flex-col items-center ">

            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">

                <SignGoogle massage={"التسجيل بواسطة جوجل"} selectedUserType={selectedUserType} updateIsLog={updateIsLog} />

                <Facebook massage={"التسجيل بواسطة فيسبوك"} selectedUserType={selectedUserType} updateIsLog={updateIsLog} />
              </div>

              <div class="my-12 border-b text-center">
                <div
                  class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                  او يمكنك التسجيل باستخدام البريد الالكتروني
                </div>
              </div>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div class="mx-auto max-w-xs">
                  {
                    selectedUserType === "charity" ?
                      <div class="mb-3">
                        <label for="name" className={`block mb-2 text-sm font-medium text-${inputTheme.serial}-700 dark:text-${inputTheme.serial}-500 `} style={{ direction: "rtl" }} >الرقم الوطني للمنشأة</label>
                        <input onChange={(event) => handleSerialNumber(event)} type="text" id="name" className={`border-${inputTheme.serial}-300 text-${inputTheme.serial}-900 dark:text-${inputTheme.serial}-400 placeholder-${inputTheme.serial}-700 dark:placeholder-${inputTheme.serial}-500 focus:ring-${inputTheme.serial}-500 focus:border-${inputTheme.serial}-500 dark:border-${inputTheme.serial}-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="الرجاء ادخال الرقم الوطني للمنشأة" style={{ direction: "rtl" }} />
                        <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.serial_number}</span></p>
                      </div>
                      :
                      <></>
                  }
                  <div class="mb-3">
                    <label for="name" className={`block mb-2 text-sm font-medium text-${inputTheme.username}-700 dark:text-${inputTheme.username}-500 `} style={{ direction: "rtl" }}>{selectedUserType === "charity" ? "اسم الجمعية" : "الاسم"}</label>
                    <input onChange={(event) => handleName(event)} type="text" id="name" className={`border-${inputTheme.username}-300 text-${inputTheme.username}-900 dark:text-${inputTheme.username}-400 placeholder-${inputTheme.username}-700 dark:placeholder-${inputTheme.username}-500 focus:ring-${inputTheme.username}-500 focus:border-${inputTheme.username}-500 dark:border-${inputTheme.username}-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="ادخل اسمك" style={{ direction: "rtl" }} />
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.name}</span></p>
                  </div>
                  <div class="mb-3">
                    <label for="phone" className={`block mb-2 text-sm font-medium text-${inputTheme.phone}-700 dark:text-${inputTheme.phone}-500 `} style={{ direction: "rtl" }}>رقم الهاتف</label>
                    <input onChange={(event) => handlePhone(event)} type="text" id="phone" className={`border-${inputTheme.phone}-300 text-${inputTheme.phone}-900 dark:text-${inputTheme.phone}-400 placeholder-${inputTheme.phone}-700 dark:placeholder-${inputTheme.phone}-500 focus:ring-${inputTheme.phone}-500 focus:border-${inputTheme.phone}-500 dark:border-${inputTheme.phone}-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="ادخل رقم الهاتف" style={{ direction: "rtl" }} />
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.phone}</span></p>
                  </div>
                  <div class="mb-3">
                    <label for="email" className={`block mb-2 text-sm font-medium text-${inputTheme.email}-700 dark:text-${inputTheme.email}-500 `} style={{ direction: "rtl" }}>البريد الالكتروني</label>
                    <input onChange={(event) => handleEmail(event)} type="text" id="email" className={`border-${inputTheme.email}-300 text-${inputTheme.email}-900 dark:text-${inputTheme.email}-400 placeholder-${inputTheme.email}-700 dark:placeholder-${inputTheme.email}-500 focus:ring-${inputTheme.email}-500 focus:border-${inputTheme.email}-500 dark:border-${inputTheme.email}-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="ادخل بريدك الالكتروني" style={{ direction: "rtl" }} />
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.email}</span></p>
                  </div>
                  <div class="mb-3 password">
                    <label for="password" className={`text-${inputTheme.password}-700 dark:text-${inputTheme.password}-500 block mb-2 text-sm font-medium`} style={{ direction: "rtl" }}>كلمة المرور</label>
                    <input onChange={(event) => handlePassword(event)} type={passwordMode ? "password" : "text"} id="password" className={`border-${inputTheme.password}-300 text-${inputTheme.password}-900 placeholder-${inputTheme.password}-700 focus:ring-${inputTheme.password}-500 focus:border-${inputTheme.password}-500 dark:text-${inputTheme.password}-500 dark:placeholder-${inputTheme.password}-500 dark:border-${inputTheme.password}-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`} placeholder="ادخل كلمة المرور" style={{ direction: "rtl" }} />
                    <span className="eye" onClick={handlePasswordMode}>
                      <i style={{ color: inputTheme.password }}
                        className={`fas fa-eye ${passwordMode ? "block" : "hidden"
                          }`}
                        id="showEye"
                      />
                      <i style={{ color: inputTheme.password }}
                        className={`fas fa-eye-slash ${passwordMode ? "hidden" : "block"
                          }`}
                        id="hideEye"
                      />
                    </span>
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.password}</span></p>
                  </div>
                  <div className='password'>
                    <label for="confirmPassword" className={`text-${inputTheme.confirmPassword}-700 dark:text-${inputTheme.confirmPassword}-500 block mb-2 text-sm font-medium`} style={{ direction: "rtl" }}>تأكيد كلمة المرور</label>
                    <input onChange={(event) => handleConfirmPassword(event)} type={passwordModeCon ? "password" : "text"} id="confirmPassword" className={`border-${inputTheme.confirmPassword}-300 text-${inputTheme.confirmPassword}-900 placeholder-${inputTheme.confirmPassword}-700 focus:ring-${inputTheme.confirmPassword}-500 focus:border-${inputTheme.confirmPassword}-500 dark:text-${inputTheme.confirmPassword}-500 dark:placeholder-${inputTheme.confirmPassword}-500 dark:border-${inputTheme.confirmPassword}-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`} placeholder="تأكيد كلمة المرور" style={{ direction: "rtl" }} />
                    <span className="eye" onClick={handlePasswordModeCon}>
                      <i
                        className={`fas fa-eye ${passwordModeCon ? "block" : "hidden"
                          }`}
                        style={{ color: inputTheme.confirmPassword }}
                      />
                      <i style={{ color: inputTheme.confirmPassword }}
                        className={`fas fa-eye-slash ${passwordModeCon ? "hidden" : "block"
                          }`}
                        id="hideEye"
                      />
                    </span>
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.confirmPassword}</span></p>
                  </div>
                  <button type='submit'
                    class="mt-5 tracking-wide font-semibold bg-teal-600 text-gray-100 w-full py-4 rounded-lg hover:text-teal-600 hover:bg-gray-200 transition-bg duration-500 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-3 ">
                      التسجيل الان
                    </span>
                  </button>
                  <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{ direction: "rtl" }}><span class="font-medium">{massageWarning.submit}</span></p>
                  <p className={`mt-2 text-sm text-${themeValue.normal}-600 dark:text-${themeValue.normal}-500`} style={{ direction: "rtl" }}>لديك حساب بالفعل! <Link to="/signIn" className={`font-bold text-${themeValue.normal}-300 transition hover:text-${themeValue.normal}-500/75`}>تسجيل الدخول</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
