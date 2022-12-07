import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion";
import NumberCounter from "number-counter"
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"



const Hero = () => {
    const user = useSelector((state)=>{
        return state.user
    })
    const dispatch = useDispatch()
    console.log(user );
    const logout = ()=>{
        dispatch({
            type:"LOGGEDOUT",
        })
    }


    const transition = { type: "spring", duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (

        <div className="hero">
            <div className="blur hero_blur"> </div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "120px" : "238px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }} >

                    </motion.div>
                    <span>The best fitness club in the town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your body and live up your life to
                     fullest.</span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={30} delay='4' preFix="+" /></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <div className="btn">Get started</div>
                    <div className="btn">Learn more</div>
                </div>
            </div>
            <div className="right-h">
                
               {user ? 
               <div className="btn-div">
                    <p className = "btn">{user.fname}</p>
                    <Link to={`/`} className="btn" style={{textDecoration:"none"}} onClick ={logout}>Log out</Link>
               </div>
               :
               <div className="btn-div">
               <Link to={`/login`} className="btn" style={{textDecoration:"none"}} >Log in</Link>
               <Link to={`/signup`} className="btn" style={{textDecoration:"none"}} >Sign up</Link>
               </div>
               }
              
              
                <motion.div className="heart-rate"
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "10rem" }}
                    transition={transition}
                >
                    <img src={heart} alt="" />
                    <span>Heart rate</span><span>116 bpm</span>

                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: "21rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />

                <motion.div className="calories"
                    initial={{ right: "30rem" }}
                    whileInView={{ right: "48rem" }}
                    transition={transition}
                >
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcl</span>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Hero
