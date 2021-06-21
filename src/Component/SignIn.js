import React,{useState} from 'react'
import '../CSS/SignIn.css'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function SignIn() {
    const [form,setForm] = useState({email:'',password:''});
    const history = useHistory()
    const dispatch = useDispatch()

    const userData = useSelector(state=>state.signupreducer)
    const handleChange = (event)=>{
        setForm((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const auth = userData.find(v=>v.email === form.email && v.password === form.password)
        if(auth)
        {
            dispatch({type:'signIn',payload:{
                id:auth.userId,
                email:form.email.toString(),
                password:form.password.toString(),
                logedIn:true
            }})
            history.push("/")
        }
        else
        {
            alert("Please Enter Correct Email And Password")
            history.push('/signIn')
        }
        setForm({email:'',password:''})   
    }
    
    return (
            <div className="row" id="row_signin">
                <div className="col-ms-12" id="signin_header">
                    <h1>Sign In</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="col-12" id="input_sign_email">
                        Email: <input className="sign_email" type="email"  name="email" value={form.email} onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="col-12" id="input_sign_password">
                        Padssword: <input className="sign_password" type="password" value={form.password} name="password"  onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="col-12" id="input_sign">
                        <button className="signin_button" type="submit">Sign In</button>
                        <button className="signup_button" onClick={()=>{history.push('/SignUp')}}>Sign Up</button>
                    </div>
                </form>
            </div>
    )
}
