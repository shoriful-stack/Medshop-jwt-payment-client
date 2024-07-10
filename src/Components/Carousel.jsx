// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../assets/images/injection.jpg';
import bgImg2 from '../assets/images/pharmacy.jpg';
import bgImg3 from '../assets/images/carts.jpg';

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide  image={bgImg2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide  image={bgImg3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg1} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}