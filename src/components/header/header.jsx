import {
  HeaderTitle,
  HeaderWrapper,
  LoginText,
  LoginButton,
  HeaderSubWrapper,
  UserHeaderWrapper,
  UserProfileIcon,
  CreateBtn,
  WorkspaceButton,
  BtnIcon,
} from "./headerElements";
import ProfileIcon from "../../assets/profile.png";
import DownArrow from "../../assets/down-arrow.png";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      <HeaderWrapper>
        <HeaderSubWrapper>
          <HeaderTitle>Ensemble</HeaderTitle>
          {auth ? (
            <UserHeaderWrapper>
              <WorkspaceButton>
                Workspaces
                <BtnIcon src={DownArrow} />
              </WorkspaceButton>
              <CreateBtn>
                <LoginText>Create +</LoginText>
              </CreateBtn>
              <UserProfileIcon src={ProfileIcon} />
            </UserHeaderWrapper>
          ) : (
            <LoginButton>
              <LoginText>Login</LoginText>
            </LoginButton>
          )}
        </HeaderSubWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
