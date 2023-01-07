import { AdderButton, WorkspaceHeader, WorkspaceIcon, WorkspaceItemBody, WorkspaceItemMainBody, WorkspaceOption, WorkspaceOptionIcon, WorkspaceSubHeader, WorkspaceTitle } from "./workSpaceItemElements";
import BoardsImage from '../../../../assets/boardIcon.png';
import BoardsImage2 from '../../../../assets/board2.png';
import MemberIcon from '../../../../assets/member.png'
import TrashIcon from '../../../../assets/trash.png'
import UpdateIcon from '../../../../assets/update.png'
import BoardBox from "../../../boards/board/boardBox";
import { useState } from "react";
import { Loader } from "../../../common/common";
const WorkSpaceItem = ({data}) => {
  console.log("workspace data", data)
  const [isLoading, setIsloading] = useState(false);
  console.log(data)
  const ReverseBoardsArray = []
  data?.boards_data?.forEach(element => {
    ReverseBoardsArray.unshift(element)
  });
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
          <WorkspaceSubHeader>
            <WorkspaceOption>
              <WorkspaceOptionIcon src={BoardsImage2} />
              Boards
            </WorkspaceOption>
            <WorkspaceOption>
              <WorkspaceOptionIcon src={MemberIcon} />
              Members
            </WorkspaceOption>
            <WorkspaceOption>
              <WorkspaceOptionIcon src={UpdateIcon} />
              Update
            </WorkspaceOption>
            <WorkspaceOption onClick={async()=> {

            }}>
              {isLoading? <Loader />:(
                <>
                <WorkspaceOptionIcon src={TrashIcon} />
                Delete
                </>
              ) 
              }
            </WorkspaceOption>
          </WorkspaceSubHeader>
        </WorkspaceHeader>
        <WorkspaceItemMainBody>
          {ReverseBoardsArray?.slice(0,4)?.map((item) => <BoardBox data={item} />)}
          <AdderButton>
            Create New Board
          </AdderButton>
        </WorkspaceItemMainBody>

      </WorkspaceItemBody>
    </>
  );
}
 
export default WorkSpaceItem;