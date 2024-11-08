import { useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";


const Invoice = () => {
    const location = useLocation();
    const { purchaseDetails } = location.state || {};
    const componentRef = useRef();

    if (!purchaseDetails) {
        return <div>No purchase details found</div>;
    }
    return (
        <div className="flex justify-center items-center min-h-screen lg:mt-28 mt-20 mb-4">
            <div ref={componentRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="flex justify-center mb-6">
                    <img src="https://i.ibb.co/NndfkCd/logomoos-removebg.png" alt="Logo" className="w-80 h-40" />
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">User Information</h2>
                    <p>Name: {purchaseDetails.userName}</p>
                    <p>Email: {purchaseDetails.userEmail}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Purchase Information</h2>
                    <p>Transaction ID: {purchaseDetails.transactionId}</p>
                    <p>Date: {new Date(purchaseDetails.date).toLocaleDateString()}</p>
                    <table className="table-auto w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">Item</th>
                                <th className="px-4 py-2 border">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseDetails.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{item.name}</td>
                                    <td className="border px-4 py-2 text-center">{item.price} tk</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-around">
                        <h3></h3>
                        <h3 className="text-xl font-semibold mt-2 ml-52">Total : <span className="ml-10">{purchaseDetails.totalPrice} tk</span></h3>
                    </div>
                </div>
                <ReactToPrint
                    trigger={() => <div className="flex justify-center"><button className="btn btn-accent text-white mt-4">Print/Download Invoice</button></div>}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    );
};

export default Invoice;