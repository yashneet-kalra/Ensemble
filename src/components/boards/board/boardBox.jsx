import { BoardBoxBody, BoardDescription, BoardTitle } from "./boardBoxElements";

const BoardBox = ({data}) => {
  console.log("boards data",data)
  return (
    <>
      <BoardBoxBody>
        <BoardTitle bold size={"1rem"}>
          {data?.board_title}
        </BoardTitle>
        <BoardDescription size={"0.75rem"} top={"2%"}>
          {data?.board_description}
        </BoardDescription>
      </BoardBoxBody>
    </>
  );
}
 
export default BoardBox;