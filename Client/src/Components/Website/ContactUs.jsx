import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
export default function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const [massage, setMassage] = useState({
    msg: '',
    theme: ''
  });


  const sendEmail = async (event) => {
    event.preventDefault();

    const name = event.target.user_name.value;
    const email = event.target.user_email.value;
    const message = event.target.message.value;
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;

    if (!email || !name || !message) {
      setMassage({ msg: 'الرجاء تعبئة جميع الحقول', theme: 'red' });
      return;
    }

    if (!patternEmail.test(email)) {
      setMassage({ msg: 'بريد الكتروني غير صالح', theme: 'red' });
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/message', { name, email, message });
      console.log(res);
      event.target.reset();
      setMassage({ msg: 'تم إرسال رسالتك بنجاح ، سيقوم فريقنا بالرد عليك في أقرب وقت ممكن', theme: 'green' });
    } catch (error) {
      setMassage({ msg: 'هناك شئ خاطئ، يرجى المحاولة فى وقت لاحق', theme: 'red' });
      console.log(error);
    }
  };

  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .map-container {\n        height: 700px;\n        z-index: -1;\n      }\n    ",
            }}
          />
          <div className="px-6 py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: "blur(30px)",
                    }}
                  >
                    <h2 className="text-3xl font-bold mb-12">تواصل معنا</h2>
                    <form id="form" ref={form} onSubmit={sendEmail}>
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          name="user_name"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="الاسم"
                        />
                      </div>
                      <div className="form-group mb-6">
                        <input
                          type="email"
                          name="user_email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                          id="exampleInput8"
                          placeholder="البريد الالكتروني"
                        />
                      </div>
                      <div className="form-group mb-6">
                        <textarea
                          name="message"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                          id="exampleFormControlTextarea13"
                          rows={3}
                          placeholder="الرسالة"
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        value="send"
                        className="w-full px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        ارسال
                      </button>
                    </form>
                    <p className={`font-bold mt-3 text-${massage.theme}-500`}>{massage.msg}</p>
                  </div>
                </div>
                <a href="https://www.google.com/maps/place/Orange+Digital+Village+Zarqa/@32.0587246,36.0840747,18z/data=!4m6!3m5!1s0x151b65cd4d8f17e1:0x30e86b8a97e4ac7d!8m2!3d32.0587246!4d36.0851573!16s%2Fg%2F11s8wcmcb6">
                  <div className="md:mb-12 lg:mb-0">
                    <div className="map-container relative shadow-lg rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1690.69502762621!2d36.08475598108982!3d32.05869732178497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b65cd4d8f17e1%3A0x30e86b8a97e4ac7d!2sOrange%20Digital%20Village%20Zarqa!5e0!3m2!1sar!2sjo!4v1683882796604!5m2!1sar!2sjo" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        className="left-0 top-0 h-full w-full absolute rounded-lg"
                        allowFullScreen=""
                      />
                      <iframe ></iframe>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
