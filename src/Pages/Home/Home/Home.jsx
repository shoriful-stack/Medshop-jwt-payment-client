import { useLoaderData } from "react-router-dom";
import MedicinesCard from "../../../Components/MedicinesCard";


const Home = () => {
    const medicines = useLoaderData();
    const firstSixMedicines = medicines.slice(0, 6);
    return (
        <div>
            {/* category wise medicine */}
            <div className="lg:my-12 p-2">
            <h1 className="lg:text-5xl text-3xl font-bold text-center lg:mb-8 mb-2">Top Picks in Each Medicine <br /> Category</h1>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 lg:gap-8 gap-2 mb-12'>
                {
                    firstSixMedicines.map(medicines => <MedicinesCard
                        key={medicines._id}
                        medicines={medicines}
                    ></MedicinesCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;