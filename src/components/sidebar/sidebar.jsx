import {
  SidebarBody,
  SidebarIcon,
  SidebarOption,
  SidebarOptionsWrapper,
} from "./sidebarElements";
import BoardIcon from "../../assets/boardIcon.png";
import HomeIcon from "../../assets/waveIcon.png";
import { useContext, useEffect, useState } from "react";
import { WorkspaceArrayContext } from "../../context/context";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { workspaceArray, setWorkspaceArray } = useContext(
    WorkspaceArrayContext
    );
    useEffect(()=> {
    if(window.location.href.includes('workspace') || window.location.href.includes('list')){
      setShowSidebar(true)
    } else {
      setShowSidebar(false)
    }
  },[window.location.href])
  return (
    <>
      {showSidebar && (
        <SidebarBody>
          <SidebarOptionsWrapper>
            <SidebarOption>
              <SidebarIcon src={BoardIcon} />
              Boards
            </SidebarOption>
            <SidebarOption>
              <SidebarIcon src={HomeIcon} />
              Home
            </SidebarOption>
          </SidebarOptionsWrapper>
        </SidebarBody>
      )}
    </>
  );
};

export default Sidebar;
