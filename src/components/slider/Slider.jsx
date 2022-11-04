import React from "react"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation} from "swiper";
import {SliderProducts} from "../../data/products";
import './Slider.css'

const Slider = () => {
    return (
        <div className="s-container">
            <Swiper modules={[Pagination, Navigation]} navigation={true} className="mySwiper" loopFillGroupWithBlank={true} slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
                <SwiperSlide>
                    {SliderProducts.map(
                        (slide, i) => (
                        <SwiperSlide>
                            <div className="left-s">
                                <div className="name">
                                    <span>
                                        {slide.name}
                                    </span>
                                    <span>
                                        {slide.detail}
                                    </span>
                                </div>
                                <span>{slide.price}$</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={slide.img} alt="product" className="img-p"/>
                        </SwiperSlide>
                    ))}
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slider