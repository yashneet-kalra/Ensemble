import { useContext, useEffect } from "react";
import Right from "../../assets/right.png";
import Wrong from "../../assets/wrong2.png";
import { NotificationPopUpContext } from "../../context/context";
import {
  PopUpContainer,
  PopupBody,
  PopupIcon,
  PopupMessage,
  Response,
  CloseIcon,
} from "./notificationPopUpElements";

const PopUp = ({ response }) => {
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  useEffect(() => {
    setTimeout(() => {
      if (showNotification !== false) {
        setShowNotification(false);
      }
    }, 1500);
  }, [showNotification]);
  return (
    <>
      <button onClick={() => setShowNotification({ user: "asdasd" })}>
        show
      </button>
      <button onClick={() => setShowNotification(false)}>hide</button>
      <PopUpContainer>
        <PopupBody
          status={response.status === 200 ? true : false}
          style={{ right: showNotification !== false ? "0%" : "-25rem" }}
        >
          <Response>
            <PopupIcon src={response.status === 200 ? Right : Wrong} />
            <PopupMessage status={response.status === 200 ? true : false}>
              {response.message}
            </PopupMessage>
          </Response>
          <CloseIcon onClick={() => setShowNotification(false)}>+</CloseIcon>
        </PopupBody>
      </PopUpContainer>
    </>
  );
};

export default PopUp;
