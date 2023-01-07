import styled, { keyframes } from "styled-components";

export const BoardAdderModalBody = styled.div`
  position: absolute;
  width: 19rem;
  background: white;
  padding: 0.5rem;
  border-radius: 0.188rem;
  /* box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25); */
  box-shadow: 0 0 0 1px rgba(9, 30, 66, 0.08);
  margin: 2%;
`;
export const BoardAdderModalHeaderwrapper = styled.div``;

export const BoardAdderModalHeader = styled.p`
  color: #5e6c84;
  font-family: "Rubik";
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
`;
export const BoardsCloseButton = styled.div`
  transform: rotate(45deg);
  float: right;
  font-size: 2rem;
  color: #5e6c84;
  font-weight: 600;
  margin-top: -10px;
  cursor: pointer;
`;
export const BoardImageWrapper = styled.div`
  margin: 5% auto;
  width: 60%;
`;
export const BoardImage = styled.img`
  width: 100%;
`;

export const BoardInputWrapper = styled.div`
  margin-top: 7%;
`;
export const BoardInputLabel = styled.p`
  color: #5e6c84;
  font-family: "Rubik";
  font-weight: 550;
`;
export const BoardInputField = styled.input`
  width: 100%;
  color: #172b4d;
  margin-top: 2%;
  font-size: 0.875rem;
  font-family: "Roboto";
  background: #ebecf0;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  &:focus {
    background: white;
  }
`;

export const CreateButton = styled.button`
  z-index: 1;
  box-shadow: none;
  background: #0079bf;
  padding: 0.375rem 0.75rem;
  width: 100%;
  font-family: "Rubik";
  text-align: center;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  margin-top: 10%;
  margin-bottom: 5%;
  white-space: normal;
  text-decoration: none;
  border-radius: 0.188rem;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5rem;
  &::before {
    content: "";
    position: absolute;
    background: #0069a6;
    top: 0;
    left: -50px;
    width: 150%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    z-index: 0;
    transition: transform 700ms;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  &:active {
    margin-top: 10.3%;
    margin-bottom: 4.7%;
  }
`;
export const BtnText = styled.p`
  position: relative;
  z-index: 2;
  color: white;
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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: block;
  position: relative;
  border: 5px solid;
  border-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  animation: ${Rotate} 1s linear infinite;
`;
