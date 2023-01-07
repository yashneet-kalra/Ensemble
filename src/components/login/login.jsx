import {
  LoginContainer,
  LoginForm,
  LoginFormWrapper,
  LoginImage,
  Label,
  LoginWrapper,
  FormInput,
  InputWrapper,
  InputSelect,
  InputOptions,
  LoginButton,
} from "./loginElements";
// import Collaborate2 from "../../assets/collaborate2.png";
import { useContext, useRef, useState } from "react";
import { AuthContext, NotificationPopUpContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
// import Modal from "../modal/modal";
import HandleSignUp from "../../hooks/authentication/handleSignup";
import HandleLogin from "../../hooks/authentication/handleLogin";
import PopUp from "../notificationPopUp/notificationPopUp";
import {
  createCookie,
  deleteCookie,
  getCookies,
} from "../../hooks/randomStuff/randomStuff";

const Login = () => {
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  const LoginEmailRef = useRef();
  const LoginPassRef = useRef();
  const SignupNameRef = useRef();
  const SignupEmailRef = useRef();
  const SignupPasswordRef = useRef();
  const SignupSecQuestionRef = useRef();
  const SignupSecAnswerRef = useRef();
  // createCookie({name: "email", value:"test4@gmail.com", validDays: 30 })
  // createCookie({name: "name", value:"test4", validDays: 30 })
  // createCookie({name: "test", value:"test", validDays: 30 })
  // deleteCookie({name: "test"})
  //  .log(getCookies({name: "email"}))
  return (
    <>
      {/* {modalData && <Modal data={modalData} setState={setModalData} />} */}
      <PopUp response={showNotification} />
      <LoginContainer>
        <LoginWrapper>
          {/* <LoginImage src={Collaborate2} /> */}
          <LoginFormWrapper>
            {/* SIGNUP FORM  */}
            <LoginForm style={{ marginLeft: show ? "-20rem" : "0" }}>
              <InputWrapper style={{ textAlign: "center" }}>
                <Label>Already have an account?</Label>
                <LoginButton
                  style={{ left: 0, marginTop: "1%" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  Login
                </LoginButton>
              </InputWrapper>
              <InputWrapper>
                <Label>Username</Label>
                <FormInput
                  type={"text"}
                  placeholder="Enter your name"
                  ref={SignupNameRef}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>E-mail</Label>
                <FormInput
                  type={"email"}
                  placeholder="Enter your email"
                  ref={SignupEmailRef}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Password</Label>
                <FormInput
                  type={"password"}
                  placeholder="Enter your password"
                  ref={SignupPasswordRef}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Security question</Label>
                <InputSelect
                  defaultValue="Security Question"
                  ref={SignupSecQuestionRef}
                >
                  <InputOptions
                    value="Security Question"
                    disabled
                    style={{ display: "none" }}
                  >
                    Security Question
                  </InputOptions>
                  <InputOptions>Favourite Food</InputOptions>
                  <InputOptions>Favourite Show</InputOptions>
                  <InputOptions>Favourite Movie</InputOptions>
                  <InputOptions>Favourite Picnic Spot</InputOptions>
                </InputSelect>
              </InputWrapper>
              <InputWrapper>
                <Label>Answer</Label>
                <FormInput
                  type={"password"}
                  placeholder="Enter your answer"
                  ref={SignupSecAnswerRef}
                />
              </InputWrapper>
              <LoginButton
                onClick={async (e) => {
                  e.preventDefault();
                  var response = await HandleSignUp(
                    SignupNameRef.current.value,
                    SignupEmailRef.current.value,
                    SignupPasswordRef.current.value,
                    SignupSecQuestionRef.current.value,
                    SignupSecAnswerRef.current.value.toUpperCase()
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
                    const LoginStatus = await HandleLogin(
                      getCookies({ name: "email" }),
                      getCookies({ name: "pass" })
                    );
                    if (LoginStatus.status === 200) {
                      deleteCookie({ name: "email" });
                      deleteCookie({ name: "pass" });
                      createCookie({
                        name: "userName",
                        value: LoginStatus.username,
                        validDays: 30,
                      });
                      createCookie({
                        name: "uuid",
                        value: LoginStatus.uid,
                        validDays: 30,
                      });
                      setAuth(LoginStatus);
                      navigate("/workspace");
                    }
                  }
                }}
              >
                Signup
              </LoginButton>
            </LoginForm>

            {/* LOGIN FORM  */}
            {/* <LoginForm style={{display: show ? "block": "none"}}> */}
            <LoginForm style={{ margin: "auto 0" }}>
              <InputWrapper style={{ textAlign: "center" }}>
                <Label>Don't have an account?</Label> <br />
                <LoginButton
                  style={{ left: 0, marginTop: "2%" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  Signup
                </LoginButton>
              </InputWrapper>
              <InputWrapper style={{ marginTop: "10%" }}>
                <Label>E-mail</Label>
                <FormInput
                  type={"email"}
                  placeholder="Enter your Email"
                  ref={LoginEmailRef}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Password</Label>
                <FormInput
                  type={"password"}
                  placeholder="Enter your password"
                  ref={LoginPassRef}
                />
              </InputWrapper>
              <LoginButton
                style={{ marginTop: "10%" }}
                onClick={async (e) => {
                  e.preventDefault();
                  var response = await HandleLogin(
                    LoginEmailRef.current.value,
                    LoginPassRef.current.value
                  );
                  // setModalData(response);
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
                      navigate("/workspace");
                    }, 1300);
                  }
                }}
              >
                Login
              </LoginButton>
            </LoginForm>
          </LoginFormWrapper>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
