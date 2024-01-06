import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import heroBg from "../../Images/donation7.webp";
import Loader from "../Website/Loader";
import NotFound from "../Website/NotFound";
import useFetch from "../../CustomHooks/UseFetch";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { Link } from "react-router-dom";

const DonationsDetails = ({}) => {
  const { donationId } = useParams();
  const [userRole, setUserRole] = useState();
  const [path, setPath] = useState();

  const { data, loading, error } = useFetch(
    `http://localhost:8000/one_order_by_Id/${donationId}`
  );
  const location = useLocation();

  useEffect( () => {
    if (location.search === "?profile")
      setPath('/profile');
    else 
      setPath('/donations');
  }, []);

  async function getUser(id) {
    try {
      const res = await axios.get(`http://localhost:8000/charity/${id}`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function verifyToken() {
    const token = localStorage.getItem("token") || false;

    if (token) {
      try {
        const res = await axios.get(`http://localhost:8000/Verify_token`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUserRole(res.data.role);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    verifyToken();
    window.scrollTo(0, 0);
  }, []);

  const handleConfirmOrder = async () => {
    const userVerifyToken = await verifyToken();

    const user = await getUser(userVerifyToken.userId);
    const firstUser = user[0];

    console.log(user);
    const isMovementExistingResponse = await axios.post(
      "http://localhost:8000/is_movement_existing",
      {
        email: firstUser.email,
        order_id: donationId,
      }
    );

    if (isMovementExistingResponse.data.status === false) {
      Swal.fire({
        title: "خطأ",
        text: "لقد قمت بتقديم الطلب مسبقًا",
        icon: "error",
        confirmButtonText: "تم",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/charity_movement",
        {
          email: firstUser.email,
          destination: data[0].name,
          order_id: donationId,
          charity_id: firstUser._id,
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "تم تقديم الطلب بنجاح",
          text: "",
          icon: "success",
          confirmButtonText: "تم",
        });
      } else {
        console.log("Error confirming order");
      }
    } catch (error) {
      console.log("Error confirming order:", error);
    }
  };

  if (loading || !data) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }

  const donation = data.find((item) => item._id === donationId);

  if (!donation) {
    return <NotFound />;
  }

  return (
    <>
      <section className="flex flex-col items-center sm:flex-col md:flex-row py-2 mx-24 sm:mx-24 md:mx-48 lg:mx-64 my-16 border border-teal-800 lg:px-16 shadow-2xl rounded-xl">
        <div className="flex flex-col  w-full md:w-1/2 p-4">
          <img
            className="w-92 h-96 rounded-2xl mx-auto md:ml-2 m-4 "
            src={heroBg}
            alt="Image"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 border-r-4  border-teal-400 md:mr-12 p-4">
          <div className="bg-white p-4" dir="rtl">
            <p
              className="text-base text-gray-800 mb-2"
              style={{ wordWrap: "break-word" }}
            >
              الوصف:{" "}
              <span className="text-gray-600"> {donation.description} </span>
            </p>
            <p className="text-base text-gray-800 mb-2">
              حالة التبرع :{" "}
              <span className="text-gray-600">{donation.order_status}</span>
            </p>
            <p className="text-base text-gray-800 mb-2">
              النوع :{" "}
              <span className="text-gray-600">{donation.type}</span>
            </p>
            <p className="text-base text-gray-800 mb-2">
              عدد القطع :{" "}
              <span className="text-gray-600">{donation.number_pieces} </span>
            </p>
            <p className="text-base text-gray-800">
              الموقع :<span className="text-gray-600">{donation.address} </span>
            </p>
          </div>

          <div className="flex text-center">

              <Link
                to={{ pathname: path, search: "log" }}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-2 mt-4 mr-2 rounded w-1/5 ml-auto"
              >
                رجوع
              </Link>

            {userRole === "charity" && (
              <button
                onClick={handleConfirmOrder}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mt-4 mr-2 rounded w-1/2"
              >
                تأكيد الطلب
              </button>
            )}
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d9488"
          fillOpacity="1"
          d="M0,192L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default DonationsDetails;
