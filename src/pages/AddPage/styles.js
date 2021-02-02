import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 950px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  height: auto;
  max-height: 100vh;
  width: 50%;
  background: #fff;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  position: relative;

  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 950px) {
    max-height: 80vh;
    width: 100%;
  }
`;

export const GoBack = styled.div`
  margin: 20px;

  position: absolute;
  top: 0;
  left: 0;

  color: #111;
  font-size: 28px;

  cursor: pointer;
`;

export const TitleLeft = styled.h1`
  width: 100%;
  margin-top: 15px;
  padding: 15px;

  color: #003c8f;
  font-size: 34px;
  text-align: center;

  position: relative;
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px 60px 40px 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .InputFile {
    display: none;
  }
`;

export const Section = styled.h1`
  margin-top: 35px;

  color: #003c8f;
  font-size: 24px;

  position: relative;
`;

export const ContainerDetails = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .Left {
    width: 100%;
    padding: 0 15px 0 0;
  }

  .Right {
    width: 100%;
    padding-left: 0 0 0 15px;
  }
`;

export const StyleInput = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  .Icon {
    color: #003c8f;
    font-size: 18px;
  }
`;

export const CompInput = styled.div`
  padding-left: 10px;

  color: #003c8f;
  font-size: 14px;
  font-weight: bold;
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
    color: #003c8f;
    font-size: 18px;
  }
`;

export const ContainerAddress = styled.div`
  height: 55px;
  width: 100%;
  margin-top: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  .State {
    height: 100%;
    margin-top: 5px;
    padding: 0 15px;
    border-radius: 5px;
    background: #f5f5f5;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-primary);

    @media only screen and (max-width: 950px) {
      display: none;
    }
  }
`;

export const IconShelter = styled.div`
  height: 100%;
  width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleAddress = styled.div`
  height: 50px;
  width: 100%;
  margin-right: ${(props) => (props.noMargin ? "0" : "15px")};
`;

export const InputFile = styled.label`
  height: 50px;
  width: 100%;
  margin-top: 35px;
  padding: 0 20px;
  border: 1px solid #003c8f;
  border-radius: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #003c8f;
  font-size: 18px;

  cursor: pointer;

  .IconTitle {
    margin-right: 10px;
  }
`;

export const StyleCheckBox = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 35px;
  padding: 0 10px;
  border: 1px solid #003c8f;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #003c8f;
  font-size: 18px;

  .Checked {
    margin-right: 5px;

    display: ${(props) => props.children[0].props.check};

    color: #003c8f;
    font-size: 18px;

    cursor: pointer;
  }

  .Unchecked {
    margin-right: 5px;

    display: ${(props) => props.children[1].props.check};

    color: #003c8f;
    font-size: 18px;

    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
  margin-top: 35px;
  padding: 20px;
  border: 1px solid #003c8f;
  border-radius: 5px;
  background: transparent;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #111;
  font-size: 18px;
  resize: none;

  ::placeholder {
    color: #003c8f;
    font-size: 18px;
  }
`;

export const ImgContainer = styled.div`
  max-height: 510px;
  min-height: 120px;
  width: 100%;
  margin-top: 30px;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-gap: 10px;

  overflow: scroll;
  overflow-x: hidden;
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

export const ImgWithProgress = styled.div`
  height: 120px;
  width: 120px;

  position: relative;

  .Delete {
    height: 13px;
    width: 13px;

    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 3;

    color: #f52216;
    cursor: pointer;
  }

  .Check {
    height: 30px;
    width: 30px;

    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 3;

    color: #25d366;
    font-size: 18px;
  }

  .Error {
    height: 30px;
    width: 30px;

    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 3;

    color: #f52216;
    font-size: 18px;
  }

  .Progress {
    height: 30px;
    width: 30px;

    position: absolute;
    left: 10px;
    bottom: 10px;

    color: #003c8f;
  }
`;

export const ImgUpload = styled.img`
  height: 120px;
  width: 120px;
`;

export const Right = styled.div`
  height: 100%;
  width: 50%;
  background: #003c8f;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 950px) {
    height: auto;
    width: 100%;
    padding: 20px 0;
  }
`;

export const ValidationContainer = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const ValidationMsg = styled.h1`
  width: 100%;
  padding: 20px 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  color: #fff;
  font-size: 16px;

  .Rejected {
    margin-bottom: 10px;

    color: red;
    font-size: 18px;
  }
`;

export const SubmitMsg = styled.h1`
  color: #fff;
  font-size: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .Accepted {
    margin-bottom: 20px;

    color: green;
    font-size: 78px;
  }
`;

export const Submit = styled.button`
  height: 50px;
  width: 140px;
  margin-top: 70px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: transparent;

  color: #fff;
  font-size: 18px;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    color: #003c8f;
    background: #fff;
  }
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

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 35px;

  display: flex;
`;

export const customStyles = {
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    height: 55,
    width: "100%",
    marginTop: 30,
    padding: "0 10px",
    background: "transparent",
    border: "1px solid var(--color-primary)",
    borderRadius: "5px",
    color: "var(--color-primary)",
    fontSize: 16,
    "&:hover": {
      borderColor: "#003c8f !important",
      background: "transparent !important",
    },
    "@media only screen and (max-width: 1300px)": {
      background: "#f5f5f5",
      border: "1px solid #f5f5f5",
      color: "#003c8f",
      "&:hover": {
        borderColor: "#f5f5f5 !important",
      },
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    maxHeight: 40,
    "&:hover": {
      background: "transparent",
    },
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
    color: "var(--color-primary)",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#111",
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

export const selectWithoutBorder = {
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    height: 55,
    width: "100%",
    padding: "0 10px",
    background: "transparent",
    border: "1px solid var(--color-primary)",
    borderRadius: "5px",
    color: "var(--color-primary)",
    fontSize: 16,
    "&:hover": {
      borderColor: "#003c8f !important",
      background: "transparent !important",
    },
    "@media only screen and (max-width: 1300px)": {
      background: "#f5f5f5",
      border: "1px solid #f5f5f5",
      color: "#003c8f",
      "&:hover": {
        borderColor: "#f5f5f5 !important",
      },
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    maxHeight: 40,
    "&:hover": {
      background: "transparent",
    },
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
    color: "var(--color-primary)",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#111",
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
}; /* {
  container: (provided, state) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    height: 55,
    width: "100%",
    marginTop: 1,
    border: "1px solid var(--color-primary)",
    borderRadius: "5px",
    background: "#fff",
    color: "#003c8f",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "100%",
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
    color: "#003c8f",
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
};*/
