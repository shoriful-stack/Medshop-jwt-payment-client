import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Modal from "../../../Components/Modal";
import useAuth from "../../../Hooks/useAuth";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";


const ManageMedicine = () => {
    const { user } = useAuth();
    const [medicines, setMedicines] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const axiosSecure = useAxiosSecure();
    const axiosCommon = useAxiosCommon();
    const token = localStorage.getItem("token");
    console.log(medicines);
    const addMedicine = (medicine) => {
        axiosSecure.post('/medicine', medicine, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setMedicines([...medicines, res.data]);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        if (user.email) {
            console.log("Fetching medicines for user:", user.email);
            axiosCommon.get(`/medicine/${user.email}`, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => {
                    console.log("Fetched medicines:", res.data);
                    setMedicines(res.data);
                })
                .catch(err => console.error("Error fetching medicines:", err));
        }
    }, [axiosCommon, user.email, token]);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold my-4">Manage Medicines</h1>
            <div className="flex justify-end my-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowModal(true)}>Add Medicine</button>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-black text-white rounded-lg">
                        <th className="py-2">Name</th>
                        <th className="py-2">Category</th>
                        <th className="py-2">Company</th>
                        <th className="py-2">Mass Unit</th>
                        <th className="py-2">Price per Unit</th>
                        <th className="py-2">Discount (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 text-center">Bextram Kids</td>
                        <td className="py-2 text-center">Syrup</td>
                        <td className="py-2 text-center">Beximco Pharmaceuticals</td>
                        <td className="py-2 text-center">ML</td>
                        <td className="py-2 text-center">160</td>
                        <td className="py-2 text-center">20</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-center">Novomix 30</td>
                        <td className="py-2 text-center">Injection</td>
                        <td className="py-2 text-center">Eskayef Pharmaceuticals</td>
                        <td className="py-2 text-center">ML</td>
                        <td className="py-2 text-center">470</td>
                        <td className="py-2 text-center">20</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-center">Cetrizine 10</td>
                        <td className="py-2 text-center">Capsule</td>
                        <td className="py-2 text-center">Square Pharmaceuticals</td>
                        <td className="py-2 text-center">Mg</td>
                        <td className="py-2 text-center">10</td>
                        <td className="py-2 text-center">20</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-center">Zimax 250</td>
                        <td className="py-2 text-center">Capsule</td>
                        <td className="py-2 text-center">Square Pharmaceuticals</td>
                        <td className="py-2 text-center">Mg</td>
                        <td className="py-2 text-center">40</td>
                        <td className="py-2 text-center">20</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-center">Seclo 20</td>
                        <td className="py-2 text-center">Capsule</td>
                        <td className="py-2 text-center">Square Pharmaceuticals</td>
                        <td className="py-2 text-center">Mg</td>
                        <td className="py-2 text-center">6</td>
                        <td className="py-2 text-center">20</td>
                    </tr>
                </tbody>
            </table>
            <Modal showModal={showModal} setShowModal={setShowModal} addMedicine={addMedicine} />
        </div>
    );
};

export default ManageMedicine;