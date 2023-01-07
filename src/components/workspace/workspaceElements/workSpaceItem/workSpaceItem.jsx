import {
  AdderButton,
  WorkspaceHeader,
  WorkspaceIcon,
  WorkspaceItemBody,
  WorkspaceItemMainBody,
  WorkspaceOption,
  WorkspaceOptionIcon,
  WorkspaceSubHeader,
  WorkspaceTitle,
} from "./workSpaceItemElements";
import BoardsImage2 from "../../../../assets/board2.png";
import MemberIcon from "../../../../assets/member.png";
import TrashIcon from "../../../../assets/trash.png";
import UpdateIcon from "../../../../assets/update.png";
import BoardBox from "../../../boards/board/boardBox";
import { useContext, useState } from "react";
import { Loader } from "../../../common/common";
import {
  AuthContext,
  NotificationPopUpContext,
  ShowInputModalContext,
  UpdateContext,
} from "../../../../context/context";
import DeleteWorkspace from "../../../../hooks/workspace/deleteWorkspace";
import { getCookies } from "../../../../hooks/randomStuff/randomStuff";
import BoardsAdder from "../../../boards/BoardsPopup/boardsModal";
const WorkSpaceItem = ({ data }) => {
  const [isLoading, setIsloading] = useState(false);
  const ReverseBoardsArray = [];
  data?.boards_data?.forEach((element) => {
    ReverseBoardsArray.unshift(element);
  });
  const { auth, setAuth } = useContext(AuthContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  const { showInputModal, setShowInputModal } = useContext(
    ShowInputModalContext
  );
  return (
    <>
      <WorkspaceItemBody>
        <WorkspaceHeader>
          <WorkspaceSubHeader>
            <WorkspaceIcon>
              {data?.workspace_title.substring(0, 1)}
            </WorkspaceIcon>
            <WorkspaceTitle size={"1.25rem"}>
              {data?.workspace_title}
            </WorkspaceTitle>
          </WorkspaceSubHeader>
          <WorkspaceSubHeader justify={"flex-end"}>
            <WorkspaceOption>
              <WorkspaceOptionIcon src={BoardsImage2} />
              Boards{" "}
              {ReverseBoardsArray.length === 0
                ? ""
                : `(${ReverseBoardsArray?.length})`}
            </WorkspaceOption>
            <WorkspaceOption>
              <WorkspaceOptionIcon src={MemberIcon} />
              Members {`(${data?.workspace_members_count})`}
            </WorkspaceOption>
            {data?.user_role === "creator" ? (
              <WorkspaceOption
                onClick={() => {
                  setShowInputModal({
                    workspace_uid: data?.workspace_uid,
                    type: "workspace",
                  });
                }}
              >
                <WorkspaceOptionIcon src={UpdateIcon} />
                Update
              </WorkspaceOption>
            ) : (
              ""
            )}
            <WorkspaceOption
              onClick={async () => {
                setIsloading(true);
                const response = await DeleteWorkspace(
                  auth.uid || getCookies({ name: "uuid" }),
                  data?.workspace_uid
                );
                setShowNotification(response);
                setUpdate(!update);
                setIsloading(false);
              }}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <WorkspaceOptionIcon src={TrashIcon} />
                  Delete
                </>
              )}
            </WorkspaceOption>
          </WorkspaceSubHeader>
        </WorkspaceHeader>
        <WorkspaceItemMainBody>
          <>
            <AdderButton
              onClick={() =>
                setShowInputModal({
                  boardType: "add",
                  workspace_uid: data.workspace_uid,
                })
              }
            >
              Create New Board
            </AdderButton>
          </>
          {ReverseBoardsArray?.slice(0, 4)?.map((item) => (
            <BoardBox data={item} />
          ))}
        </WorkspaceItemMainBody>
      </WorkspaceItemBody>
    </>
  );
};

export default WorkSpaceItem;
