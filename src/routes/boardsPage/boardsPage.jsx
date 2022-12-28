import BoardsAdder from "../../components/boards/BoardsPopup/boardsModal";
import PopUp from "../../components/notificationPopUp/notificationPopUp";

const BoardsPage = () => {
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
  return (
    <>
      <PopUp response={Resp3}/>
      <BoardsAdder type={"add"} />
    </>
  );
}
 
export default BoardsPage;