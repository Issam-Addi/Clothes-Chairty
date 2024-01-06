

import {CiInboxIn} from 'react-icons/ci';
import {RiHandHeartFill} from 'react-icons/ri';
import {TbHeartHandshake} from 'react-icons/tb';
import {FaDonate , FaCity} from 'react-icons/fa';
import { useEffect , useState , useReducer } from 'react';
import axios from 'axios';

export const Stats = () => {

  const [donors, setDonors] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);


// get total of donors
  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/donors")
      .then((response) => {
        setDonors(response.data);
      //  const bb = forceUpdate()
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  // get total orgs
  const [orgs , setOrgs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/charitiesActive")
      .then((response) => {
        setOrgs(response.data);
        // forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  // total donation
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/activeDonations")
      .then((response) => {
        setDonations(response.data);
        // forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

// total of request
const [requests, setRequests] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:8000/dashboard/charitiesNotActive")
    .then((response) => {
      setRequests(response.data);
      // forceUpdate();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [reducer]);




// total of trashed hotels
const [trashHotels, setTrashHotels] = useState([]);
useEffect(() => {
  axios
  .get("http://localhost:5500/admin/hotel/hotels/retrev")
  .then((response) => {
    setTrashHotels(response.data);
    forceUpdate();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
},[reducer]);

// total of trashed users
const [trashUsers, setTrashUsers] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:5500/admin/users/users/retreived")
    .then((response) => {
      setTrashUsers(response.data);
      forceUpdate();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [reducer]);


  return (
    <div className="stats stats-vertical xl:stats-horizontal md:stats-horizontal bg-white shadow-lg ">
      <div className="stat">
        <div className="stat-title  text-teal-600 font-bold">مجموع المتبرعون</div>
        <div className="stat-value text-teal-600">{donors.length}</div>
        <div className="stat-figure text-teal-600">
          <RiHandHeartFill className="text-[40px]" />
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-teal-600">
          <TbHeartHandshake className="text-[40px]" />
        </div>
        <div className="stat-title  text-teal-600 font-bold">مجموع الجمعيات</div>
        <div className="stat-value text-teal-600">{orgs.length}</div>
      </div>

      <div className="stat">
        <div className="stat-figure  text-teal-600 ">
          <FaDonate className="text-[40px] " />
        </div>
        <div className="stat-title text-teal-600 font-bold">مجموع التبرعات</div>
        <div className="stat-value text-teal-600">{donations.length}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-teal-600">
          <FaCity className="text-[40px] text-teal-600" />
        </div>
        <div className="stat-title  text-teal-600 font-bold">عدد المدن</div>
        <div className="stat-value text-teal-600">12</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-teal-600">
          <CiInboxIn className="text-[40px] text-teal-600" />
        </div>
        <div className="stat-title  text-teal-600 font-bold"> طلبات الإنضمام</div>
        <div className="stat-value text-teal-600">{requests.length}</div>
      </div>
     
    </div>
  );
};
