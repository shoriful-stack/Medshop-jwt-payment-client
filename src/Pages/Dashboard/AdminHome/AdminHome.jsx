import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        }
    });

    const { data: payments = [] } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
            const res = await axiosSecure.get("/payments");
            return res.data;
        }
    });
    const totalPaid = payments
        .filter(payment => payment.status === "paid")
        .reduce((sum, payment) => sum + payment.price, 0);

    const totalPending = payments
        .filter(payment => payment.status === "pending")
        .reduce((sum, payment) => sum + payment.price, 0);

    return (
        <div>
            <h2 className="lg:text-4xl text-2xl font-bold mb-3">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure font-extrabold text-3xl mt-2">
                        Tk
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats?.revenue}</div>
                    <div className="stat-desc">June 1st - July 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>


                <div className="stat">
                    <div className="stat-figure mt-2">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="stat-title">Medicines</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure">
                        <FaMoneyCheckAlt className='text-3xl mt-3'></FaMoneyCheckAlt>
                    </div>
                    <div className="stat-title">Total Paid</div>
                    <div className="stat-value">{totalPaid}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Pending</div>
                    <div className="stat-value">{totalPending} Tk</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;