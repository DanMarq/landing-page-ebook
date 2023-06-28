import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardSlider from "./CardSlider";


export default function Slider() {
    return(
        <div className="pt-5">
                    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className=""
        pagination={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30
              }
        }}
        
    >
            <SwiperSlide>
                    <CardSlider nome="Um Nome 2" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula nunc, semper quis orci eget, facilisis semper est. Integer ultricies laoreet viverra." imagem="https://placehold.co/286x180" />
            </SwiperSlide>

            <SwiperSlide>
                    <CardSlider nome="Um Nome 2" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula nunc, semper quis orci eget, facilisis semper est. Integer ultricies laoreet viverra." imagem="https://placehold.co/286x180" />
            </SwiperSlide>

            <SwiperSlide>
                    <CardSlider nome="Um Nome 2" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula nunc, semper quis orci eget, facilisis semper est. Integer ultricies laoreet viverra." imagem="https://placehold.co/286x180" />
            </SwiperSlide>

            <SwiperSlide>
                <CardSlider nome="Um Nome 2" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula nunc, semper quis orci eget, facilisis semper est. Integer ultricies laoreet viverra." imagem="https://placehold.co/286x180" />
            </SwiperSlide>
            
        </Swiper>
        </div>
    )
}