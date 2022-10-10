import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import './Auth.css'
import Logo from '../../img/logo.png'
import { logIn, signUp } from '../../actions/AuthAction';

export const Auth = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state=>state.authReducer.loading)
    console.log(loading);
    const [isSignUp,setIsSignUp] = useState(true);
    const [data,setData]=useState({firstname:"",lastname:"",password:'',confirmpass:'',username:''});
    const [confirmpass,setConfirm] = useState(true)
    const handleChange = (e) =>{
        
        setData({...data,[e.target.name]:e.target.value})
    }
    const handelSubmit = (e) =>{
        e.preventDefault()
        if(isSignUp){
            data.password === data.confirmpass ? dispatch(signUp(data)):setConfirm(false)
        }else {
            dispatch(logIn(data))
        }
    }
    const resetForm = () =>{
        setConfirm(true);
        setData({firstname:"",lastname:"",password:'',confirmpass:'',username:''})
    }
  return (
    <div className="Auth">
        {/* left side with logo */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="WebName">
                <h1>Slaviks Media</h1>
                <h6>Explore my project</h6>
            </div>
        </div>
        {/* right side with auth form */}
        <div className="a-right">
            <form action="" className='infoForm authForm' onSubmit={handelSubmit} >
                <h3>{isSignUp ? "Sign Up":'Log In'}</h3>
                {isSignUp && (
                <div>
                    
                    <input type="text"placeholder='First name'className='info-input' name='firstname'
                    onChange={handleChange}
                    // required
                    value={data.firstname}
                    />
                    <input type="text"placeholder='Last name'className='info-input' name='lastname'
                     onChange={handleChange}
                     value={data.lastname}

                    //   required
                      />
                </div>
                )}
                <div>
                    <input type="text" className="info-input" name='username'
                    placeholder='Username'
                    onChange={handleChange}
                    value={data.username}

                    // required
                    />
                </div>
                <div>
                    <input type="password" className="info-input" name='password'
                    placeholder='Password'
                    onChange={handleChange}
                    value={data.password}

                    required/>
                    {isSignUp && (
                          <input type="password" className="info-input" name='confirmpass'
                          placeholder='Confirm password'
                          required
                          onChange={handleChange}
                          value={data.confirmpass}
                          />
                          

                    )}
                    
                </div>
                <span style={{display:confirmpass ? "none":'block',fontSize:'12px',color:'red',alignSelf:'flex-end',marginRight:'5px'}}>* Confirm passport are not same</span>
                <div>
                    <span onClick={()=>{setIsSignUp(prev=>!prev);resetForm()}} style={{fontSize:'13px',cursor:"pointer"}}>{isSignUp ?'Already have account? Log in now!':'Dont have an account? Create it now'}</span>
                </div>
                <button className='button info-button 'type='sumbit'disabled={loading}>{loading ?"loading...":isSignUp ? "Sign Up":"Log in"}</button>
            </form>
        </div>
    </div>
  )
}



