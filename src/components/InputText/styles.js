import styled from "styled-components";

import InputMask from "react-input-mask";

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

export const Input = styled(InputMask)`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.8rem;
  background: transparent;

  font-size: 1.6rem;

  color: ${(props) => props.color};

  :focus {
    border-color: ${(props) => props.borderColorHover};
  }
`;

export const Label = styled.label`
  background: transparent;

  display: flex;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 2rem;

  color: ${(props) => props.colorLabel};
  font-size: 1.8rem;

  transform: translateY(-50%);

  pointer-events: none;
  transition: all 0.3s ease-out;
`;

export const Icon = styled.div`
  margin-right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.2rem;
`;
