import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Back = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: 2.2rem;

  cursor: pointer;
`;

export const Content = styled.div`
  height: 100%;
  width: 40rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginContainer = styled.form`
  width: 100%;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  color: var(--color-white);
  font-size: 2.8rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const Error = styled.div`
  height: 20px;
  width: 100%;

  color: red;
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button`
  height: 5rem;
  width: 100%;
  margin-top: 3rem;
  border: 1px solid var(--color-primary-hover-lighter);
  border-radius: 0.8rem;
  background: transparent;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background: var(--color-primary-lighter);

    color: var(--color-white);
  }
`;

export const SignIn = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-white);

  position: relative;
`;

export const LabelOr = styled.label`
  padding: 1rem;
  background: var(--color-primary);

  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, -50%);

  font-size: 1.4rem;
`;

export const GoogleButton = styled.button`
  height: 5rem;
  width: 100%;
  margin-top: 4rem;
  border: 1px solid var(--color-white);
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  cursor: pointer;

  .Icon {
    margin-right: 1rem;

    font-size: 1.8rem;
  }
`;

export const FaceButton = styled.button`
  height: 5rem;
  width: 100%;
  margin-top: 2rem;
  border: 1px solid #4267b2;
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  cursor: pointer;

  color: #4267b2;

  .Icon {
    margin-right: 1rem;

    font-size: 1.8rem;
  }
`;

export const SignUp = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-hover-primary-lighter);
  font-size: 1.6rem;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
