import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Modal from "../../../Components/Modal";


const AskAdvertiseMent = () => {
    const [showModal, setShowModal] = useState(false);
    const [medicines, setMedicines] = useState([]);
    const token = localStorage.getItem("token");
    const axiosSecure = useAxiosSecure();
    const addMedicine = (medicine) => {
        axiosSecure.post('/medicine', medicine, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setMedicines([...medicines, res.data]);
            })
            .catch(err => console.error(err));
    };
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold my-4">Ask For Advertisement</h1>
            <div className="flex justify-end my-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowModal(true)}>Add Advertise</button>
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

export default AskAdvertiseMent;