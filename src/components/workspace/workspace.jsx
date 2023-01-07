import { useContext, useEffect } from "react";
import {
  WorkspaceArrayContext,
  AuthContext,
  NotificationPopUpContext,
  UpdateContext,
} from "../../context/context";
import GetWorkspacesAndBoards from "../../hooks/workspace/getWorkspace&boards";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import PopUp from "../notificationPopUp/notificationPopUp";
import styled from "styled-components";
import WorkSpaceItem from "./workspaceElements/workSpaceItem/workSpaceItem";
import WorkSpaceAdder from "./workspaceElements/workspaceAdder/workspaceAdder";
import { WorkspaceContentsTitle } from "./workspaceElements/workspaceAdder/workspaceAdderElements";
import { InputLabel } from "../common/common";

const WorkSpaceContainer = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  width: 100%;
  /* margin: 3% auto; */
  margin-top: 2%;
  /* border: 1px solid black; */
`;
const Title = styled(WorkspaceContentsTitle)``;
const WorkspaceBody = styled.div`
  width: 100%;
  margin-top: 3%;
  padding-left: 2%;
`;
const WorkSpace = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { workspaceArray, setWorkspaceArray } = useContext(
    WorkspaceArrayContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  useEffect(() => {
    (async () => {
      const response = await GetWorkspacesAndBoards(
        auth ? auth.uid : getCookies({ name: "uuid" })
      );
      response.status === 200
        ? setWorkspaceArray(response)
        : setWorkspaceArray(false);
    })();
  }, [update]);
  return (
    <>
      <PopUp response={showNotification} />
      <WorkSpaceAdder />
      <WorkspaceBody>
        <Title>Your Workspaces</Title>
        <WorkSpaceContainer>
          {workspaceArray ? (
            <>
              {workspaceArray.data.length !== 0 ? (
                <>{workspaceArray?.data.map((item) => <WorkSpaceItem data={item} />)}</>
              ) : (
                <InputLabel top={"2%"}>
                  {console.log("block 2")}
                  You aren't a member of any workspaces yet.
                </InputLabel>
              )}
            </>
          ) : (
            <InputLabel top={"2%"}>
              {console.log("block 3")}
              You aren't a member of any workspaces yet.
            </InputLabel>
          )}
        </WorkSpaceContainer>
      </WorkspaceBody>
    </>
  );
};

export default WorkSpace;