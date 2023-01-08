import { useContext } from "react";
import styled from "styled-components";
import { NotificationPopUpContext, UpdateContext } from "../../context/context";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import DeleteTask from "../../hooks/tasks/deleteTask";
import { InputLabel } from "../common/common";
import { CloseIcon } from "../notificationPopUp/notificationPopUpElements";

const TaskBody = styled.div`
  width: 100%;
  background: var(--white);
  margin-top: 2%;
  padding: 0.3rem;
`;
const TaskTitle = styled(InputLabel)`
  font-size: 0.85rem;
`;
const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`
const Status = styled(InputLabel)``;
const DueDate = styled(InputLabel)``;
const CloseBtn = styled(CloseIcon)`
  font-size: 1rem;
  cursor: pointer;
`;

const Task = ({ data, buid, luid }) => {
  const {showNotification, setShowNotification} = useContext(NotificationPopUpContext);
  const {update, setUpdate} = useContext(UpdateContext)
  return (
    <>
      <TaskBody>
        <SubInfo>
        <TaskTitle>{data?.task_title}</TaskTitle>
        <CloseBtn onClick={async()=> {
          var response = await DeleteTask(
            getCookies({name: "uuid"}),
            buid,
            luid,
            data?.task_id
          )
          setShowNotification(response);
          setUpdate(!update)

        }}>+</CloseBtn>
        </SubInfo>
        <SubInfo>
          <Status size={"0.7rem"}>{data?.task_status} </Status>
          <DueDate size={"0.7rem"}>
            {data?.due_date_time && `Due: ${data?.due_date_time?.substring(6, 17)}`}
          </DueDate>
        </SubInfo>
      </TaskBody>
    </>
  );
};

export default Task;
