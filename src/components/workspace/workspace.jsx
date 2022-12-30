import { useContext, useEffect } from "react";
import { WorkspaceArrayContext, AuthContext, NotificationPopUpContext, UpdateContext } from "../../context/context";
import GetWorkspaces from "../../hooks/workspace/getWorkspace";
import {getCookies} from "../../hooks/randomStuff/randomStuff";
import WorkSpaceAdder from "./workspaceElements/workspaceAdder";
import PopUp from "../notificationPopUp/notificationPopUp";
import WorkSpaceBox from "./workspaceElements/workSpaceBox";
import styled from "styled-components";
const WorkSpaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 97%;
  margin: 3% auto;
`
const WorkSpace = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { showNotification, setShowNotification } = useContext(NotificationPopUpContext)
  const { workspaceArray, setWorkspaceArray } = useContext(
    WorkspaceArrayContext
  );
  const {update, setUpdate} = useContext(UpdateContext)
  useEffect(() => {
    (async () => {
      const response = await GetWorkspaces(
        auth ? auth.uid : getCookies({ name: "uuid" })
      );
      response.status === 200 ? setWorkspaceArray(response) : setWorkspaceArray(false);
    })()
  },[update]);
  return (
    <>
    <PopUp response={showNotification} />
    <WorkSpaceContainer>
    {workspaceArray && workspaceArray?.data?.map((item)=>{
      return(
        <>
        <WorkSpaceBox data={item} />
        </>
      )
    })}
    </WorkSpaceContainer>
    
    {/* <WorkSpaceAdder type={"update"}/> */}
    </>
  )
};

export default WorkSpace;
