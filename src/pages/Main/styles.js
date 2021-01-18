import styled, { keyframes } from "styled-components";

const FadeInUp = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(-40px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const IntroContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  cursor: default;

  @media only screen and (max-width: 855px) {
  }
`;

export const IntroImg = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  position: absolute;
  z-index: 0;
`;

export const IntroHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 2;
`;

export const IntroTopTitle = styled.h1`
  opacity: 0.95;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f52216 /*#f05545*/;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px black;

  z-index: 1;

  opacity: 0;
  animation: ${FadeInUp} 0.5s ease-in forwards;

  @media only screen and (max-width: 855px) {
    font-size: 22px;
  }
`;

export const IntroTitle = styled.h1`
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 40px;
  text-shadow: 2px 2px black;
  text-align: center;

  z-index: 1;

  opacity: 0;
  animation: ${FadeInUp} 0.5s ease-in 0.2s forwards;

  @media only screen and (max-width: 855px) {
    font-size: 38px;
  }

  @media only screen and (max-width: 650px) {
    font-size: 34px;
  }
`;

export const ContainerSearch = styled.div`
  height: auto;
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 0;
  animation: ${FadeInUp} 0.5s ease-in 0.6s forwards;

  @media only screen and (max-width: 855px) {
    width: 100%;
  }
`;

export const SearchTitle = styled.label`
  height: auto;
  padding: 3px 0;
  width: 300px;
  margin-top: 30px;
  border-radius: 50px 50px 0 0;
  background: #003c8f;
  opacity: 0.95;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 16px;

  z-index: 1;

  @media only screen and (max-width: 855px) {
    width: 250px;

    margin-top: 10px;
    font-size: 16px;
  }
`;

export const Search = styled.form`
  height: 65px;
  width: 1000px;
  border-radius: 5px;
  background: #003c8f;
  opacity: 0.95;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 855px) {
    height: 60px;
  }

  @media only screen and (max-width: 700px) {
    border-radius: 5px 5px 5px 0;
  }
`;

export const ContainerSelect = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    height: 50px;
    width: 100%;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const ContainerTab = styled.div`
  height: 100%;
  width: 100%;

  display: none;

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconSearch = styled.div`
  height: 65px;
  width: 80px;
  border-radius: 30px 0 0 30px;

  display: ${(props) => (props.toggle ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 34px;
`;

export const SearchButton = styled.button`
  height: 100%;
  width: 120px;
  border: none;
  border-radius: 0 5px 5px 0;
  background: #003c8f;

  color: #f5f5f5;
  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  :hover {
    background: #22bd25;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  background: #f5f5f5;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Spotlight = styled.div`
  height: auto;
  width: 100%;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SpotlightHeader = styled.header`
  height: 70px;
  width: 100%;
  padding: 100px 60px 40px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightTitle = styled.h1`
  color: #003c8f;
  font-size: 34;
`;

export const SpotlightNumber = styled.label`
  color: #999;
  font-size: 16px;
`;

export const SpotlightSlider = styled.div`
  height: 580px;
  width: calc(100% - 40px);

  .Carousel {
    height: 560px;
    width: auto;

    position: relative;

    :hover .Arrow {
      opacity: 1;
    }
  }

  .Item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Dot button {
    border-color: blue;
    background: transparent;

    :hover {
      background: blue;
    }
  }
`;

export const CarouselLeftButton = styled.button`
  border: none;
  border-radius: 50%;
  background: transparent;
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f52216;
  font-size: 50px;
`;

export const CarouselRightButton = styled.button`
  border: none;
  border-radius: 50%;
  background: transparent;
  opacity: 0;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f52216;
  font-size: 50px;
`;

export const CarouselDot = styled.button`
  height: 15px;
  width: 15px;
  border: 2px solid blue;
  border-radius: 50%;
  background: transparent;
`;

export const CardContainer = styled.div`
  height: auto;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  .Pad {
    height: 100%;
    width: 10px;

    @media only screen and (max-width: 680px) {
      width: 5px;
    }
  }
`;

export const ShowContainer = styled.div`
  height: 100vh;
  max-height: 768px;
  width: 100%;
  padding: 10px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    height: auto;
    max-height: none;
    flex-direction: column;
  }
`;

export const ShowImgContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 20px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 10px;
  }
`;

export const ShowImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;

  @media only screen and (max-width: 1200px) {
    max-height: 70vh;
  }
`;

export const TypingContainer = styled.div`
  height: 100%;
  width: 50%;
  padding-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .Carousel {
    height: 100% !important;
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    height: 50%;
    width: 100%;
  }
`;

export const TypingTitle = styled.h1`
  width: 430px;
  padding: 20px;

  color: #003c8f;
  font-size: 34px;
  font-weight: bold;

  @media only screen and (max-width: 435px) {
    width: 100%;
  }

  @media only screen and (max-width: 300px) {
    font-size: 30px;
  }
`;

export const TypingTop = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  .Typing {
    margin-left: 10px;

    color: #f52216;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;

    .Typing {
      margin-left: 0;
    }
  }
`;

export const TypingText = styled.p`
  width: 100%;
  padding: 20px;

  color: #111;
  font-size: 18px;
  text-align: justify;
`;

export const TypingButton = styled.button`
  height: 50px;
  width: 250px;
  margin-top: 40px;
  border: 1px solid #003c8f;
  border-radius: 5px;
  background: transparent;

  color: #003c8f;
  font-size: 18px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    border: none;
    background: #003c8f;
    color: #f5f5f5;
  }
`;

export const AuthorContainer = styled.div`
  height: 100vh;
  max-height: 768px;
  width: 100%;
  padding: 20px;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  @media only screen and (max-width: 1200px) {
    height: auto;
    max-height: none;
    flex-direction: column;
  }
`;

export const AuthorImgContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 20px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 10px;
  }
`;

export const AuthorImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;

  @media only screen and (max-width: 1200px) {
    max-height: 70vh;
  }
`;

export const AuthorMain = styled.div`
  height: auto;
  width: 50%;

  @media only screen and (max-width: 1200px) {
    height: 50%;
    width: 100%;
  }
`;

export const AuthorTitle = styled.h1`
  padding: 20px;

  color: #003c8f;
  font-size: 34px;
`;

export const AuthorSubtitle = styled.p`
  color: #999;
  font-size: 14px;
  font-weight: normal;
`;

export const AuthorDescription = styled.p`
  width: 100%;
  padding: 20px;

  color: #111111;
  font-size: 18px;
  text-align: justify;
`;

export const AuthorDetails = styled.div`
  height: 70px;
  width: 100%;
  padding: 60px 20px 20px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthorSocialMedia = styled.div`
  height: 100%;
  width: 200px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 22px;
`;

export const AuthorButton = styled.button`
  height: 50px;
  width: 200px;
  margin-left: 10px;
  border: 1px solid #003c8f;
  border-radius: 5px;
  background: transparent;

  color: #003c8f;
  font-size: 18px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    border: none;
    background: #003c8f;
    color: #f5f5f5;
  }

  @media only screen and (max-width: 855px) {
    width: 150px;
  }
`;

export const ContainerContact = styled.div`
  height: 250px;
  width: 100%;
  padding: 60px;
  background: linear-gradient(125.42deg, #003c8f 0%, #0e55b6 100%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  color: #f5f5f5;
  font-size: 30px;
  text-align: center;

  @media only screen and (max-width: 520px) {
    height: 300px;
  }
`;

export const ContactButton = styled.button`
  height: 50px;
  width: 200px;
  margin-top: 10px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;
  font-size: 18px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #f5f5f5;
    color: #003c8f;
  }
`;

export const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "200px",
    "@media only screen and (max-width: 1225px)": {
      width: "20% !important",
    },
    "@media only screen and (max-width: 700px)": {
      width: "100% !important",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    maxHeight: 60,
    width: "200px",
    background: "transparent",
    border: `1px solid #003c8f`,
    color: `#f5f5f5`,
    "&:hover": {
      borderColor: `#003c8f !important`,
      background: `#003c8f !important`,
    },
    "@media only screen and (max-width: 1225px)": {
      width: "100% !important",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: 40,
  }),
  menuList: (provided, state) => ({
    ...provided,
    maxHeight: 180,
    background: `#f5f5f5`,
    color: `#111111`,
  }),
  option: (provided, state) => ({
    ...provided,
    padding: 15,
    marginTop: 5,
    border: "none",
    background: `#f5f5f5`,
    color: `#111111`,
    zIndex: 1,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: `#f5f5f5`,
  }),
  multiValue: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: `#f5f5f5`,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: `#f5f5f5`,
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    color: "#c91e1e",
    "&:hover": {
      color: "#a12828",
    },
  }),
};
