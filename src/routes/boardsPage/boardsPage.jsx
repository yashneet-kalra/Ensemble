import { useParams } from "react-router-dom";
import BoardsAdder from "../../components/boards/BoardsPopup/boardsModal";
import PopUp from "../../components/notificationPopUp/notificationPopUp";

const BoardsPage = () => {
  const wuid = useParams();
    const Resp1 = {
      message: "Board Added Successfully",
      status: 200,
    };
    const Resp2 = {
      message: "Board Updated Successfully",
      status: 200,
    };
    const Resp3 = {
      message: "Board Already Exists",
      status: 400,
    };
    // console.log(wuid)
  return (
    <>
    <p>{wuid.wuid}</p>
      <PopUp response={Resp3}/>
      <BoardsAdder type={"add"} />
    </>
  );
}
 
export default BoardsPage;