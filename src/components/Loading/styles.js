import styled from "styled-components";

export const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;

  font-size: 48px;
  font-weight: bold;
`;

export const PopUpMessage = styled.h1`
  margin-bottom: 150px;

  position: absolute;
  bottom: 0;

  font-size: 22px;
  color: #003c8f;
`;
