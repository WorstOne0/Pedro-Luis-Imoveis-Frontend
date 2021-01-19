import styled, { keyframes } from "styled-components";

const SlideLeft = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-20px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background: #f5f5f5;
`;

export const Intro = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media only screen and (min-width: 1366px) {
    max-height: 768px;
  }
`;

export const IntroLeft = styled.div`
  height: 100%;
  width: 45%;
  background: #003c8f;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 3;

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const IntroImg = styled.div`
  height: 100%;
  width: 55%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  h1 {
    display: none;
  }

  @media only screen and (max-width: 950px) {
    width: 100%;

    h1 {
      display: flex;
    }
  }
`;

export const IntroTitle = styled.h1`
  color: #f5f5f5;
  font-size: 40px;
  text-align: center;
  text-shadow: 2px 2px #111;

  z-index: 3;

  opacity: 0;
  animation: ${SlideLeft} 0.5s ease-out forwards;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`;
