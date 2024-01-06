
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useEffect, useState, useReducer, useRef } from "react";
import axios from "axios";

export const QuestionCard = () => {
    const [questions, setQuestions] = useState([]);
    const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);
    const form = useRef();
    const [massage, setMassage] = useState({
        msg: '',
        theme: ''
    });

    // get all messages
    useEffect(() => {
        axios
            .get("http://localhost:8000/dashboard/questions")
            .then((response) => {
                setQuestions(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [reducer]);

    const handleDelete = (id, name) => {
        Swal.fire({
            title: ` هل تريد حذف هذا السؤال  `,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "نعم",
            cancelButtonText: "لا",
            icon: "warning",
        }).then( async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete("http://localhost:8000/dashboard/questions/" + id);
                    console.log(res)
                    forceUpdate();
                    Swal.fire(`لقد تم الحذف بنجاح `, "", "success");
                } catch (error) {
                    console.log(error);
                }
            } else {
                Swal.fire(" تم إلغاء العملية", "", "error");
            }
        });
    };

    const sendQuestion = async (event) => {
        event.preventDefault();

        const question = event.target.question.value;
        const answer = event.target.answer.value;

        if (!question || !answer) {
            setMassage({ msg: 'يجب عليك ادخال جميع الحقول', theme: 'red' });
            return;
        }
        setMassage({ msg: '', theme: 'green' });

        try {
            const res = await axios.post(`http://localhost:8000/dashboard/questions`, { question: question, answer: answer });
            console.log(res);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "تمت اضافة السؤال بنجاح",
                showConfirmButton: false,
                timer: 1500,
            });
            forceUpdate();
            event.target.reset();
        } catch (error) {
            console.log(error);
        }
    };

    const tableRows = questions.map((questions) => {
        return (
            <tr key={questions._id} className="border-b ">
                <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
                >
                    {questions.question}
                </th>
                <td className="px-4 py-3">{questions.answer}</td>

                <td className="px-4 py-3 flex items-center justify-end">
                    <div
                        id=""
                        className="bg-white  rounded divide-y divide-gray-100 shadow "
                    >
                        <div className="tooltip tooltip-error text-white" data-tip="حذف">
                            <button
                                onClick={() => handleDelete(questions._id)}
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
            <h1 className="text-[30px] font-bold py-3">اضافة سؤال </h1>
            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">

                <div className="relative shadow-md overflow-scroll max-h-[300px]">
                    <form ref={form} onSubmit={sendQuestion}>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                name="question"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                id="exampleInput7"
                                placeholder="السؤال"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                                name="answer"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                id="exampleFormControlTextarea13"
                                rows={3}
                                placeholder="الاجابة"
                                defaultValue={""}
                            />
                        </div>
                        <button
                            type="submit"
                            value="send"
                            className="w-full px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            اضافة
                        </button>
                        <p className={`font-bold mt-3 text-${massage.theme}-500`}>{massage.msg}</p>
                    </form>
                </div>
                <h1 className="text-[30px] font-bold py-3">الاسئلة</h1>
                <div className="bg-white relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-right text-gray-500 table-zebra ">
                            <thead className="text-xs text-white uppercase bg-teal-600 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        السؤال
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        الجواب
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.length === 0 ? (
                                    <div className="p-3 text-lg">لا يوجد رسائل</div>
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


