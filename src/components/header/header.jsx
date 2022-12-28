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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let param = window.location.href;
  const [showHeader, setShowHeader] = useState(true);
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (param.includes("login")) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [param]);
  return (
    <>
      {showHeader && (
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
                <LoginText onClick={() => navigate("/login")}>Login</LoginText>
              </LoginButton>
            )}
          </HeaderSubWrapper>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
