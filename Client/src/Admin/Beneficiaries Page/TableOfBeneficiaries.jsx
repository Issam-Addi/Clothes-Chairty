
import { useEffect , useState , useReducer } from "react";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export const TableOfBeneficiaries = () => {
const [orgs , setorgs] = useState([]);
const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

// get all  Active charities from db
  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard/charitiesActive")
      .then((response) => {
        setorgs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  const handleDelete = (id, name) => {
    Swal.fire({
      title: ` do you want to remove ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been removed `, "", "success");

        axios
          .put("http://localhost:8000/dashboard/upDonors/" + id)
          .then((response) => {
            console.log(response.data);
          }).then(()=>{
            forceUpdate();
          })
          .catch((error) => console.log(error.message));
       
      } else Swal.fire(" Cancelled", "", "error");
    });
  };

  const tableRows = orgs.map((org) =>(
    <tr key={org._id} className="bg-white border-b ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {org.username}
      </th>
      <td className="px-4 py-3">{org.serial_number}</td>
      <td>{org.email}</td>
      <td>{org.phone}</td>
     
      <td className="px-4 py-3 flex items-center justify-end">
          <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-error text-white" data-tip="حذف">
              <button
                onClick={() => handleDelete(org._id, org.username)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-red-500 text-[15px]" />
              </button>
            </div>
          </div>
        </td>

    </tr>
  ))
return (
  <div className="mt-6">
    <h1 className="text-[30px] font-bold mb-3"> الجمعيات المستفيدة</h1>
    <div className="relative overflow-x-auto rounded-2xl shadow-md overflow-scroll max-h-[300px]">
      <table className="w-full text-sm text-right text-gray-500 table-zebra  ">
        <thead className="text-xs text-white uppercase bg-teal-600 ">
          <tr>
          <th scope="col" className="px-4 py-3">
                    اسم الجمعية
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
            <div className="p-3 text-lg">لا يوجد جمعيات مستفيدة</div>
          ) : (
            tableRows
          )}
         
        </tbody>
      </table>
    </div>
  </div>
);
};
