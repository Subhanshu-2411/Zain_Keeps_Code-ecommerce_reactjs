import React from "react"
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from "react-icons/ri";
import {BsArrowRight} from "react-icons/bs";

const Hero = () => {
    return (
        <div className={css.container}>
            <div className={css.h_sides}>
                <span className={text1}>Skin Protection Cream</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>{" "}Seedily Say has suitable disposal and boy. Exercise Joy Man Children</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}>
                </div>
                <img src={HeroImg} alt="" width={600}/>
                <div className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Sign Up Offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>100k</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero