import 'swiper/css';
import 'swiper/css/pagination';
import Marquee from 'react-fast-marquee';
import 'animate.css';

const ProductCategories = () => {
    return (
        <section>
            <h1 className='lg:text-5xl text-3xl font-bold lg:my-10 p-3 mb-3 text-center animate__animated animate__bounce'>Product Categories</h1>
            <Marquee>
                    <div className="bg-white shadow-lg rounded-md w-72 lg:mx-5 mx-4 lg:mb-12 mb-3">
                        <figure><img src="" alt="car!" className='w-full h-28' /></figure>
                        <div className="bg-[#4ecdc4] dark:text-white">
                            <h2 className="font-bold lg:text-2xl text-center">Bextram Kids</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-md w-72 lg:mx-5 mx-4 lg:mb-12 mb-3">
                        <figure><img src="" alt="car!" className='w-full h-28' /></figure>
                        <div className="bg-[#4ecdc4] dark:text-white">
                            <h2 className="font-bold lg:text-2xl text-center">NovoMix 30</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-md w-72 lg:mx-5 mx-4 lg:mb-12 mb-3">
                        <figure><img src="" alt="car!" className='w-full h-28' /></figure>
                        <div className="bg-[#4ecdc4] dark:text-white">
                            <h2 className="font-bold lg:text-2xl text-center">Cetirizine 10mg</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-md w-72 lg:mx-5 mx-4 lg:mb-12 mb-3">
                        <div><img src="" alt="car!" className='w-full h-28' /></div>
                        <div className="bg-[#4ecdc4] dark:text-white">
                            <h2 className="font-bold lg:text-2xl text-center">Zimax 250mg</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-md w-72 lg:mx-5 mx-4 lg:mb-12 mb-3">
                        <figure><img src="" alt="car!" className='w-full h-28' /></figure>
                        <div className="bg-[#4ecdc4] dark:text-white">
                            <h2 className="font-bold lg:text-2xl text-center">Ceftriaxone</h2>
                        </div>
                    </div>
            </Marquee>
        </section>
    );
};

export default ProductCategories;