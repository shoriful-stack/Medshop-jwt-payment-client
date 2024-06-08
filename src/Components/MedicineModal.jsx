

const MedicineModal = ({isOpen, onClose, medicine}) => {
    if(!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">{medicine.name}</h2>
                <img src={medicine.image} alt={medicine.name} className="w-1/2 h-56 mx-auto bg-cover mb-4" />
                <p><strong>{medicine.company}</strong></p>
                <p><strong>Price:</strong> {medicine.price_per_unit}</p>
                <p><strong>Quantity:</strong> {medicine.quantity}</p>
                <p><strong>Description:</strong> {medicine.description}</p>
                <p><strong>Company:</strong> {medicine.company}</p>
                <button className="mt-4 btn bg-neutral w-full mx-auto text-white" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default MedicineModal;