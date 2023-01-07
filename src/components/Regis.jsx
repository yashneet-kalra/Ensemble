import React, {useState, useEffect, useRef, useContext} from 'react';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import log from '../assets/log.svg'
import {Link, Navigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { AuthContext, NotificationPopUpContext } from "../context/context";
import HandleLogin from '../hooks/authentication/handleLogin';
import {
  createCookie,
  deleteCookie,
  getCookies
} from "../hooks/randomStuff/randomStuff";

const Regis = () => {
  const { showNotification, setShowNotification } = useContext( NotificationPopUpContext);

  const {auth, setAuth} = useContext(AuthContext)
  let navigate = useNavigate();

  const SignupNameRef = useRef();
  const SignupEmailRef = useRef();
  const SignupPasswordRef = useRef();

  const [values, setValues] = useState({
    username: "",
    email: "", 
    password: "",
    confirmPassword: "",
  });

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
  }, [Navigate]) 

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){

      const{password, username, email} = values;
      const{data} = await axios.post(RegisterRoute, {
        username, password, email, 
      });

    }
  }

  function handleValidation() {
    const{password, username, email, confirmPassword} = values;

    if(username === "" && password === "" && email === ""){
      toast.error("Enter all the details!", toastOptions);
      return false;
    }
    
    else if(password !== confirmPassword){
      toast.error("Password doesn't match. Enter again!", toastOptions);
      return false;
    }

    else if(password === "" && email === ""){
      toast.error("Password and email is required!", toastOptions);
      return false;
    } 

    else if(email === "" && username === ""){
      toast.error("Email and username is required!", toastOptions);
      return false;
    }

    else if(username === "" && password === ""){
      toast.error("Username and password is required!", toastOptions);
      return false;
    }

    return true;
  }

  const handleChange = (event) => {
    setValues ({...values, [event.target.name]: event.target.value});
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    var response = await HandleSignup(
      SignupNameRef.current.value,
      SignupEmailRef.current.value,
      SignupPasswordRef.current.value,
    );

    setShowNotification(response);
    if (response.status === 200) {
      createCookie({
        name: "email",
        value: SignupEmailRef.current.value,
        validDays: 30,
      });
      createCookie({
        name: "pass",
        value: SignupPasswordRef.current.value,
        validDays: 30,
      });
    }

      const LoginStatus = await HandleLogin(getCookies({name: "email"}), getCookies({name:"pass"}))
      
      if(LoginStatus.status === 200){
        deleteCookie({name: "email"})
        deleteCookie({name: "pass"})
        createCookie({name:  "userName", value: LoginStatus.username, validDays: 30})
        createCookie({name:  "uuid", value: LoginStatus.uid, validDays: 30})
        setAuth(LoginStatus);
        navigate("/Boards");
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
          <input type = "text" placeholder = "Username" name = "username" onChange = {(e) => handleChange(e)}/> 
          <input type = "email" placeholder = "E-mail" name = "email" onChange = {(e) => handleChange(e)}/> 
          <input type = "password" placeholder = "Password" name = "password" onChange = {(e) => handleChange(e)}/>
          <input type = "password" placeholder = "Confirm Password" name = "confirmPassword" onChange = {(e) => handleChange(e)}/>

          <button type = "submit" onClick = {handleSignup}> Register </button>

          <span> Don't have an account? <Link to = "/"> Login. </Link>  </span>
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
    padding: 1rem 5rem;
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

export default Regis;


