import { useEffect, useState, useReducer } from "react";
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";
import Swal from "sweetalert2";
import axios from "axios";
export const TableOfRequests = () => {
  const [orgs, setOrgs] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/charitiesNotActive")
      .then((response) => {
        setOrgs(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  const handleAccepted = (id) => {
    axios
      .put("http://localhost:8000/dashboard/acceptOrg/" + id)
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
    // forceUpdate();
  };

  const handleRejected = (id, name) => {
    console.log(id);
    Swal.fire({
      title: ` ${name} هل أنت متأكد من حذف طلب   `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} تم إلغاء الطلب `, "", "success");

        axios
          .delete("http://localhost:8000/dashboard/rejectOrg/" + id)
          .then((response) => {
            console.log(response.data);
            forceUpdate();
          })
          .catch((error) => console.log(error.message));
        
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
          {org.username}
        </th>
        <td className="px-4 py-3">{org.serial_number}</td>
        <td className="px-4 py-3">{org.email}</td>
        <td className="px-4 py-3">{org.phone}</td>
      
        <td className="px-4 py-3 flex items-center justify-end">
          <div
            id=""
            className="bg-white flex  rounded divide-y divide-gray-100 gap-2  "
          >
            <div
              className="tooltip tooltip-success text-white "
              data-tip="قبول"
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
                onClick={() => handleRejected(org._id, org.username)}
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
        <h1 className="text-[30px] font-bold py-3">طلبات إنضمام الجمعيات</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right text-gray-500  table-zebra">
              <thead className="text-xs text-white uppercase bg-teal-600 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    الاسم
                  </th>
                  <th scope="col" className="px-4 py-3">
                   الرقم الوطني للجمعية
                  </th>
                  <th scope="col" className="px-4 py-3">
                    الإيميل
                  </th>
                  <th scope="col" className="px-4 py-3">
                    رقم الهاتف
                  </th>
                 
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">لا توجد طلبات انضمام</div>
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
