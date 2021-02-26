import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const Intro = styled.div`
  height: 80vh;
  width: 100%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-attachment: fixed;

  position: relative;

  @media only screen and (max-width: 950px) {
    height: 50vh;
  }
`;

export const IntroImg = styled.img`
  height: 80vh;
  width: 100%;

  @media only screen and (max-width: 950px) {
    height: 50vh;
  }
`;

export const IntroTitle = styled.h1`
  position: absolute;
  left: 50px;
  bottom: 20px;

  color: #f5f5f5;
  font-size: 34px;
  text-shadow: 2px 2px black;

  @media only screen and (max-width: 550px) {
    left: 5%;

    font-size: 24px;
  }
`;

export const Content = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  position: static;

  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

export const MainContainer = styled.div`
  height: auto;
  width: 75%;
  padding: 20px 50px 50px 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 950px) {
    width: 100%;
    padding: 20px;
  }
`;

export const MainBlock = styled.div`
  height: auto;
  width: 100%;
  padding: 40px 0;
  border-bottom: 1px solid #999;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  .Gallery {
    height: 65vh;
    width: 100%;

    cursor: pointer;
  }

  .Item {
    height: 65vh;
    width: 100%;
    border-radius: 5px;
  }
`;

export const SliderButton = styled.button`
  height: 100px;
  width: 30px;
  background: #111;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const MainTitle = styled.h1`
  width: 100%;
  padding-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #003c8f;
  font-size: 24px;
  font-weight: bold;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const MainSubtitle = styled.h1`
  width: auto;

  color: #999;
  font-size: 16px;
  font-weight: normal;
`;

export const MainText = styled.p`
  color: #000;
  font-size: 16px;
  text-align: justify;
`;

export const MainList = styled.div`
  padding: 0 20px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainListItem = styled.p`
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainListDot = styled.div`
  height: 5px;
  width: 5px;
  margin-right: 5px;
  border-radius: 50%;
  background: #003c8f;
`;

export const CarouselButton = styled.button`
  height: 60px;
  width: 60px;
  border: none;
  background: #003c8f;
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 50px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.9;
  }
`;

export const MapsContainer = styled.div`
  height: 500px;
  width: 100%;
`;

export const SideContainer = styled.div`
  height: 400px;
  width: 25%;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  background: linear-gradient(to bottom, #003c8f 0%, #0e55b6 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 10px;

  @media only screen and (max-width: 950px) {
    height: 50vh;
    width: 100%;
    margin: 0;
    border-radius: 0;

    position: relative;
    top: 0;
  }
`;

export const SideTitle = styled.h1`
  height: 50px;
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 24px;
`;

export const SideDetails = styled.div`
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 950px) {
    height: 30px;
  }
`;

export const SideLabel = styled.div`
  height: 100%;
  width: 50%;
  border-right: 1px solid #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
`;

export const SideValue = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 16px;

  .Icon {
    margin-left: 10px;
  }
`;

export const SidePrice = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 15px;
  border-top: 1px solid #f5f5f5;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 18px;
`;

export const EditButton = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid #f52216;
  border-radius: 5px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 50px;
  bottom: 20px;

  color: #f52216;
  font-size: 18px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #f52216;
    color: #f5f5f5;
  }
`;
