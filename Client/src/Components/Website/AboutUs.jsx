import React, { useEffect } from 'react'
import './../../CSS/About.css'
import './../../CSS/Idea.css'
import IdeaImage from '../../Images/Idea.png'
import aboutimage from '../../Images/aboutus.jpg'

export default function AboutUs() {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4" dir="rtl">عنا </h1>
            <p className="font-normal text-base leading-6 text-gray-600 " dir="rtl">وشاح الامل هو منصة إلكترونية تهدف إلى جمع الملابس المستخدمة أو الجديدة من الأفراد وتوزيعها على الأشخاص المحتاجين أو المجتمعات ذات الدخل المحدود. يعد هذا الموقع وسيلة مريحة للمتبرعين للتخلص من الملابس الغير مرغوب فيها وتوجيهها إلى الأشخاص الذين يحتاجونها بدلاً من التخلص منها.

              تتم عملية التبرع عبر الموقع بشكل سهل وبسيط. يمكن للأفراد تسجيل حساب مجاني على الموقع وملء بعض المعلومات الأساسية. بعد ذلك، يتمكن المتبرعون من إضافة التفاصيل حول الملابس التي يودون التبرع بها، مثل النوع، والحجم، والحالة (جديدة أو مستعملة). يمكن أيضًا تحميل صور للملابس لتوضيح مظهرها وحالتها العامة.</p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src={aboutimage} alt="A group of People" />
          </div>
        </div>

        <>
          {/* Container for demo purpose */}
          <div className="container my-24 mx-auto md:px-6">
            {/* Section: Design Block */}
            <section className="mb-32 text-center">
              <h2 className="mb-12 text-3xl font-bold">
                فريقنا <u className="text-primary dark:text-primary-400"></u>
              </h2>
              <div className="lg:gap-xl-12 grid gap-x-6  gap-y-52 sm:gap-y-38  md:grid-cols-2 lg:grid-cols-4">
                <div className="mb-12 lg:mb-0" style={{height: '150px'}}>
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://cdn.discordapp.com/attachments/1118818677110866012/1119979426977943562/profile-pic..png"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">عمر حسونة</h5>
                  <p className="mb-6">مطور ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                    <a href="https://github.com/OmarHassouna-PS" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  
                    <a href="https://www.linkedin.com/in/omar-hassouna-97b76b1aa/" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="mb-12 lg:mb-0" style={{height: '150px'}}>
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://cdn.discordapp.com/attachments/1093684184775659631/1119980731603636295/1567681432510-removebg-preview.png"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">علي الطيراوي</h5>
                  <p className="mb-6">مطور ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                    <a href="https://github.com/Ali-alterawi/" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                   
                    <a href="https://www.linkedin.com/in/ali-al-terawi-332603181/" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="mb-12 md:mb-0" style={{height: '150px'}}>
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://cdn.discordapp.com/attachments/1087291162840281098/1119982029526802492/ME.png"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">عصام عدي</h5>
                  <p className="mb-6">مطور ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                  <a href="https://github.com/Issam-Addi" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="#" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="mb-12 md:mb-0" style={{height: '150px'}}>
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://cdn.discordapp.com/attachments/1119217702968508417/1120600157910741092/hindh.png"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">هند هديب</h5>
                  <p className="mb-6">مطورة ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                  <a href="https://github.com/hind-hudeib" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/hind-hudeib/" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="mb-12 lg:mb-0" style={{height: '150px'}}>
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://cdn.discordapp.com/attachments/1118818677110866012/1120063245219274783/ahmed2.jpg"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">احمد ابو غوش</h5>
                  <p className="mb-6">مطور ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                  <a href="#" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-abughaush-243238204/" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="mb-12 lg:mb-0" style={{height: '150px'}}>
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://cdn.discordapp.com/attachments/1082309541145890927/1120248013957374033/WhatsApp_Image_2023-05-27_at_4.25.41_AM_1.jpeg"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">وسام احمد</h5>
                  <p className="mb-6">مطورة ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                    <a href="https://github.com/wesam-ahmad" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/wesamahmad/" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="mb-12 md:mb-0"style={{height: '150px'}} >
                  <img
                    className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://media.licdn.com/dms/image/D4E03AQG8TOgUYvuYMA/profile-displayphoto-shrink_200_200/0/1673285590063?e=1692835200&v=beta&t=OAnMfkmbirGeVH6NHHliy5meu3axkZg7GTAkULa4flo"
                    alt="avatar" style={{height: '100%'}}
                  />
                  <h5 className="mb-4 text-lg font-bold">محمد زايد</h5>
                  <p className="mb-6">مطور ويب</p>
                  <ul className="mx-auto flex list-inside justify-center">
                  <a href="#" className="px-2">
                      {/* GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="#" className="px-2">
                      {/* Linkedin */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </>
      </div>
    </>
  );
}