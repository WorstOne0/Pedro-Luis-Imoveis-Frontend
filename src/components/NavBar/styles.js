import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  width: 100%;
  padding: 0 40px;
  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 10;
  top: 0;

  @media only screen and (max-width: 500px) {
    padding: 20px;
  }

  @media only screen and (max-width: 350px) {
    padding: 10px;
  }
`;

export const Img = styled.div`
  height: 100%;
  width: auto;
  background: transparent;

  display: flex;
  align-items: center;

  color: #fff;
  font-size: 18px;
  font-family: "Vollkorn SC", serif;
  text-shadow: 1px 1px #111;

  cursor: pointer;

  svg {
    margin-right: 15px;
  }

  @media only screen and (max-width: 855px) {
    p {
      display: none;
    }
  }
`;

export const ItemGroup = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  margin-left: 10px;
  padding: 8px;
  border: 2px solid #003c8f;
  border-radius: 50%;
  background: #003c8f;
  opacity: 0.95;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 22px;

  cursor: pointer;
  transition: filter 0.3s;

  :hover {
    filter: brightness(120%);
  }

  @media only screen and (max-width: 500px) {
    padding: 5px;

    font-size: 18px;
  }
`;

export const Login = styled.div`
  margin-left: 25px;
  padding: 8px;
  border: 2px solid #003c8f;
  border-radius: 50%;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #003c8f;
  font-size: 22px;

  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #003c8f;
    color: #fff;
  }

  @media only screen and (max-width: 500px) {
    padding: 5px;

    font-size: 18px;
  }
`;
