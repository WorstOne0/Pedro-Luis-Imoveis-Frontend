import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  height: 32vh;
  width: 100%;
  border-radius: 0.8rem;
  border: 0.2rem dashed
    ${(props) =>
      props.isDragAccept
        ? "green"
        : props.isDragReject
        ? "red"
        : "var(--color-primary)"};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${(props) =>
    props.isDragAccept ? "green" : props.isDragReject ? "red" : "#111"};

  .Icon {
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;

    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BrowseButton = styled.label`
  height: 5rem;
  width: 20rem;
  margin-top: 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-primary);
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 18px;

  cursor: pointer;
`;

export const Img = styled.img`
  height: 15rem;
  width: 15rem;
`;

export const ContentLight = styled.div`
  height: 10rem;
  width: 100%;
  margin-top: 1.5rem;
  border-radius: 0.8rem;
  border: 0.2rem dashed
    ${(props) =>
      props.isDragAccept
        ? "green"
        : props.isDragReject
        ? "red"
        : "var(--color-darker)"};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${(props) =>
    props.isDragAccept ? "green" : props.isDragReject ? "red" : "#fff"};
`;

export const ImgLight = styled.img`
  height: 9rem;
  width: 9rem;
`;

export const ButtonLight = styled.label`
  height: 100%;
  width: 100%;
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 24px;

  cursor: pointer;
`;
