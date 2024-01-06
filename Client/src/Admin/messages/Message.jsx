import { MessageCard } from "./MessageCard";
import { Nav } from "../Nav";
import { Aside } from "../Aside";
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Message = () => {
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
    <div dir="rtl">
    <Nav/>
      <main className="p-4 px-8  md:mr-64 h-auto pt-20 mt-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
          <MessageCard/>
        </div>
      </main>
      <Aside/>
    </div>
  );
};