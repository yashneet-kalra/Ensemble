
import styled from "styled-components";
import { WorkspaceContentsTitle } from "../../workspace/workspaceElements/workspaceAdder/workspaceAdderElements";
import { WorkspaceOption, WorkspaceOptionIcon } from "../../workspace/workspaceElements/workSpaceItem/workSpaceItemElements";
import MemberIcon from '../../../assets/member.png';
import UpdateIcon from '../../../assets/update.png'
const ListPageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const BoardPageTitle = styled(WorkspaceContentsTitle)``
const SubHeaderWrapper = styled.div`
  width: 25%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  gap: 5%;
`
const ListOption = styled(WorkspaceOption)``
const ListOptionIcon = styled(WorkspaceOptionIcon)``

const ListPageHeader = ({data}) => {
  return(
    <>
    <ListPageHeaderWrapper>
      <BoardPageTitle>{data}</BoardPageTitle>
      <SubHeaderWrapper>
      <ListOption>
        <ListOptionIcon src={MemberIcon} /> Members
      </ListOption>
      <ListOption>
        <ListOptionIcon src={UpdateIcon} /> Update
      </ListOption>
      </SubHeaderWrapper>
    </ListPageHeaderWrapper>
    </>
  )
}

export default ListPageHeader;