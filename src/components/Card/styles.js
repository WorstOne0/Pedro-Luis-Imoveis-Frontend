import styled, { keyframes } from "styled-components";

const SlideInRight = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-20px);
  } to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  height: auto;
  width: 400px;
  border: 1px solid #999;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  opacity: 0;
  animation: ${SlideInRight} 0.5s ease-out ${(props) => `${props.delay}s`}
    forwards;

  :hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.75);
  }

  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const ContainerImg = styled.div`
  height: 270px;
  width: 100%;
  border-radius: 8px 8px 0 0;

  position: relative;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const DescriptionIcons = styled.div`
  margin: 0 10px 10px 0;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;

  color: #b71c1c;
  font-size: 18px;
`;

export const Type = styled.h6`
  height: 30px;
  width: 50px;
  margin: 10px 0 0 10px;
  border-radius: 5px;
  background: #b71c1c;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 12px;

  position: absolute;
  top: 0;
  z-index: 1;

  transition: 0.7s;
`;

export const Description = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 1;
`;

export const CardHeader = styled.div`
  height: 220px;
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #0e55b6;
  background: linear-gradient(to bottom, #003c8f 0%, #0e55b6 100%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const CardSubTitle = styled.p`
  color: #999;
  font-size: 14px;
  font-weight: lighter;
`;

export const Text = styled.div`
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 14px;
  text-align: justify;
`;

export const PriceLabel = styled.label`
  color: #999;
  font-size: 16px;
  font-weight: lighter;
`;

export const Price = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;

  font-family: "Stardos Stencil";
`;

export const CardDetails = styled.div`
  height: 70px;
  width: 100%;
  border-top: 1px solid #8c1515;
  border-radius: 0 0 8px 8px;
  background: #b71c1c;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .border {
    border: none;
  }
`;

export const Details = styled.div`
  height: 100%;
  width: 100%;
  border-left: 1px solid #8c1515;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #fff;
  font-size: 14px;

  cursor: default;

  .Area {
    padding: 7px;
  }

  h1 {
    font-size: 20px;
    font-weight: normal;
  }

  p {
    font-size: 12px;
    font-weight: lighter;
  }

  sup {
    margin-bottom: 7px;
    font-size: 10px;
  }
`;

export const style = {
  color: "#ffffff",
  marginRight: 7,
  display: "flex",
  justifyContent: "center",
  width: 20,
  height: 20,
  cursor: "default",
};
