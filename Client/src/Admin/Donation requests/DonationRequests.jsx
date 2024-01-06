
import { useEffect} from 'react';
import {useNavigate }from 'react-router-dom'
import axios from 'axios';
import { TableOfDonationRequest } from "./TableOfDonationRequests";
import { Nav } from "../Nav";
import { Aside } from "../Aside";
export const DonationRequest = () => {
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
          <TableOfDonationRequest />
        </div>
      </main>
      <Aside/>
    </div>
  );
};