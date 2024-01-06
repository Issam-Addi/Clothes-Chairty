import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Loader from "../Website/Loader";
import heroBg from "../../Images/donate.jpg";
import boxImage from "../../Images/box.png";
import useFetch from "../../CustomHooks/UseFetch";
import NotFound from "./NotFound";

const Donations = () => {
  const navigate = useNavigate();

  const verifyToken = async (role) => {
    const token = localStorage.getItem("token") || "";

    try {
      const res = await axios.get("http://localhost:8000/Verify_token", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.data.role !== role) {
        navigate("*");
      }
    } catch (err) {
      console.log(err);
      navigate("*");
    }
  };

  useEffect(() => {
    verifyToken("charity");
    window.scrollTo(0, 0);
  }, []);

  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setselectedStatus] = useState("");
  const [maxPieces, setMaxPieces] = useState("");
  const [minPieces, setMinPieces] = useState("");
  const { data, loading, error } = useFetch("http://localhost:8000/all_order");

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <NotFound />;
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleStatusChange = (event) => {
    setselectedStatus(event.target.value);
  };

  const handlemaxPiecesChange = (event) => {
    setMaxPieces(Number(event.target.value));
  };
  const handleminPiecesChange = (event) => {
    setMinPieces(Number(event.target.value));
  };
  const filteredDonations = data?.filter((donation) => {
    if (selectedType && donation.type !== selectedType) {
      return false;
    }
    if (selectedStatus && donation.order_status !== selectedStatus) {
      return false;
    }

    if (maxPieces && donation.number_pieces > maxPieces) {
      return false;
    }
    if (minPieces && donation.number_pieces < minPieces) {
      return false;
    }
    return true;
  });

  return (
    <>
      {/* Header section */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "16rem",
          backgroundAttachment: "fixed",
        }}
      >
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
        <div className="absolute inset-0 overflow-hidden bg-gray-600 opacity-60"></div>
      </div>

      {/* Filter */}
      <section className="py-2">
        <div className="container mx-auto p-4">
          <div className="row shadow-lg w-full">
            <div className="col-lg-6">
              <div className="flex items-center gap-3 mb-5 flex-wrap justify-center flex-col sm:flex-row">
                <select
                  onChange={handleTypeChange}
                  value={selectedType}
                  className="select__group mb-3 sm:mb-0 border-2 border-gray-300 focus:outline-teal-700 focus:shadow-outline rounded"
                >
                  <option value="">النوع</option>
                  {[
                    ...new Set(filteredDonations?.map((item) => item.type)),
                  ].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {/* ************* */}
                <select
                  onChange={handleStatusChange}
                  value={selectedStatus}
                  className="select__group mb-3 sm:mb-0 border-2 border-gray-300 focus:outline-teal-700 focus:shadow-outline rounded"
                >
                  <option value="">حالة التبرع</option>
                  {[
                    ...new Set(
                      filteredDonations?.map((item) => item.order_status)
                    ),
                  ].map((order_status) => (
                    <option key={order_status} value={order_status}>
                      {order_status}
                    </option>
                  ))}
                </select>
                <div className="flex items-center">
                  <input
                    placeholder="أقل عدد قطع"
                    name="Max"
                    type="number"
                    min="0"
                    value={minPieces}
                    onChange={handleminPiecesChange}
                    className="shadow appearance-none border rounded w-40 py-2 px-3 text-teal-700 leading-tight focus:outline-teal-700 focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    placeholder="أكثر عدد قطع"
                    name="Min"
                    type="number"
                    min={minPieces}
                    value={maxPieces}
                    onChange={handlemaxPiecesChange}
                    className="shadow appearance-none border rounded w-40 py-2 px-3 text-teal-700 leading-tight focus:outline-teal-700 focus:shadow-outline"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="flex items-center gap-3 mb-5 flex-wrap justify-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Donations list section */}
      <section className="container mx-auto my-4 p-10 md:p-10 transform duration-500">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredDonations?.map((item, index) => (
            <div
              key={index}
              className="border-2 border-teal-100 rounded-lg flex flex-wrap md:flex-nowrap shadow-lg mx-auto mt-4 w-full md:w-84 hover:scale-95 transition-transform duration-300"
            >
              <div className="card" style={{ width: "100%", height: "80%" }}>
                <div className="flex justify-center items-center mt-2">
                  <img className="w-40 h-40" src={boxImage} alt="" />
                </div>
                <div className="p-2 my-auto text-right">
                  <p className="text-base text-gray-600 mt-2 mb-3 overflow-hidden">
                    حالة التبرع : {item.order_status}
                  </p>
                  <p
                    className="text-base text-gray-600 mt-2 overflow-hidden mb-2"
                    style={{ wordWrap: "break-word" }}
                  >
                    الوصف : {item.description}{" "}
                  </p>

                  <span> عدد القطع : {item.number_pieces} </span>
                  <Link
                    to={{ pathname: `/donations_details/${item._id}`, search: "charity" }}
                    className="mt-4 rounded-md bg-white border-2 border-teal-700 px-4 py-2.5 text-sm font-medium text-teal-700 hover:text-white transition hover:bg-teal-700 flex justify-center"
                  >
                    عرض
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Donations;
