import React, { useEffect, useState } from 'react'
import '../../CSS/Users.css'
import Logo from '../../Images/ScarfOfHope.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignGoogle from './SignInWithGoogle'
import Facebook from './SigInWithFacebook';
import axios from 'axios'


export default function SignIn({ updateIsLog }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [path, setPath] = useState('/');


  const [selectedUserType, setSelectedUserType] = useState("");
  const [passwordMode, setPasswordMode] = useState(true);

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

  function handlePasswordMode() {
    setPasswordMode(!passwordMode);
  }

  const themeValue = {
    success: "green",
    error: "red",
    warning: "red",
    normal: "teal"
  }

  const [checkInput, setCheckInput] = useState({
    email: false,
    password: false,
    type: false
  });

  const [inputTheme, setInputTheme] = useState({
    email: themeValue.normal,
    password: themeValue.normal
  });

  const [massageWarning, setMassageWarning] = useState({
    email: '',
    password: ''
  })

  function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    const email = event.target.value;
    setCheckInput({ ...checkInput, email: false });
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
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const password = event.target.value;
    setCheckInput({ ...checkInput, password: false });
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

  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!checkInput.email && !checkInput.password) {
      setMassageWarning({
        ...massageWarning,
        submit: "يجب عليك تعبئة الحقول.",
      });
      return;
    }
    if (selectedUserType !== '') {
      try {
        const res = await axios.post(`http://localhost:8000/${selectedUserType === "donor" ? "Login_donor" : "Login_charity"}`, {
          email: email,
          password: password,
        });

        localStorage.setItem("token", res.data.Token);
        updateIsLog(true);
        navigate(path);

      } catch (err) {

        if (err.response.data ==="Don't have access" && selectedUserType === "charity") {
          setMassageWarning({
            ...massageWarning,
            submit: "لم تتم الوفقة على الحساب من قبل المسؤول بعد، سوف تصلك رسالة بريد الكترونية عندما تتم الموافقة او الرفض",
          });
          return;
        }

        setMassageWarning({
          ...massageWarning,
          submit: "البريد الاكتروني او كلمة المرور غير صالحة",
        });
        console.error(err);
      }
    }
    else {
      try {
        const res = await axios.post(`http://localhost:8000/Login_admin`, {
          email: email,
          password: password,
        });

        localStorage.setItem("token", res.data.Token);
        navigate("/dashboard");
        console.log(res);

      } catch (err) {
        setMassageWarning({
          ...massageWarning,
          submit: "يجب عليك اختيار نوع المستخدم",
        });
        console.error(err);
      }
      updateIsLog(false);
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
              تسجيل الدخول لحسابك
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
                className="form-radio text-primary-500"
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
                className="form-radio text-primary-500"
              />
            </div>
          </div>
          <div class=" flex flex-col items-center">
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">

                <SignGoogle massage={"التسجيل بواسطة جوجل"} path={path} selectedUserType={selectedUserType} updateIsLog={updateIsLog}  />

                <Facebook massage={"التسجيل بواسطة فيسبوك"} path={path} selectedUserType={selectedUserType} updateIsLog={updateIsLog} />
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
                  <div class="mb-6">
                    <label for="email" className={`block mb-2 text-sm font-medium text-${inputTheme.email}-700 dark:text-${inputTheme.email}-500 `} style={{direction: "rtl" }}>البريد الالكتروني</label>
                    <input onChange={(event) => handleEmail(event)} type="text" id="email" className={`border-${inputTheme.email}-300 text-${inputTheme.email}-900 dark:text-${inputTheme.email}-400 placeholder-${inputTheme.email}-700 dark:placeholder-${inputTheme.email}-500 focus:ring-${inputTheme.email}-500 focus:border-${inputTheme.email}-500 dark:border-${inputTheme.email}-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="ادخل بريدك الالكتروني" style={{direction: "rtl" }}/>
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{direction: "rtl" }}><span class="font-medium">{massageWarning.email}</span></p>
                  </div>
                  <div className='password'>
                    <label for="password" className={`text-${inputTheme.password}-700 dark:text-${inputTheme.password}-500 block mb-2 text-sm font-medium`} style={{direction: "rtl" }}>كلمة المرور</label>
                    <input onChange={(event) => handlePassword(event)} type={passwordMode ? "password" : "text"} id="password" className={`border-${inputTheme.password}-300 text-${inputTheme.password}-900 placeholder-${inputTheme.password}-700 focus:ring-${inputTheme.password}-500 focus:border-${inputTheme.password}-500 dark:text-${inputTheme.password}-500 dark:placeholder-${inputTheme.password}-500 dark:border-${inputTheme.password}-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`} placeholder="ادخل كلمة المرور" style={{direction: "rtl" }}/>
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
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{direction: "rtl" }}><span class="font-medium">{massageWarning.password}</span></p>
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
                    </svg>
                    <span class="ml-3 ">
                      دخول
                    </span>
                  </button>
                  <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`} style={{direction: "rtl" }}><span class="font-medium">{massageWarning.submit}</span></p>
                  <p className={`mt-2 text-sm text-${themeValue.normal}-600 dark:text-${themeValue.normal}-500`} style={{direction: "rtl" }}>ليس لديك حساب! <Link to={path === "/payment" ? { pathname: "/signUp", search: "CheckOut" } : "/signUp"} className={`font-bold text-${themeValue.normal}-300 transition hover:text-${themeValue.normal}-500/75`}>التسجيل</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
