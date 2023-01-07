import styled, { keyframes } from "styled-components";

export const InputLabel = styled.p`
  color: ${(props) => (props.color ? "#5e6c84" : "#172b4d")};
  font-family: "Rubik";
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  margin-top: ${(props) => props.top};
  font-size: ${(props) => (props.size ? props.size : "")};
`;
export const InputField = styled.input`
  width: ${(props) => (props.size ? props.size : "100%")};
  color: #172b4d;
  margin-top: ${(props) => (props.top ? props.top : "2%")};
  font-size: 0.89rem;
  font-family: "Roboto";
  background: #ebecf0;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  &:focus {
    background: white;
  }
`;

export const Button = styled.button`
  box-shadow: none;
  background: ${(props) => (props.color ? "#5e6c84" : "#0079bf")};
  background: ${(props) =>
    props.disabled ? "#5e6c84" : props.color ? "#5e6c84" : "#0079bf"};
  color: ${(props) => (props.color ? "var(--dark-blue)" : "var(--white)")};
  width: ${(props) => (props.size ? props.size : "100%")};
  padding: 0.375rem 0.75rem;
  font-family: "Rubik";
  text-align: center;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  margin-top: ${(props) => props.top};
  margin-bottom: 5%;
  white-space: normal;
  text-decoration: none;
  border-radius: 0.188rem;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5rem;
`;

const Rotate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  margin: 0 auto;
  width: ${(props) => (props.size ? props.size : "1.5rem")};
  height: ${(props) => (props.size ? props.size : "1.5rem")};
  border-radius: 50%;
  display: block;
  position: relative;
  border: 5px solid;
  border-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  animation: ${Rotate} 1s linear infinite;
`;