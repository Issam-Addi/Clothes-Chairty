import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";

// import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

export const TableOfAssociationRequests = () => {
  const [orgs, setOrgs] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);
 
  // get all org request on donation  
  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/orgRequestDonation")
      .then((response) => {
        setOrgs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);


  // accept request
  const handleAccepted = (id) => {
    axios
      .put("http://localhost:8000/dashboard/acceptOrgRequestDonation/" + id)
      .then((response) => {
        console.log(response.data);
        forceUpdate();
      })
      .catch((error) => console.log(error.message));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "تمت الموافقة بنجاح",
      showConfirmButton: false,
      timer: 1800,
    });
  };

  // reject request
  const handleDelete = (id, name) => {
    console.log(id, name);
    Swal.fire({
      title: ` هل أنت متأكد من رفض هذا الطلب ؟  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` تم تأكيد هذا الطلب `, "", "success");

        axios
          .put("http://localhost:5500/admin/orgs/orgs/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
        forceUpdate();
      } else Swal.fire(" تم إلغاء العملية", "", "error");
    });
  };
  
  const tableRows = orgs.map((org) => {
    return (
      <tr key={org._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {org.email}
        </th>
        <td className="px-4 py-3">{org.destination}</td>
        <td className="px-4 py-3">{org.date}</td>
        
        

        <td className="px-4 py-3 flex items-center justify-end">
          <div
            id=""
            className="bg-white flex  rounded divide-y divide-gray-100 gap-2  "
          >
            <div
              className="tooltip tooltip-success text-white "
              data-tip="موافق"
            >
              <button
                onClick={() => handleAccepted(org._id)}
                className="btn bg-white hover:bg-green-200 shadow-lg hover:shadow-xl border-none "
              >
                <CiCircleCheck className="text-green-500 text-[20px]" />
              </button>
            </div>
            <div className="tooltip tooltip-error text-white" data-tip="رفض">
              <button
                onClick={() => handleDelete(org._id)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <CiCircleRemove className="text-red-500 text-[20px]" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        <h1 className="text-[30px] font-bold py-3">طلبات الجمعيات</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full h-full text-sm text-right text-gray-500  table-zebra">
              <thead className="text-xs text-white uppercase bg-teal-600 ">
              <tr>
         
                  <th scope="col" className="px-4 py-3">
                    إيميل المتبرع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    اسم المتبرع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    وقت التبرع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
          </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">لا يوجد طلبات </div>
                ) : (
                  tableRows
                )}
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
