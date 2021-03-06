import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import * as S from "./styles";

import { NavBar, Footer, Loading, InputText } from "../../components";

import { FaWhatsapp, FaUserCircle, FaCheckCircle } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { MdMailOutline, MdTextsms, MdPhone } from "react-icons/md";

const EMAIL = gql`
  mutation SendEmail($subject: String!, $email: String!, $text: String) {
    sendEmail(subject: $subject, email: $email, text: $text)
  }
`;

function Contact() {
  const [sendEmail] = useMutation(EMAIL);

  const [control, setControl] = useState({
    loading: false,
    uploaded: false,
    error: false,
    errorMsg: "",
  });
  const [email, setEmail] = useState({
    firstName: "",
    assunto: "",
    email: "",
    tel: "",
    text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setControl({ ...control, loading: true });

    const { data } = await sendEmail({
      variables: {
        subject: email.assunto,
        email: email.email,
        text: `Nome: ${email.firstName}<br>Email: ${email.email}<br>Telefone: ${email.tel}<br><br><br>${email.text}`,
      },
    });

    data.sendEmail
      ? setControl({ ...control, uploaded: true, loading: false })
      : setControl({
          ...control,
          laoding: false,
          error: true,
          errorMsg: "Erro ao enviar email",
        });
  };

  const ImgCity = require(`../../assets/selective-focus-photo-of-green-telephone-955081.jpg`)
    .default;

  return (
    <>
      <NavBar />

      <S.Container url={ImgCity}>
        <S.Info>
          <S.InfoTitle>Fale com o Corretor!</S.InfoTitle>
          <S.InfoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            condimentum augue non hendrerit tempor. Donec id viverra orci, sit
            amet ultricies ex. Sed eu consectetur elit, a mattis metus.
          </S.InfoText>
          Ou
          <S.InfoButton
            href="https://api.whatsapp.com/send?phone=5545999671342&data=AbuwixlFUcZabSRVq_78-aloKzHUVGgo0N2MesnCUlw-_d4VrNOpOqFR4-vE_3GkY2Tw4GOcUtN5sCroFjzZVKx6sVmfAb6-t4VGPOPYHX5-7mGl316DsbpIMi4s-dScK5M&source=FB_Ads"
            target="_blank"
          >
            <FaWhatsapp className="Icon" />
            Mande uma mensagem!
          </S.InfoButton>
        </S.Info>

        <S.Form onSubmit={handleSubmit}>
          {control.loading ? (
            <Loading color="var(--color-primary)" svg="#fff" />
          ) : control.error ? (
            <S.Ok>
              <AiFillCloseCircle className="Reject" />
              Email Não Enviado!
            </S.Ok>
          ) : control.uploaded ? (
            <S.Ok>
              <AiFillCheckCircle className="Accept" />
              Email Enviado
            </S.Ok>
          ) : (
            <>
              <S.FormTitle>Envie um E-mail</S.FormTitle>

              <S.Wrapper>
                <S.ContainerInput margin={true}>
                  <InputText
                    value={email.firstName}
                    setValue={(event) => {
                      setEmail({ ...email, firstName: event.target.value });
                    }}
                    name="Nome"
                    borderColor={"var(--color-white)"}
                    borderColorHover={"var(--color-white)"}
                    backgroundName={"var(--color-primary)"}
                    icon={<FaUserCircle />}
                  />
                </S.ContainerInput>

                <S.ContainerInput>
                  <InputText
                    value={email.assunto}
                    setValue={(event) => {
                      setEmail({ ...email, assunto: event.target.value });
                    }}
                    name="Assunto"
                    borderColor={"var(--color-white)"}
                    borderColorHover={"var(--color-white)"}
                    backgroundName={"var(--color-primary)"}
                    icon={<MdTextsms />}
                  />
                </S.ContainerInput>

                <S.ContainerInput>
                  <InputText
                    value={email.email}
                    setValue={(event) => {
                      setEmail({ ...email, email: event.target.value });
                    }}
                    name="E-mail"
                    borderColor={"var(--color-white)"}
                    borderColorHover={"var(--color-white)"}
                    backgroundName={"var(--color-primary)"}
                    icon={<MdMailOutline />}
                  />
                </S.ContainerInput>
                <S.ContainerInput>
                  <InputText
                    value={email.tel}
                    setValue={(event) => {
                      setEmail({ ...email, tel: event.target.value });
                    }}
                    name="Telefone"
                    borderColor={"var(--color-white)"}
                    borderColorHover={"var(--color-white)"}
                    backgroundName={"var(--color-primary)"}
                    icon={<MdPhone />}
                  />
                </S.ContainerInput>

                <S.TextArea
                  placeholder="Pergunte-nos algo"
                  name="text"
                  value={email.text}
                  onChange={(event) =>
                    setEmail({ ...email, text: event.target.value })
                  }
                  autoComplete="off"
                />
                <S.Submit type="submit">Enviar</S.Submit>
              </S.Wrapper>
            </>
          )}
        </S.Form>
      </S.Container>

      <Footer />
    </>
  );
}

export default Contact;
