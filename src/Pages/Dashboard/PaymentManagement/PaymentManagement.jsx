import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";


const PaymentManagement = () => {
    const [payments, setPayments] = useState([]);
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    useEffect(() => {
        axiosSecure.get('/payments')
            .then(response => {
                setPayments(response.data);
            })
            .catch(error => {
                console.error('Error fetching payments:', error);
            });
    }, [axiosSecure]);

    const handleAcceptPayment = (id) => {
        axiosSecure.patch(`/payments/${id}`)
            .then(response => {
                console.log(response)
                setPayments(payments.map(payment =>
                    payment._id === id ? { ...payment, status: 'paid' } : payment
                ));
                queryClient.invalidateQueries(['admin-stats']);
            })
            .catch(error => {
                console.error('Error updating payment status:', error);
            });
    };
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-3">Payment Management</h1>
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment._id}>
                            <td>{payment.email}</td>
                            <td>{payment.price}</td>
                            <td>{payment.status}</td>
                            <td>
                                {payment.status === 'pending' && (
                                    <button className="btn btn-accent text-white" onClick={() => handleAcceptPayment(payment._id)}>
                                        Accept 
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentManagement;