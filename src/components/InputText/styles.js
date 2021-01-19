import styled from "styled-components";

export const Container = styled.div`
  height: 5.5rem;
  width: 100%;
  margin: ${(props) => props.margin};

  position: relative;

  .Input:focus + .Label,
  .Input:valid + .Label {
    padding: 0 0.7rem;
    background: ${(props) => props.backgroundName};

    top: 0;

    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.8rem;
  background: transparent;

  font-size: 1.6rem;

  :focus {
    border-color: ${(props) => props.borderColorHover};
  }
`;

export const Label = styled.label`
  background: transparent;

  position: absolute;
  top: 50%;
  left: 2rem;

  color: var(--color-white);
  font-size: 1.6rem;

  transform: translateY(-50%);

  pointer-events: none;
  transition: all 0.3s ease-out;
`;
