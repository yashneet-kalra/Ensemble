import {
  CloseButton,
  WorkspaceAdderContainer,
  WorkspaceAdderContents,
  WorkspaceAdderContentWrapper,
  WorkspaceAdderImage,
  WorkspaceAdderImageWrapper,
  WorkspaceAdderWrapper,
  WorkspaceContentsTitle,
  WorkspaceContentText,
} from "./workspaceAdderElements";
import BoardIllustration from "../../../../assets/boardsIllustration.png";
import { Button, InputField, InputLabel, Loader } from "../../../common/common";
import { useContext, useEffect, useRef, useState } from "react";
import AddWorkspace from "../../../../hooks/workspace/addWorkspace";
import {
  AuthContext,
  NotificationPopUpContext,
  ShowWSAdderContext,
  UpdateContext,
} from "../../../../context/context";
import { getCookies } from "../../../../hooks/randomStuff/randomStuff";
const WorkSpaceAdder = () => {
  const { showWorkspaceAdder, setShowWorkspaceAdder } =
    useContext(ShowWSAdderContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const WorkspaceAdderRef = useRef();
  const { auth, setAuth } = useContext(AuthContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  useEffect(() => {
    showWorkspaceAdder
      ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflow = "auto");
  }, [showWorkspaceAdder]);
  return (
    <>
      {showWorkspaceAdder && (
        <WorkspaceAdderContainer>
          <WorkspaceAdderWrapper>
            <WorkspaceAdderContentWrapper>
              <WorkspaceAdderContents>
                <WorkspaceContentsTitle>
                  Let's build a Workspace
                </WorkspaceContentsTitle>
                <WorkspaceContentText>
                  Boost your productivity by making it easier for everyone to
                  access boards in one location.
                </WorkspaceContentText>
                <InputLabel top={"5%"}>Workspace name</InputLabel>
                <InputField
                  size={"80%"}
                  top={"3%"}
                  ref={WorkspaceAdderRef}
                  onChange={() => {
                    WorkspaceAdderRef.current.value.trim().length === 0
                      ? setIsDisabled(true)
                      : setIsDisabled(false);
                  }}
                />
                <InputLabel color top={"2%"} size={".75rem"}>
                  This is the name of your company, team or organization.
                </InputLabel>
                <Button
                  size={"80%"}
                  top={"7%"}
                  disabled={isDisabled}
                  onClick={async () => {
                    setIsDisabled(true);
                    setIsLoading(true);
                    var response = await AddWorkspace(
                      WorkspaceAdderRef.current.value,
                      auth.uid || getCookies({ name: "uuid" })
                    );
                    setIsLoading(false);
                    WorkspaceAdderRef.current.value = null;
                    setIsDisabled(false);
                    setShowWorkspaceAdder(false);
                    setShowNotification(response);
                    setUpdate(!update);
                  }}
                >
                  {isLoading ? <Loader /> : "Create"}
                </Button>
              </WorkspaceAdderContents>
            </WorkspaceAdderContentWrapper>
            <WorkspaceAdderImageWrapper>
              <CloseButton onClick={() => setShowWorkspaceAdder(false)}>
                +
              </CloseButton>
              <WorkspaceAdderImage src={BoardIllustration} />
            </WorkspaceAdderImageWrapper>
          </WorkspaceAdderWrapper>
        </WorkspaceAdderContainer>
      )}
    </>
  );
};

export default WorkSpaceAdder;

// import styled, { keyframes } from "styled-components";
// import {
//   BoardAdderModalBody,
//   BoardAdderModalHeader,
//   BoardAdderModalHeaderwrapper,
//   BoardImage,
//   // BoardImageWrapper,
//   BoardInputField,
//   BoardInputLabel,
//   BoardInputWrapper,
//   BoardsCloseButton,
//   BtnText,
//   CreateButton,
//   Loader,
// } from "../../boards/BoardsPopup/boardsAdderElements";
// import {
//   AuthContext,
//   LoadingContext,
//   NotificationPopUpContext,
//   ShowWSAdderContext,
//   UpdateContext,
// } from "../../../context/context";
// import Board from "../../../assets/board.jpg";
// import { useContext, useRef, useState } from "react";
// import AddWorkspace from "../../../hooks/workspace/addWorkspace";
// import UpdateWorkspace from "../../../hooks/workspace/updateWorkspace";
// import { getCookies } from "../../../hooks/randomStuff/randomStuff";
// const Slide = keyframes`
//   from {
//     right: 5%;
//   }
//   to{
//     right: -50%;
//   }
// `;
// const WorkspaceAdderModalBody = styled(BoardAdderModalBody)`
//   position: ${(props) => (props.type === "add" ? "absolute" : "relative")};
//   right: ${(props) => (props.type === "add" ? "0%" : "0")};
//   /* top: ${(props) => (props.show ? "2.5rem" : "-60%")}; */
//   top: ${(props) =>
//     props.type === "add" ? (props.show ? "2.5rem" : "-60%") : "-120%"};
//   z-index: 2;
//   transition: top 500ms;
//   /* animation: ${Slide} 300ms ease-in-out; */
// `;
// const WorkspaceModalHeaderWrapper = styled(BoardAdderModalHeaderwrapper)``;
// const WorkspaceCloseButton = styled(BoardsCloseButton)``;
// const WorkspaceAdderModalHeader = styled(BoardAdderModalHeader)``;
// const WorkspaceImageWrapper = styled(BoardImageWrapper)``;
// const WorkspaceImage = styled(BoardImage)``;
// const WorkspaceInputWrapper = styled(BoardInputWrapper)``;
// const WorkspaceInputLabel = styled(BoardInputLabel)``;
// const WorkspaceInputField = styled(BoardInputField)``;
// const WorkspaceCreateButton = styled(CreateButton)``;
// const WorkspaceLoader = styled(Loader)``;
// const WorkspaceBtnText = styled(BtnText)``;

// const WorkSpaceAdder = ({ type, display, setDisplay, wuid, position }) => {
//   const { isLoading, setIsLoading } = useContext(LoadingContext);
//   const { showNotification, setShowNotification } = useContext(
//     NotificationPopUpContext
//   );
//   const { auth, setAuth } = useContext(AuthContext);
//   const { update, setUpdate } = useContext(UpdateContext);
//   const { showWorkspaceAdder, setShowWorkspaceAdder } =
//     useContext(ShowWSAdderContext);
//   const [show, setShow] = useState(false);
//   const WorkspaceInputRef = useRef();
//   var pos = position>300 ? "-5rem" : "360px";
//   return (
//     <>
//       <WorkspaceAdderModalBody
//         type={type}
//         show={type === "add" ? showWorkspaceAdder : display}
//         style={{
//           display: type === "update" ? (display ? "block" : "none") : "block",
//           right: type === "update" ? `${pos}` : "0"
//         }}
//       >
//         <WorkspaceModalHeaderWrapper>
//           {type === "add" ? (
//             <WorkspaceCloseButton onClick={() => setShowWorkspaceAdder(false)}>
//               +
//             </WorkspaceCloseButton>
//           ) : (
//             <WorkspaceCloseButton onClick={() => setDisplay(false)}>
//               +
//             </WorkspaceCloseButton>
//           )}
//           <WorkspaceAdderModalHeader>
//             {type === "add" ? "Create" : "Update"} Workspace
//           </WorkspaceAdderModalHeader>
//         </WorkspaceModalHeaderWrapper>
//         <WorkspaceImageWrapper>
//           <WorkspaceImage src={Board} />
//         </WorkspaceImageWrapper>
//         <WorkspaceInputWrapper>
//           <WorkspaceInputLabel>Workspace Title</WorkspaceInputLabel>
//           <WorkspaceInputField ref={WorkspaceInputRef} />
//         </WorkspaceInputWrapper>
//         {type === "add" ? (
//           <WorkspaceCreateButton>
//             {isLoading ? (
//               <WorkspaceLoader />
//             ) : (
//               <WorkspaceBtnText
//                 onClick={async (e) => {
//                 //   e.preventDefault();
//                 //   setIsLoading(true);
//                 //   setShowWorkspaceAdder(false);
//                 //   var response = await AddWorkspace(
//                 //     WorkspaceInputRef.current.value,
//                 //     auth.uid || getCookies({ name: "uuid" })
//                 //   );
//                 //   setShowNotification(response);
//                 //   setUpdate(!update);
//                 //   setIsLoading(false);
//                 //   WorkspaceInputRef.current.value = null;
//                 }}
//               >
//                 Create
//               </WorkspaceBtnText>
//             )}
//           </WorkspaceCreateButton>
//         ) : (
//           <WorkspaceCreateButton>
//             {isLoading ? (
//               <WorkspaceLoader />
//             ) : (
//               <WorkspaceBtnText
//                 onClick={async (e) => {
//                   e.preventDefault();
//                   setIsLoading(true);
//                   setDisplay(false);
//                   var response = await UpdateWorkspace(
//                     WorkspaceInputRef.current.value,
//                     auth.uid || getCookies({ name: "uuid" }),
//                     wuid
//                   );
//                   setShowNotification(response || false);
//                   setUpdate(!update);
//                   setIsLoading(false);
//                   WorkspaceInputRef.current.value = null;
//                 }}
//               >
//                 Update
//               </WorkspaceBtnText>
//             )}
//           </WorkspaceCreateButton>
//         )}
//       </WorkspaceAdderModalBody>
//     </>
//   );
// };

// export default WorkSpaceAdder;
