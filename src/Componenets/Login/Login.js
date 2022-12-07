import React, {useState } from 'react'
import "./Login.css"
import hero_image from "../../assets/hero_image.png"
import { Link,useNavigate } from "react-router-dom"
import Headers from "../Header/Header"
import Footer from "../Footer/Footer"
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"


function Login() {

    const user = useSelector((state) => {return state});
    const dispatch = useDispatch()
    

    console.log(user);
    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const baseUrl = "http://localhost:3001"
    const Navigate = useNavigate()


    const loginSubmit = async(e)=>{
        e.preventDefault();
        try{
        const {data}= await axios.post(baseUrl+"/login",{
            email:email,
            password:password
     },
        {
            header:{
                "Content-Type":"application/json"
            }
        }
        )
       
        console.log(data.user);
        dispatch({
            type:"LOGGEDIN",
            payload:data.user

        })
        Navigate('/')
    }catch(err){
        console.log(err);
    }

       
      

    }
    return (
    <div>
     <Headers/>
        <div className="hero-login">
       
            <div className="right-login">
                <div className="img-div">
                    <img src={hero_image} alt=""/>
                </div>
                <form action="" className="login-form" onSubmit={loginSubmit}>

                    <label htmlFor="">Email</label>
                    <input 
                    type="text" 
                    name="email"
                    value={email}
                    onChange = {(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" 
                    name = "password"
                    value = {password}
                    onChange = {(e)=>{
                        setPassword(e.target.value)
                    }}
                    
                    />
                    <button className="l-btn">LOG IN</button>
                    <div>
                        <Link to={`/signup`} style={{textDecoration:"none",color:"var(--orange)"}}>Sign up</Link>
                    </div>

                </form>
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default Login
