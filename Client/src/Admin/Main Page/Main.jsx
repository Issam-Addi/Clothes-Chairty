
import { useEffect} from 'react';
import {useNavigate }from 'react-router-dom'
import axios from 'axios';
import { Stats } from "./Stats";
import { TableOfDonors } from "../Donors Page/TableOfDonors";
import { TableOfBeneficiaries } from "../Beneficiaries Page/TableOfBeneficiaries";
import { TableOfDonations } from "../Donations Page/TableOfDonations";
import { TableOfRequests } from "../Requests Page/TableOfRequests";
import { TableOfDonationRequest } from "../Donation requests/TableOfDonationRequests";
import { TableOfAssociationRequests } from "../Association requests/TableOfAssociationRequests";
export const Main = () => {
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
    <main className="p-4 px-8  md:mr-64 h-auto py-20 mt-2 " dir="rtl">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <Stats />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <TableOfDonors />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <TableOfDonations />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <TableOfBeneficiaries />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <TableOfAssociationRequests />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <TableOfDonationRequest />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <TableOfRequests />
      </div>
    </main>
  );
};
