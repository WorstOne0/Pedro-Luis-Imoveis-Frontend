import styled, { keyframes } from "styled-components";

const FadeInUp = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(-20px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const FadeInDown = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const SlideLeft = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(20px);
  } to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const SlideRight = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-20px);
  } to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 70px 0;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media only screen and (max-width: 900px) {
    height: auto;

    flex-direction: column;
  }
`;

export const Info = styled.div`
  height: 80vh;
  max-height: 700px;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #111;

  position: relative;

  animation: ${FadeInDown} 0.5s ease-in;

  @media only screen and (max-width: 900px) {
    height: auto;
    width: 90%;
    margin-bottom: 15px;

    animation: none;
  }
`;

export const InfoTitle = styled.h1`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 24px;

  opacity: 0;
  animation: ${SlideRight} 0.5s ease-out 0.5s forwards;

  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const InfoText = styled.p`
  width: 100%;
  padding: 30px 0;

  color: #111;
  font-size: 16px;
  text-align: justify;
`;

export const InfoButton = styled.a`
  height: 50px;
  padding: 0 30px;
  margin-top: 30px;
  border: 1px solid #25d366;
  border-radius: 5px;
  background: #25d366;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 18px;
  text-decoration: none;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: transparent;
    color: #25d366;
  }

  .Icon {
    margin-right: 10px;

    font-size: 24px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 16px;

    .Icon {
      font-size: 24px;
    }
  }
`;

export const Ok = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #fff;
  font-size: 18px;

  .Accept {
    margin-bottom: 20px;

    color: #25d366;
    font-size: 44px;
  }

  .Reject {
    margin-bottom: 20px;

    color: red;
    font-size: 44px;
  }
`;

export const Form = styled.form`
  height: 80vh;
  max-height: 700px;
  width: 400px;
  padding: 40px 25px;
  margin-left: 20px;
  border-radius: 5px;
  background: var(--color-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  animation: ${FadeInUp} 0.5s ease-in;

  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 2px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #fff;
  }

  @media only screen and (max-width: 900px) {
    height: auto;
    width: 90%;
    margin: 0;

    animation: none;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 25px;

  color: #fff;
  font-size: 24px;

  opacity: 0;
  animation: ${SlideLeft} 0.5s ease-out 0.5s forwards;

  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  width: 100%;
  margin-top: ${(props) => (!props.margin ? "25px" : "0px")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 10px;
  border: none;
  background: transparent;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #111;
  font-size: 18px;

  ::placeholder {
    color: var(--color-primary);
    font-size: 18px;
  }

  @media only screen and (max-width: 900px) {
    ::placeholder {
      color: var(--color-primary);
      font-size: 16px;
    }
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
  margin-top: 35px;
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
  background: var(--color-primary);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: var(--color-white);
  font-size: 18px;

  ::placeholder {
    color: var(--color-white);
    font-size: 18px;
  }

  @media only screen and (max-width: 900px) {
    ::placeholder {
      color: var(--color-primary);
      font-size: 16px;
    }
  }
`;

export const Submit = styled.button`
  height: 50px;
  width: 140px;
  margin-top: 25px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background: transparent;

  color: #f5f5f5;
  font-size: 18px;
  font-weight: bold;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    color: var(--color-primary);
    background: #f5f5f5;
  }
`;

export const ContainerPlace = styled.div`
  height: 600px;
  width: 100%;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1225px) {
    height: 2000px;
    flex-direction: column;
  }
`;

export const AboutPlace = styled.div`
  height: 500px;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PlaceContainer = styled.div`
  height: 100%;
  width: 350px;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PlaceImg = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 5px;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceContent = styled.div`
  height: 50%;
  width: 100%;
  padding: 30px 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const PlaceDetails = styled.label`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #fff;
  font-size: 16px;

  svg {
    margin-right: 10px;
  }
`;

export const GoogleMapsContainer = styled.div`
  height: 100%;
  width: 600px;
  border: 1px solid #000;
  border-radius: 5px;

  background: #fff;

  @media only screen and (max-width: 1225px) {
    display: none;
  }
`;

export const Details = styled.div`
  height: 100%;
  width: 110px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const SocialMedia = styled.div`
  height: 50px;
  width: 70px;
  margin-top: 10px;
  border-radius: 5px;
  background: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 24px;

  :hover {
    background: #fff;
    color: ${(props) => props.color};
  }
`;
