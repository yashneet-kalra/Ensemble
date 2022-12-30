import { useState } from "react";
import styled from "styled-components";
import WorkSpaceAdder from "./workspaceAdder";

const WorkSpaceBoxContainer = styled.div`
  width: 10rem;
  background: var(--dark-orange);
  border-radius: 0.188rem;
  padding: 0.3rem 0.5rem;
  margin: 0 2% 2% 0;
  min-height: 4rem;
  max-height: 4rem;
`;
const WorkSpaceBoxTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
`
const WorkSpaceBox = ({data}) => {
  const [display, setDisplay] = useState(false)
  return ( 
    <>
    <WorkSpaceBoxContainer id={data?.wuid}>
      <WorkSpaceBoxTitle>{data?.title} </WorkSpaceBoxTitle>
      <button onClick={()=> setDisplay(true)}>edit</button>
      <WorkSpaceAdder type={"update"} display={display} setDisplay={setDisplay} wuid={data?.wuid} />
    </WorkSpaceBoxContainer>
    </>
   );
}
 
export default WorkSpaceBox;