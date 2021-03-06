import styled from "styled-components";

export const SideContainer = styled.div`
  height: 100vh;
  width: 25%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 0;

  @media only screen and (max-width: 1300px) {
    height: auto;
    width: 100%;
    padding: 50px 30px 20px 30px;

    align-items: flex-start;

    position: static;
  }
`;

export const SideContainerTitle = styled.h1`
  height: 70px;
  width: 200px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #003c8f;
  font-size: 34px;
  font-weight: bold;
  text-shadow: 0.5 0.5 black;
`;

export const Filter = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  font-size: 16px;

  @media only screen and (max-width: 1300px) {
    height: auto;
  }
`;

export const ContainerSelect = styled.form`
  height: 250px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    height: 110px;

    flex-direction: row;
  }

  @media only screen and (max-width: 500px) {
    height: 250px;

    flex-direction: column;
  }
`;

export const DivisorLeft = styled.div`
  height: 125px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    padding: 0 30px 0 10px;
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
    padding: 0 10px 0 0;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const DivisorRight = styled.div`
  height: 125px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    padding: 0 10px 0 30px;
  }

  @media only screen and (max-width: 660px) {
    padding: 0 0 0 10px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const AdvancedOptions = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 0 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;

  position: relative;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const OptionsTitle = styled.button`
  height: 25px;
  width: 250px;
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  font-size: 14px;
  cursor: pointer;

  position: absolute;
  top: 0;

  :hover {
    text-decoration: underline;
  }
`;

export const Options = styled.div`
  height: ${(props) => props.height};
  width: 100%;
  margin-top: 25px;
  background: transparent;

  display: flex;
  align-items: center;
  flex-direction: column;

  color: #111;

  transition: all 0.5s ease-in-out;

  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    border: 1px solid #f5f5f5;
    background: #003c8f;
  }
`;

export const DetailsSlider = styled.div`
  width: 100%;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .Slider {
    width: 100%;
  }
`;

export const LabelSlider = styled.div`
  width: 100%;
  padding: 20px 0;

  position: relative;

  color: #003c8f;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

export const ValueSliderLeft = styled.div`
  padding: 5px 0;

  position: absolute;
  left: 0;
  bottom: 0;

  color: #f52216;
  font-size: 12px;
  font-weight: bold;
`;

export const ValueSliderRight = styled.div`
  padding: 5px 0;

  position: absolute;
  right: 0;
  bottom: 0;

  color: #f52216;
  font-size: 12px;
  font-weight: bold;
`;

export const DetailsButtons = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
    padding: 10px 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const LabelButton = styled.label`
  padding: 10px 0;

  color: #003c8f;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

export const Buttons = styled.button`
  height: 50px;
  width: 50px;
  border: 3px solid #003c8f;
  border-radius: 5px;
  background: ${(props) => (props.selected ? "#003c8f" : "#fff")};

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f52216;
  font-size: 18px;

  cursor: pointer;

  .Arrow {
    font-size: 20px;
  }
`;

export const Search = styled.button`
  height: 60px;
  width: 90%;
  margin-bottom: 10px;
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

  @media only screen and (max-width: 1300px) {
    margin-top: 10px;
  }
`;

export const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "90%",
    "@media only screen and (max-width: 1300px)": {
      width: "100%",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    maxHeight: 60,
    height: 55,
    width: "100%",
    padding: "0 10px",
    background: "transparent",
    border: "1px solid var(--color-primary)",
    borderRadius: "5px",
    color: "white",
    "&:hover": {
      borderColor: "#003c8f !important",
    },
    "@media only screen and (max-width: 1300px)": {
      width: "100%",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    maxHeight: 40,
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
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#999",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    display: "none",
    color: "#000",
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    color: "#c91e1e",
    "&:hover": {
      color: "#a12828",
    },
  }),
};
