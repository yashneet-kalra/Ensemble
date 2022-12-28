import styled from "styled-components";
import {
  BtnText,
  CreateButton,
} from "../boards/BoardsPopup/boardsAdderElements";

export const HeaderWrapper = styled.div`
  width: 100%;
  background: var(--mid-orange);
  max-height: 3rem;
  padding: 0.35rem 0.25rem;
  display: flex;
  align-items: center;
`;
export const HeaderSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin: 0 auto;
`;
export const HeaderTitle = styled.h1`
  font-family: "Roboto";
`;
export const LoginButton = styled(CreateButton)`
  width: 7rem;
  margin: 0;
  background: var(--darker-black);
  &::before {
    background: var(--mid-orange);
  }
  &:active {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const LoginText = styled(BtnText)``;

export const UserHeaderWrapper = styled.div`
  width: 40%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2%;
`
export const UserProfileIcon = styled.img`
  width: 2.5rem;
`
export const CreateBtn = styled(LoginButton)``

export const WorkspaceButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-family: 'Rubik';
`
export const BtnIcon = styled.img`
  width: 0.75rem;
  margin-left: 7px;
`