import styled, { keyframes } from "styled-components";

export const PreloaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const Lines = styled.svg`
  height: 100px;
  width: 100px;
`;
const Anime = keyframes`
to{
  stroke-dashoffset:  -136;
}
`;
export const Poly = styled.polygon`
  stroke: var(--white);
  stroke-width: 3;
  stroke-dasharray: 17;
  animation: ${Anime} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  fill: transparent;
`;
