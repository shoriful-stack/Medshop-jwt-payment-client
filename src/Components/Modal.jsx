import { useState } from "react";


const Modal = ({ showModal, setShowModal, addMedicine }) => {
    const [formData, setFormData] = useState({
        name: '',
        sellerEmail: "",
        description: '',
        image: '',
        category: '',
        company: '',
        mass_unit: 'Mg',
        price_per_unit: '',
        discount_percentage: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMedicine(formData);
        setShowModal(false);
    };

    return (
        showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded shadow-lg w-1/3">
                    <h2 className="text-xl mb-4">Add Medicine</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Item Name</label>
                            <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Seller Email</label>
                            <input name="sellerEmail" value={formData.sellerEmail} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Short Description</label>
                            <input name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Image URL</label>
                            <input name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Category</label>
                            <input name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Company</label>
                            <input name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Mass Unit</label>
                            <select name="mass_unit" value={formData.mass_unit} onChange={handleChange} className="w-full p-2 border rounded">
                                <option value="Mg">Mg</option>
                                <option value="ML">ML</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Per Unit Price</label>
                            <input name="price_per_unit" value={formData.price_per_unit} onChange={handleChange} className="w-full p-2 border rounded" type="number" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Discount Percentage</label>
                            <input name="discount_percentage" value={formData.discount_percentage} onChange={handleChange} className="w-full p-2 border rounded" type="number" />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="mr-4 bg-gray-500 text-white p-2 rounded" onClick={() => setShowModal(false)}>Cancel</button>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Medicine</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default Modal;

