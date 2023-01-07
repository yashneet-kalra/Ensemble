import styled from "styled-components";

export const SidebarBody = styled.div`
  width: 19rem;
  background: var(--white);
  height: 90vh;
`;

export const SidebarOptionsWrapper = styled.div`
  width: 13rem;
  margin-left: auto;
  margin-top: 15%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 5%;
`;

export const SidebarOption = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 5%;
  align-items: flex-start;
  font-family: 'Rubik';
  color: var(--dark-blue);
  font-weight: 600;
  background: var(--blue);
  padding: 0.5rem;
  border-radius: 0.25rem;
`
export const SidebarIcon = styled.img`
  width: 1.5rem;
` 