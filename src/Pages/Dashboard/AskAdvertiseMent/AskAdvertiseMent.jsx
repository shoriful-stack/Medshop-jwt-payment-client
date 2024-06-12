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
                        <th className="py-2">Description</th>
                        <th className="py-2">Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 text-center">Safovir C</td>
                        <td className="py-2 text-center">Safovir C is an antiviral medication primarily used to treat chronic hepatitis B and C infections. </td>
                        <td className="py-2 text-center">Beximco Pharmaceuticals</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-center">Olysio 150</td>
                        <td className="py-2 text-center">Olysio (simeprevir) is an antiviral medication used in combination with other drugs to treat chronic hepatitis C virus (HCV) infection.</td>
                        <td className="py-2 text-center">Square Pharmaceuticals</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-center">Onasemonge AB</td>
                        <td className="py-2 text-center">Onasemonge AB is an antibiotic medication used to treat a variety of bacterial infections.</td>
                        <td className="py-2 text-center">Square Pharmaceuticals</td>
                    </tr>
                </tbody>
            </table>
            <Modal showModal={showModal} setShowModal={setShowModal} addMedicine={addMedicine} />
        </div>
    );
};

export default AskAdvertiseMent;