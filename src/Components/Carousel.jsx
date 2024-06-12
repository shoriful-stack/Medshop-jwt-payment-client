// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../assets/images/57ed83c6b0ef977f298b8e41.webp';
import bgImg2 from '../assets/images/hepatitis_c_drug.avif';
import bgImg3 from '../assets/images/25TH-MED.jpeg';

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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={bgImg3} text='Onasemonge AB is an antibiotic medication used to treat a variety of bacterial infections.' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg2} text="Safovir C is an antiviral medication primarily used to treat chronic hepatitis B and C infections." />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg1} text="Olysio (simeprevir) is an antiviral medication used in combination with other drugs to treat chronic hepatitis C virus (HCV) infection." />
                </SwiperSlide>
            </Swiper>
        </>
    );
}