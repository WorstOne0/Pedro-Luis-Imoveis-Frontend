import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #f5f5f5;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const IntroImg = styled.div`
  height: 200px;
  width: 200px;
  border: 5px solid #f5f5f5;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 2;
  transform: translate(-10%, -50%);

  @media only screen and (max-width: 650px) {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const IntroTop = styled.div`
  height: 50vh;
  width: 100%;
  background: #003c8f;

  position: relative;
  z-index: 1;

  @media only screen and (max-width: 650px) {
    height: 40vh;
  }
`;

export const TitleTop = styled.h1`
  margin: 0 0 5px 5px;

  position: absolute;
  bottom: 0;
  left: calc(10% + 215px);
  transform: translate(-10%);

  color: #f5f5f5;
  font-size: 34px;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const Logout = styled.button`
  height: 50px;
  padding: 0 30px;
  margin: 0 15px 15px 0;
  border: 1px solid var(--color-white);
  border-radius: 8px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 0;

  transform: translate(-10%);

  cursor: pointer;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const IntroBottom = styled.div`
  height: 50vh;
  width: 100%;
  background: #f5f5f5;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 1;

  @media only screen and (max-width: 650px) {
    height: 60vh;

    flex-direction: column;
  }
`;

export const UserNameBottom = styled.h1`
  padding: 15px 0;

  display: none;

  color: #003c8f;
  font-size: 24px;

  @media only screen and (max-width: 650px) {
    display: flex;
  }
`;

export const UselessSpaceForNow = styled.div`
  height: 100%;
  width: calc(10% + 280px);
  padding: 120px 20px 20px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 650px) {
    padding: 90px 20px 20px 20px;
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 250px;
  border: none;
  border-radius: 5px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const AddButton = styled(Button)`
  border: 1px solid #003c8f;
  color: #003c8f;

  :hover {
    border-color: #f5f5f5;
    background: #003c8f;
    color: #f5f5f5;
  }
`;

export const EditButton = styled(Button)`
  border: 1px solid #ff851b;
  color: #ff851b;

  :hover {
    border-color: #f5f5f5;
    background: #ff851b;
    color: #f5f5f5;
  }
`;

export const RemoveButton = styled(Button)`
  border: 1px solid #f52216;
  color: #f52216;

  :hover {
    border-color: #f5f5f5;
    background: #f52216;
    color: #f5f5f5;
  }
`;

export const DataContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const DataBox = styled.div`
  height: 90%;
  width: 250px;
  padding: 0 20px;
  background: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 1100px) {
    height: 80px;
    width: 100%;

    flex-direction: row;
  }
`;

export const DataBoxTitle = styled.h1`
  color: #003c8f;
  font-size: 28px;
  font-weight: normal;

  @media only screen and (max-width: 1100px) {
    font-size: 22px;
  }
`;

export const DataBoxValue = styled.h1`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #003c8f;
  font-size: 46px;
  font-weight: bold;

  @media only screen and (max-width: 1100px) {
    flex-direction: row;

    font-size: 22px;
  }
`;

export const DataBoxValueDesc = styled.h1`
  color: #f52216;
  font-size: 14px;
  font-weight: normal;

  @media only screen and (max-width: 1100px) {
    margin-left: 15px;
  }
`;

export const DataBoxFooter = styled.h1`
  color: #999;
  font-size: 16px;
  font-weight: normal;
`;

export const Error = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f52216;
  font-size: 46px;
`;
