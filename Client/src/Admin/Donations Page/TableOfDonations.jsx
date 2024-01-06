
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

export const TableOfDonations = () => {
  const [donations, setDonations] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);


  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/activeDonations")
      .then((response) => {
        setDonations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `  ${name}  هل تريد حذف طلب `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} لقد تم الحذف بنجاح `, "", "success");

        axios
          .put("http://localhost:8000/dashboard/deleteDonation/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .then(() => {
            forceUpdate();
          })
          .catch((error) => console.log(error.message));
      } else Swal.fire(" تم إلغاء العملية", "", "error");
    });
  };

  const tableRows = donations.map((donation) => {
    return (
      <tr key={donation._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {donation.name}
        </th>
        <td className="px-4 py-3">{donation.email}</td>
        <td className="px-4 py-3">{donation.phone}</td>
        <td className="px-4 py-3">{donation.address}</td>
        <td className="px-4 py-3">{donation.order_status}</td>
        <td className="px-4 py-3">{donation.number_pieces}</td>
        <td className="px-4 py-3">{donation.type}</td>
        <td className="px-4 py-3">{donation.description}</td>
        <td className="px-0 py-0">
          <div className="w-44">
            <span className={`bg-${!donation.available ? 'green' : 'red'}-100 text-${!donation.available ? 'green' : 'red'}-800   px-2 py-0.5 rounded dark:bg-gray-700 dark:text-${!donation.available ? 'green' : 'red'}-400 border border-${!donation.available ? 'green' : 'red'}-400`}>{!donation.available ? 'مستلم' : "غير مستلم"}</span>
          </div>
        </td>
        <td className="px-4 py-3 flex items-center justify-end">
        <div
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-error text-white" data-tip="حذف">
              <button
                onClick={() => handleDelete(donation._id, donation.name)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-red-500 text-[15px]" />
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
        <h1 className="text-[30px] font-bold py-3">التبرعات</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right text-gray-500  table-zebra">
              <thead className="text-xs text-white uppercase bg-teal-600 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    اسم المتبرع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    الإيميل
                  </th>
                  <th scope="col" className="px-4 py-3">
                    رقم الهاتف
                  </th>
                  <th scope="col" className="px-4 py-3">
                    العنوان
                  </th>
                  <th scope="col" className="px-4 py-3">
                    حالة التبرع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    عدد القطع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    النوع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    وصف
                  </th>
                  <th scope="col" className="px-4 py-3">
                    حالة التبرع
                  </th>
                  <th scope="col" className="px-4 py-3">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">لا يوجد تبرعات</div>
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
