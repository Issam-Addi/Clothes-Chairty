import { gapi } from 'gapi-script'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginSocialFacebook } from 'reactjs-social-login'
import axios from 'axios'

export default function SigInWithFacebook({ massage, updateIsLog, selectedUserType }) {

    const navigate = useNavigate();
    const [massageWarning, setMassageWarning] = useState('');

    const themeValue = {
        success: "green",
        error: "red",
        warning: "red",
        normal: "teal"
    }

    async function signUp(user) {
        try {
            const res = await axios.post(`http://localhost:8000/${selectedUserType === "donor" ? "donor" : "charity"}`, user);
            console.log(res);

            if (!res.data.data.active && selectedUserType === "charity") {
                setMassageWarning("تمت العملية بنجاح ،يجب عليك انتظار موافقة المسؤول الان، سوف تصلك رسالة بريد الكترونية عندما تتم الموافقة او الرفض");
                return;
            }

            localStorage.setItem("token", res.data.Token);
            updateIsLog(true);
            navigate("/");
        } catch (err) {
            console.error(err);
            setMassageWarning("حدث خطأ ما او البريد مسجل بالفعل عن طريقة تسجيل اخرى");
        }
    }

    async function logIn(user) {

        if (selectedUserType !== "charity" && selectedUserType !== "donor") {
            setMassageWarning("الرجاء ادخال نوع المستخدم");
            return;
        }

        try {
            const res = await axios
                .post(`http://localhost:8000/${selectedUserType === "donor" ? "Login_donor" : "Login_charity"}`, {
                    email: user.email,
                    password: user.password,
                })

            if (!res.data.data.active && selectedUserType === "charity") {
                setMassageWarning("لم يتم الموفقة على الجهة الخيرية من قبل المسؤول بعد");
                return;
            }

            localStorage.setItem("token", res.data.Token);
            updateIsLog(true);
            navigate("/");
        } catch (err) {
            console.log(err);
            signUp(user)
        }
    }

    async function handleSignIn(response) {

        const user = {
            username: response.data.name,
            email: response.data.email,
            password: response.data.id,
            phone: "الرجاء ادخال رقم هاتف"
        };
        console.log(response, user);

        logIn(user)
    }

    function handleError(error) {
        setMassageWarning("حدث خطأ ما، الرجاء المحاولة فيما بعد");
        console.log("Sign With Facebook, Error  :" + error);
    }

    return (
        <>
            <LoginSocialFacebook
                appId={process.env.REACT_APP_Facebook_Client_id}
                onResolve={handleSignIn}
                onReject={handleError}>
                <button
                    class="sign-with-account w-full  max-w-xs font-bold shadow-md rounded-lg p-3 bg-indigo-100 text-gray-800 flex items-center justify-center hover:shadow-teal-600  transition duration-300 focus:shadow-none focus:translate-y-0.5 focus:scale-110 hover:-translate-y-1 hover:scale-110 mt-5"
                >
                    <div class="bg-white p-1 rounded-full">
                        <svg class="w-7" xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" id="facebook-logo-2019"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
                    </div>
                    <span class="ml-4">
                        {massage}
                    </span>
                </button>

                <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`}><span class="font-medium">{massageWarning}</span></p>
            </LoginSocialFacebook>
        </>
    )
}
