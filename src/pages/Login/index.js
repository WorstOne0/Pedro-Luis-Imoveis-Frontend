import React, { useState, useRef } from "react";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";
//import ReCAPTCHA from "react-google-recaptcha";

import * as S from "./styles";

import { InputText } from "../../components";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";

const LOGIN = gql`
  mutation Login(
    $email: String!
    $password: String!
    $thirdParty: String!
    $reCaptchaToken: String!
  ) {
    login(
      email: $email
      password: $password
      thirdParty: $thirdParty
      reCaptchaToken: $reCaptchaToken
    ) {
      id
      email
    }
  }
`;

const Login = () => {
  const [login] = useMutation(LOGIN);
  const history = useHistory();
  const reRef = useRef();

  const [control, setControl] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setControl({ ...control, loading: true });

    const token = "LOL";
    //const token = await reRef.current.executeAsync();
    //reRef.current.reset();

    const { data } = await login({
      variables: { email, password, thirdParty: "None", reCaptchaToken: token },
    });

    data.login
      ? history.push("/")
      : setControl({
          ...control,
          laoding: false,
          error: true,
          errorMsg: "Login Invalido",
        });
  };

  return (
    <S.Container>
      <S.Content>
        <S.LoginContainer onSubmit={handleSubmit}>
          <S.Back onClick={() => history.goBack()}>
            <BsArrowLeft />
          </S.Back>

          <S.LoginTitle>Login</S.LoginTitle>

          <S.InputWrapper>
            <InputText
              value={email}
              setValue={(event) => {
                event.preventDefault();

                setEmail(event.target.value);
              }}
              name="E-mail"
              borderColor={"var(--color-primary-hover-lighter)"}
              borderColorHover={"var(--color-white)"}
              backgroundName={"var(--color-primary)"}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputText
              value={password}
              setValue={(event) => {
                event.preventDefault();

                setPassword(event.target.value);
              }}
              name="Password"
              type="password"
              borderColor={"var(--color-primary-hover-lighter)"}
              borderColorHover={"var(--color-white)"}
              backgroundName={"var(--color-primary)"}
            />
          </S.InputWrapper>

          {/*<ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            size="invisible"
            ref={reRef}
          />*/}

          <S.Button type="submit">Entrar</S.Button>
        </S.LoginContainer>

        <S.SignIn>
          <S.LabelOr>OU</S.LabelOr>
          <S.GoogleButton>
            <AiOutlineGoogle className="Icon" />
            Login com o Google
          </S.GoogleButton>
        </S.SignIn>
      </S.Content>
    </S.Container>
  );
};

export default Login;
