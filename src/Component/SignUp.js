import React,{useState} from 'react'
import '../CSS/SignUp.css'
import Button from '@material-ui/core/Button';
import {useDispatch,useSelector} from 'react-redux'
import nextId from 'random-int'
export default function SignUp() {
    const dispatch = useDispatch();
    const [data,setData] = useState({name:'',email:'',password:''})
    const handleChange=(event)=>{
        setData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }
    const userData = useSelector(state=>state.signupreducer)
    const handleSubmit =()=>{
        if(userData.some(user=>user.email===data.email))
        {
            alert(data.email + ' is alread register with us.')
        }
        else{
            dispatch({type:"signUp", payload:{
                userId:nextId(1,1000),
                name:data.name.toString(),
                email:data.email.toString(),
                password:data.password.toString()
            }})
        }
    }
    return (
        <div className="signup_container">
            <div className="signup_box">
                <div className="signup_header"><h2>Sign Up</h2></div>
                <div className="signup_input">
                    <div className="signup_name">
                        <label className="">Name </label>
                        <input type="text" value={data.name} name="name" onChange={handleChange}/>
                    </div>
                    <div className="signup_email">
                        <label className="label_email" >Email </label>
                        <input type="email" value={data.email} name="email" onChange={handleChange}/>
                    </div>
                    <div className="signup_name">
                        <label className="label_password">Password </label>
                        <input type="password" value={data.password} name="password" onChange={handleChange}/>
                    </div>
                    <div className="signup_btn">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
