import styled from "styled-components";
import { InputLabel } from "../../common/common";

export const BoardBoxBody = styled.div`
  width: 10rem;
  min-height: 5rem;
  max-height: 5rem;
  margin: 1%;
  padding: 0.5rem;
  font-family: "Rubik";
  outline: none;
  border: none;
  background: var(--grey);
  cursor: pointer;
`;

export const BoardTitle = styled(InputLabel)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const BoardDescription = styled(InputLabel)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
