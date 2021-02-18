import React, { useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

import { NavBar, Footer, Loading, Showcase } from "../../components";

import * as S from "./styles";

import CountUp from "react-countup";

import { FaUserFriends } from "react-icons/fa";
import { MdMailOutline, MdLocationCity } from "react-icons/md";

import errorImg from "../../assets/3008899.jpg";

const LOGGED = gql`
  query {
    getLoggedUser {
      id
      userName
      profilePicture
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;

const Admin = () => {
  const history = useHistory();

  const { loading, error, data, refetch } = useQuery(LOGGED);
  const [logout] = useMutation(LOGOUT);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const handleLogout = async () => {
    const { data } = await logout();

    if (data.logout) history.push("/");
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : data.getLoggedUser === null ? (
        <S.Error url={errorImg}>You Shall not Pass</S.Error>
      ) : (
        <>
          <NavBar />

          <S.Container>
            <S.IntroTop>
              <S.TitleTop>{data.getLoggedUser.userName}</S.TitleTop>

              <S.Logout type="button" onClick={() => handleLogout()}>
                Logout
              </S.Logout>
            </S.IntroTop>

            <S.IntroBottom>
              <S.IntroImg url={data.getLoggedUser.profilePicture} />
              <S.UselessSpaceForNow>
                <S.UserNameBottom>
                  {data.getLoggedUser.userName}
                </S.UserNameBottom>
                <Link
                  to="/admin/add"
                  style={{
                    height: "auto",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <S.AddButton>Adicionar</S.AddButton>
                </Link>
                <S.RemoveButton>Editar / Remover</S.RemoveButton>
                <Link
                  to="/admin/config"
                  style={{
                    height: "auto",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <S.EditButton>Configurações</S.EditButton>
                </Link>
              </S.UselessSpaceForNow>

              <S.DataContainer>
                <S.DataBox>
                  <S.DataBoxTitle>
                    <FaUserFriends />
                  </S.DataBoxTitle>
                  <S.DataBoxValue>
                    <CountUp start={0} end={1000} duration={4} />
                    <S.DataBoxValueDesc>New Users</S.DataBoxValueDesc>
                  </S.DataBoxValue>
                  <S.DataBoxFooter>Per Week</S.DataBoxFooter>
                </S.DataBox>
                <S.DataBox>
                  <S.DataBoxTitle>
                    <MdMailOutline />
                  </S.DataBoxTitle>
                  <S.DataBoxValue>
                    <CountUp start={0} end={10} duration={5} />
                    <S.DataBoxValueDesc>New Emails</S.DataBoxValueDesc>
                  </S.DataBoxValue>
                  <S.DataBoxFooter>Check It Out</S.DataBoxFooter>
                </S.DataBox>
                <S.DataBox>
                  <S.DataBoxTitle>
                    <MdLocationCity />
                  </S.DataBoxTitle>
                  <S.DataBoxValue>
                    <CountUp start={0} end={20} duration={5} prefix="+" />
                    <S.DataBoxValueDesc>Imoveis</S.DataBoxValueDesc>
                  </S.DataBoxValue>
                  <S.DataBoxFooter>Manage</S.DataBoxFooter>
                </S.DataBox>
              </S.DataContainer>
            </S.IntroBottom>
          </S.Container>

          <Showcase />

          <Footer />
        </>
      )}
    </>
  );
};

export default Admin;
