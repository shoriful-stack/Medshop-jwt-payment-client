import { FaBook, FaMoneyCheckAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";


const SellerHome = () => {
    const {user} = useAuth();
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
                    <div className="stat-value">2495</div>
                    <div className="stat-desc">June 1st - July 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-figure mt-2">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="stat-title">Medicines</div>
                    <div className="stat-value">5</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">3</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure">
                        <FaMoneyCheckAlt className='text-3xl mt-3'></FaMoneyCheckAlt>
                    </div>
                    <div className="stat-title">Total Paid</div>
                    <div className="stat-value">735</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Pending</div>
                    <div className="stat-value">1760 Tk</div>
                </div>
            </div>
        </div>
    );
};

export default SellerHome;