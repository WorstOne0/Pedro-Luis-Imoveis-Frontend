import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;

  position: relative;
`;

export const ContainerTabs = styled.div`
  height: 30px;
  width: 100%;
  border-radius: 0 0 5px 5px;
  background: #003c8f;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  bottom: -30px;
  left: 0;
`;

export const Tabs = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.background};

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 18px;

  cursor: pointer;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ContainerPanel = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Panel = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 20px;

  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
`;
