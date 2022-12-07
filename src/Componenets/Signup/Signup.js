import React,{useState} from 'react'
import "./Signup.css"
import { Link } from "react-router-dom"
import hero_image from "../../assets/hero_image.png"
import Headers from "../Header/Header"
import Footer from "../Footer/Footer"
import axios from "axios"
import {useNavigate} from "react-router-dom"


function Signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [mobile,setMobile] = useState()
    const [password,setPassword] = useState()
    const Navigate = useNavigate();
    const baseUrl = "http://localhost:3001"
    const dosignup = async(e)=>{
        e.preventDefault();

        try{

            const data =  await axios.post(baseUrl+"/signup",
            {
                fname:name,
                email:email,
                phone:mobile,
                newpassword:password
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(data);
            Navigate('/login')

            
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
        <Headers/>
        <div className="hero-login">
            <div className="right-login">
                <div className="img-div">
                    <img src={hero_image} alt="" />
                </div>
                <form action="" className="login-form" onSubmit = {dosignup}>
                    <label htmlFor="">Full Name</label>
                    <input 
                    type="text" 
                    name="fname"
                    value={name}
                    onChange = {(e)=>{
                        setName(e.target.value)
                    }}
                    />
                    <label htmlFor="">Email</label>
                    <input 
                    type="text" 
                    name="email"
                    value = {email}
                    onChange = {(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <label htmlFor="">Mobile</label>
                    <input 
                    type="text" 
                    name="phone"
                    value={mobile}
                    onChange = {(e)=>{
                        setMobile(e.target.value)
                    }}
                    />
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange = {(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                    <button className="l-btn">Sign up</button>
                    <div>
                        <Link to={`/login`} style={{textDecoration:"none",color:"var(--orange)"}}>Log in</Link>
                    </div>

                </form>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Signup
