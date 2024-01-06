/* eslint-disable react/prop-types */

import { useEffect} from 'react';
import {useNavigate }from 'react-router-dom'
import axios from 'axios';
import "flowbite";
import { Nav } from "./Nav";
import { Aside } from "./Aside";
import { Main } from "./Main Page/Main";

export const DashBoard = (props) => {
  const navigate = useNavigate();

  const verifyToken= async (role) => {
    const token = localStorage.getItem("token") || "";

    try {
      const res = await axios.get("http://localhost:8000/Verify_token", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.data.role !== role) {
        navigate("/*");
      } 
        
    } catch (err) {
      console.log(err);
      navigate("/*");
    }
  };

  useEffect(() => {
    verifyToken("admin");
    window.scrollTo(0, 0);
    var Nav = document.getElementById("Nav");
    Nav.style.display = "none";
    var Footer = document.getElementById("Footer");
    Footer.style.display = "none";
  }, []);

  return (
    <>
      <div className="antialiased" dir="rtl">
        <Nav />
        <Main />
        <Aside forceUpdate={props.forceUpdate}/>
      </div>
    </>
  );
};
