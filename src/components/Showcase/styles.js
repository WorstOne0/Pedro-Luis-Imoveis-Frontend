import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 50px 0 20px 0;
  background: #fff;

  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1300px) {
    padding: 0 0 20px 0;

    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const ContainerShowcase = styled.div`
  height: auto;
  width: 75%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  width: 200px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #003c8f;
  font-size: 34px;
  font-weight: bold;
  text-shadow: 0.5 0.5 black;

  cursor: default;
`;

export const TitleDetails = styled.div`
  width: 130px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #999;
  font-size: 16px;
`;

export const Nothing = styled.div`
  height: 90vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #003c8f;
  font-size: 34px;

  .Icon {
    margin-bottom: 10px;

    font-size: 46px;
  }
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  margin-top: 20px;
  padding: 20px;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-gap: 20px;

  @media only screen and (max-width: 500px) {
    padding: 0;

    grid-template-columns: 1fr;
  }
`;

export const Page = styled.div`
  height: 40px;
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #003c8f;
    font-weight: bold;
  }
`;

export const PageButton = styled.button`
  height: 35px;
  width: 75px;
  border: 2px solid ${(props) => (props.page ? "#003c8f" : "#999")};
  border-radius: 5px;
  background: ${(props) => (props.page ? "#003c8f" : "#999")};

  color: #f5f5f5;

  transition: 0.4s;
  cursor: ${(props) => (props.display ? "pointer" : "default")};

  :hover {
    background: ${(props) => (props.page ? "#fff" : "#999")};
    color: ${(props) => (props.page ? "#003c8f" : "#fff")};
  }
`;

export const customStyles = {
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    maxHeight: 60,
    width: "auto",
    background: "transparent",
    border: "none",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    maxHeight: 40,
  }),
  menuList: (provided, state) => ({
    ...provided,
    maxHeight: 180,
    background: `#f5f5f5`,
    color: `#111`,
  }),
  option: (provided, state) => ({
    ...provided,
    padding: 15,
    marginTop: 5,
    border: "none",
    background: `#f5f5f5`,
    color: `#111`,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#999",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#003c8f",
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    color: "#c91e1e",
    "&:hover": {
      color: "#a12828",
    },
  }),
};
