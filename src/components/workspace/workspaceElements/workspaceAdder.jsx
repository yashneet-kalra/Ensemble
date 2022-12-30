import styled, { keyframes } from "styled-components";
import {
  BoardAdderModalBody,
  BoardAdderModalHeader,
  BoardAdderModalHeaderwrapper,
  BoardImage,
  BoardImageWrapper,
  BoardInputField,
  BoardInputLabel,
  BoardInputWrapper,
  BoardsCloseButton,
  BtnText,
  CreateButton,
  Loader,
} from "../../boards/BoardsPopup/boardsAdderElements";
import {
  AuthContext,
  LoadingContext,
  NotificationPopUpContext,
  ShowWSAdderContext,
  UpdateContext,
} from "../../../context/context";
import Board from "../../../assets/board.jpg";
import { useContext, useRef, useState } from "react";
import AddWorkspace from "../../../hooks/workspace/addWorkspace";
import UpdateWorkspace from "../../../hooks/workspace/updateWorkspace";
import { getCookies } from "../../../hooks/randomStuff/randomStuff";
const Slide = keyframes`
  from {
    right: 5%;
  }
  to{
    right: -50%;
  }
`;
const WorkspaceAdderModalBody = styled(BoardAdderModalBody)`
  position: ${(props) => (props.type === "add" ? "absolute" : "relative")};
  right: ${(props) => (props.type === "add" ? "0%" : "-50%")};
  /* top: ${(props) => (props.show ? "2.5rem" : "-60%")}; */
  top: ${(props) =>
    props.type === "add" ? (props.show ? "2.5rem" : "-60%") : "-120%"};
  z-index: 2;
  transition: top 500ms;
  animation: ${Slide} 300ms ease-in-out;
`;
const WorkspaceModalHeaderWrapper = styled(BoardAdderModalHeaderwrapper)``;
const WorkspaceCloseButton = styled(BoardsCloseButton)``;
const WorkspaceAdderModalHeader = styled(BoardAdderModalHeader)``;
const WorkspaceImageWrapper = styled(BoardImageWrapper)``;
const WorkspaceImage = styled(BoardImage)``;
const WorkspaceInputWrapper = styled(BoardInputWrapper)``;
const WorkspaceInputLabel = styled(BoardInputLabel)``;
const WorkspaceInputField = styled(BoardInputField)``;
const WorkspaceCreateButton = styled(CreateButton)``;
const WorkspaceLoader = styled(Loader)``;
const WorkspaceBtnText = styled(BtnText)``;

const WorkSpaceAdder = ({ type, display, setDisplay, wuid }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { auth, setAuth } = useContext(AuthContext);
  const { update, setUpdate } = useContext(UpdateContext);
  const { showWorkspaceAdder, setShowWorkspaceAdder } =
    useContext(ShowWSAdderContext);
  const [show, setShow] = useState(false);
  const WorkspaceInputRef = useRef();
  return (
    <>
      <WorkspaceAdderModalBody
        type={type}
        show={type === "add" ? showWorkspaceAdder : display}
        style={{
          display: type === "update" ? (display ? "block" : "none") : "block",
        }}
      >
        <WorkspaceModalHeaderWrapper>
          {type === "add" ? (
            <WorkspaceCloseButton onClick={() => setShowWorkspaceAdder(false)}>
              +
            </WorkspaceCloseButton>
          ) : (
            <WorkspaceCloseButton onClick={() => setDisplay(false)}>
              +
            </WorkspaceCloseButton>
          )}
          <WorkspaceAdderModalHeader>
            {type === "add" ? "Create" : "Update"} Workspace
          </WorkspaceAdderModalHeader>
        </WorkspaceModalHeaderWrapper>
        <WorkspaceImageWrapper>
          <WorkspaceImage src={Board} />
        </WorkspaceImageWrapper>
        <WorkspaceInputWrapper>
          <WorkspaceInputLabel>Workspace Title</WorkspaceInputLabel>
          <WorkspaceInputField ref={WorkspaceInputRef} />
        </WorkspaceInputWrapper>
        {type === "add" ? (
          <WorkspaceCreateButton>
            {isLoading ? (
              <WorkspaceLoader />
            ) : (
              <WorkspaceBtnText
                onClick={async (e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  setShowWorkspaceAdder(false);
                  var response = await AddWorkspace(
                    WorkspaceInputRef.current.value,
                    auth.uid || getCookies({ name: "uuid" })
                  );
                  setShowNotification(response);
                  setUpdate(!update);
                  setIsLoading(false);
                  WorkspaceInputRef.current.value = null;
                }}
              >
                Create
              </WorkspaceBtnText>
            )}
          </WorkspaceCreateButton>
        ) : (
          <WorkspaceCreateButton>
            {isLoading ? (
              <WorkspaceLoader />
            ) : (
              <WorkspaceBtnText
                onClick={async (e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  setDisplay(false);
                  var response = await UpdateWorkspace(
                    WorkspaceInputRef.current.value,
                    auth.uid || getCookies({ name: "uuid" }),
                    wuid
                  );
                  setShowNotification(response || false);
                  setUpdate(!update);
                  setIsLoading(false);
                  WorkspaceInputRef.current.value = null;
                }}
              >
                Update
              </WorkspaceBtnText>
            )}
          </WorkspaceCreateButton>
        )}
      </WorkspaceAdderModalBody>
    </>
  );
};

export default WorkSpaceAdder;
