import { useNavigate } from "react-router-dom";
import { BoardBoxBody, BoardDescription, BoardTitle } from "./boardBoxElements";

const BoardBox = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <BoardBoxBody onClick={()=>navigate(`/list/${data?.board_id}`)}>
        <BoardTitle bold size={"1rem"}>
          {data?.board_title}
        </BoardTitle>
        <BoardDescription size={"0.75rem"} top={"2%"}>
          {data?.board_description}
        </BoardDescription>
      </BoardBoxBody>
    </>
  );
};

export default BoardBox;
