
const ManageAdvertise = () => {
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="lg:text-4xl text-3xl font-bold">Manage Medicines for Advertisement</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Medicine Image</th>
                            <th>Medicine Name</th>
                            <th>Description</th>
                            <th>Seller Email</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://i.ibb.co/23mMjdS/57ed83c6b0ef977f298b8e41.webp" alt="" className="w-16 h-16" /></td>
                            <td>Olysio</td>
                            <td>Olysio (simeprevir) is an antiviral medication used in combination with other drugs to treat chronic hepatitis C virus (HCV) infection.</td>
                            <td>syrup@gmail.com</td>
                            <td>
                                <button
                                    className='btn-error btn text-white'
                                >
                                    Remove From Slide
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://i.ibb.co/TmWVPJG/hepatitis-c-drug.jpg" alt="" className="w-16 h-16" /></td>
                            <td>Safovir C</td>
                            <td>Safovir C is an antiviral medication primarily used to treat chronic hepatitis B and C infections.</td>
                            <td>syrup@gmail.com</td>
                            <td>
                                <button
                                    className='btn-error btn text-white'
                                >
                                    Remove From Slide
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://i.ibb.co/YPC9tP0/25TH-MED.jpg" alt="" className="w-16 h-16" /></td>
                            <td>Onasemonge AB</td>
                            <td>Onasemonge AB is an antibiotic medication used to treat a variety of bacterial infections.</td>
                            <td>syrup@gmail.com</td>
                            <td>
                                <button
                                    className='btn-error btn text-white'
                                >
                                    Remove From Slide
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAdvertise;