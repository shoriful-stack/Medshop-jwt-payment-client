

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Marquee from 'react-fast-marquee';

const Discount = () => {
    return (
        <section>
            <h1 className='lg:text-5xl text-2xl font-bold lg:mb-12 p-3'>Get <span className='text-[#6ab1b3]'>20%</span> Discount on this products!!</h1>
            <Marquee>
                    <div className="card glass max-w-80 lg:mx-10 mx-4">
                        <figure><img src="https://i.ibb.co/j5Zb6jr/Bextram-Kids-Syrup-100-ml-Beximco-Pharmaceuticals-Ltd.webp" alt="car!" className='w-full h-44 lg:h-[350px]' /></figure>
                        <div className="card-body">
                            <h2 className="font-bold lg:text-2xl text-center">Bextram Kids</h2>
                        </div>
                    </div>
                    <div className="card glass max-w-80 lg:mx-10 mx-4">
                        <figure><img src="https://i.ibb.co/3fJGpy9/novomix-30-70-injection-805872026-i1-Mo2-X3p-Cd-U7phx-GCff-JJ6.webp" alt="car!" className='w-full h-44 lg:h-[350px]' /></figure>
                        <div className="card-body">
                            <h2 className="font-bold lg:text-2xl text-center">NovoMix 30</h2>
                        </div>
                    </div>
                    <div className="card glass max-w-80 lg:mx-10 mx-4">
                        <figure><img src="https://i.ibb.co/6sH7bx3/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-LXBfa-W1h-Z2-Vz-XC8z-ODY4-XC8z-ODY4-LUNld-G.jpg" alt="car!" className='w-full h-44 lg:h-[350px]' /></figure>
                        <div className="card-body">
                            <h2 className="font-bold lg:text-2xl text-center">Cetirizine 10mg</h2>
                        </div>
                    </div>
                    <div className="card glass max-w-80 lg:mx-10 mx-4">
                        <div><img src="https://i.ibb.co/Mg6xRGC/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-LXBfa-W1h-Z2-Vz-XC8y-MDgy-OVwv-Mj-A4-Mjktem.jpg" alt="car!" className='w-full h-44 lg:h-[350px]' /></div>
                        <div className="card-body">
                            <h2 className="font-bold lg:text-2xl text-center">Zimax 250mg</h2>
                        </div>
                    </div>
                    <div className="card glass max-w-80 lg:mx-10 mx-4">
                        <figure><img src="https://i.ibb.co/B4n2Xz3/ceftriaxone-sodium-1gm-intriax-1000-500x500.webp" alt="car!" className='w-full h-44 lg:h-[350px]' /></figure>
                        <div className="card-body">
                            <h2 className="font-bold lg:text-2xl text-center">Ceftriaxone</h2>
                        </div>
                    </div>
            </Marquee>
        </section>
    );
};

export default Discount;