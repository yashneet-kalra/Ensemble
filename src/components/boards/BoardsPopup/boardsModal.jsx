import { useState, useRef } from "react";
import Board from "../../../assets/board.jpg";
import {
  BoardAdderModalBody,
  BoardAdderModalHeaderwrapper,
  BoardAdderModalHeader,
  BoardsCloseButton,
  BoardImageWrapper,
  BoardImage,
  BoardInputWrapper,
  BoardInputLabel,
  BoardInputField,
  CreateButton,
  BtnText,
  Loader,
} from "./boardsAdderElements";

const BoardsAdder = ({ type }) => {
  const TitleRef = useRef();
  const DescriptionRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <BoardAdderModalBody>
        <BoardAdderModalHeaderwrapper>
          <BoardsCloseButton>+</BoardsCloseButton>
          <BoardAdderModalHeader>
            {type === "add" ? "Create" : "Update"} Board
          </BoardAdderModalHeader>
        </BoardAdderModalHeaderwrapper>
        <BoardImageWrapper>
          <BoardImage src={Board} />
        </BoardImageWrapper>
        <BoardInputWrapper>
          <BoardInputLabel>Board Title</BoardInputLabel>
          <BoardInputField ref={TitleRef} />
        </BoardInputWrapper>
        <BoardInputWrapper>
          <BoardInputLabel>Board Description</BoardInputLabel>
          <BoardInputField ref={DescriptionRef} />
        </BoardInputWrapper>
        {type === "add" ? (
          <CreateButton>
            {isLoading ? <Loader /> : <BtnText>Create</BtnText>}
          </CreateButton>
        ) : (
          <CreateButton>
            {isLoading ? <Loader /> : <BtnText>Update</BtnText>}
          </CreateButton>
        )}
      </BoardAdderModalBody>
    </>
  );
};

export default BoardsAdder;
