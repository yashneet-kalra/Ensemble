import React, {useState, useRef, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import log from '../assets/log.svg'
import {Link, Navigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HandleLogin from '../hooks/authentication/handleLogin';
import { AuthContext, NotificationPopUpContext } from "../context/context";
import {
  createCookie,
  deleteCookie,
  getCookies
} from "../hooks/randomStuff/randomStuff";

const Login = () => {
  const { showNotification, setShowNotification } = useContext( NotificationPopUpContext);

  const {auth, setAuth} = useContext(AuthContext)
  let navigate = useNavigate();

  const [values,setValues] = useState({
    email:"",
    password:"",
  });
  
  const LoginEmailRef = useRef();
  const LoginPassRef = useRef();

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  }

  useEffect (() => {
    if(localStorage.getItem('first-app-user')){
      Navigate('/')
    }
  }, []) 

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){

      const{password, email} = values;
      const{data} = await axios.post(loginRoute, {
        email, password, 
      });
    }
  }

  function handleValidation() {
    const{password, email} = values;

    if(email === "" && password === ""){
      toast.error("Email and Password is required!", toastOptions);
      return false;
    }

    if(password === ""){
      toast.error("Password is required!", toastOptions);
      return false;
    } 

    if(email === ""){
      toast.error("Email is required!", toastOptions);
      return false;
    }

    return true;
  }

  const handleChange = (event) => {
    setValues ({...values, [event.target.name]: event.target.value});
  }

  const handleLogin = 
    async (e) => {
      e.preventDefault();
      var response = await HandleLogin(
        LoginEmailRef.current.value,
        LoginPassRef.current.value
      );

      setShowNotification(response);
      if (response.status === 200) {
        setAuth(response);
        createCookie({
          name: "userName",
          value: response.username,
          validDays: 30,
        });
        createCookie({
          name: "uuid",
          value: response.uid,
          validDays: 30,
        });
        setTimeout(() => {
          navigate('/workspace')
        }, 1300)
      }
    }

  return (
     <> 
      <Container> 
        <p>  </p>
        <form onSubmit = {(event) => handleSubmit(event)}>
          <div class = "head">
              <div class = "h1"> ENSEMBLE </div>
              <div class = "h3"> Remember everything important. </div>
          </div>
          <input type = "email" placeholder = "email" ref = {LoginEmailRef} name = "email" onChange = {(e) => handleChange(e)}/> 
          <input type = "password" placeholder = "Password" ref = {LoginPassRef} name = "password" onChange = {(e) => handleChange(e)}/>

          <button type = "submit" onClick = {handleLogin}> Login </button>

          <span> Don't have an account? <Link to = "/Register"> Create one. </Link>  </span>
        </form>
     </Container>
     <ToastContainer/>
    </>
  );
}

const Container = styled.div`
  background:url(${log});
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;

  .head{
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .h1{
      font-family: Rubik;
      font-weight: bold;
      font-size: 3rem;
      padding: 1rem;
    }

    .h3{
      font-size: 1.3rem;
      font-family: Rubik;
    }
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    border-radius: 2rem;
    padding: 3rem 5rem;
    margin-bottom: 40px;

    input{
      font-family: Rubik;
      font-size: 1rem;
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid;
      border-radius: 0.4rem;
      color: grey;
      &:focus{
        border: 0.1rem solid #ffaf00;
        outline: none;
      }
    }

    button{
      font-family: Rubik;
      font-size: 1rem;
      background-color: #ffaf00;
      color: #010101;
      margin-top: 1rem;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      transition: 0.5s ease-in-out;
      &:hover{
        background-color: #010101;
        color: white;
      }
    }

    span{
      padding: 2rem;
      font-family: Rubik;
      font-size: 1.2rem;

      a{
        color: #ffaf00;
      }
    }
  }
`

export default Login;

