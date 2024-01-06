import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Website/Footer'
import Header from './Components/Website/Header'
import ContactUs from './Components/Website/ContactUs'
import SignIn from './Components/Users/SignIn'
import SignUp from './Components/Users/SignUp'
import Donations from './Components/Website/Donations'
import DonationsDetails from './Components/Website/DonationsDetails';
import AboutUs from './Components/Website/AboutUs';
import Idea from './Components/Website/Idea';
import Profile from './Components/Website/Profile';

import Home from './Components/Website/Home';
import OurServices from './Components/Website/OurServices';
import NotFound from './Components/Website/NotFound';
// Dashboard
import { DashBoard } from './Admin/DashBoard';
import { Donors } from './Admin/Donors Page/Donors';
import { Beneficiaries } from './Admin/Beneficiaries Page/Beneficiaries';
import { DonationsAdmin } from './Admin/Donations Page/Donations';
import { Message } from './Admin/messages/Message';
import { Question } from './Admin/Question/Question';
import { Requests } from './Admin/Requests Page/Requests';
import { DonationRequest } from './Admin/Donation requests/DonationRequests';
import { AssociationRequests } from './Admin/Association requests/AssociationRequests';

export const ProductsData = createContext();

function App() {

  const [isLog, setIsLog] = useState(localStorage.getItem("token") ? true : false);

  return (
    <BrowserRouter>
      <Header isLog={isLog} updateIsLog={setIsLog} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signIn" element={<SignIn updateIsLog={setIsLog} />} />
        <Route path="/signUp" element={<SignUp updateIsLog={setIsLog} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route
          path="/donations_details/:donationId"
          element={<DonationsDetails />}
        />
        <Route path="/idea" element={<Idea />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/our_services" element={<OurServices />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/benfi" element={<Beneficiaries />} />
        <Route path="/donation" element={<DonationsAdmin />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/message" element={<Message />} />
        <Route path="/question" element={<Question />} />
        <Route path="/donationRequest" element={<DonationRequest />} />
        <Route path="/orgrequest" element={<AssociationRequests />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


