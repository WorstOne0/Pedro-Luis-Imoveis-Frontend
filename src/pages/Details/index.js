import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import * as S from "./styles";

import { NavBar, Footer, Loading, Maps } from "../../components";

import Lightbox from "fslightbox-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChartArea, FaBed, FaCarAlt, FaBath } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdModeEdit,
} from "react-icons/md";

const POST = gql`
  query Post($postId: ID!) {
    getPost(postId: $postId) {
      id
      name
      type
      description
      price
      info {
        area
        sale
        room
        suite
        garage
        spotlight
      }
      infoAdd
      address {
        street
        district
        city
        state
        latitude
        longitude
      }
      imagens {
        name
        key
        url
      }
      thumbnail {
        name
        key
        url
      }
      createdAt
    }
  }
`;

const LOGGED = gql`
  query {
    getLoggedUser {
      id
      userName
      profilePicture
    }
  }
`;

const Details = ({ match }) => {
  const { loading, data, error } = useQuery(POST, {
    variables: { postId: match.params.id },
  });

  const { data: admin, refetch } = useQuery(LOGGED, {
    fetchPolicy: "network-only",
  });

  const [lightBox, setLightBox] = useState({ toggle: false, slide: 0 });

  const defaultImg = require("../../assets/download.png");

  const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const settings = {
    className: "Gallery",
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 1000,
    arrows: false,
  };

  return (
    <>
      {!loading ? (
        <>
          <NavBar />

          <S.Container>
            <S.Intro>
              <S.IntroImg
                src={
                  data.getPost.thumbnail
                    ? data.getPost.thumbnail.url
                    : defaultImg
                }
              />

              <S.IntroTitle>{data.getPost.name}</S.IntroTitle>
              <Link
                to={`/admin/edit/${match.params.id}`}
                style={{
                  width: "100%",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {admin && admin.getLoggedUser && (
                  <S.EditButton>
                    <MdModeEdit />
                  </S.EditButton>
                )}
              </Link>
            </S.Intro>

            <S.Content>
              <S.MainContainer>
                <S.MainBlock>
                  <S.MainTitle>
                    Descrição{" "}
                    <S.MainSubtitle>{data.getPost.type}</S.MainSubtitle>
                  </S.MainTitle>
                  <S.MainText>{data.getPost.description}</S.MainText>
                </S.MainBlock>

                <S.MainBlock>
                  <S.MainTitle>
                    Galeria
                    <S.MainSubtitle>
                      {data.getPost.imagens.length}
                    </S.MainSubtitle>
                  </S.MainTitle>

                  <Lightbox
                    toggler={lightBox.toggle}
                    slide={lightBox.slide}
                    type="image"
                    sources={data.getPost.imagens.map((image) => image.url)}
                  />

                  <Slider {...settings}>
                    {data.getPost.imagens.map((image, index) => (
                      <S.Wrapper>
                        <img
                          key={image.key}
                          src={image.url}
                          className="Item"
                          onClick={() =>
                            setLightBox({
                              toggle: !lightBox.toggle,
                              slide: index + 1,
                            })
                          }
                        />
                      </S.Wrapper>
                    ))}
                  </Slider>
                </S.MainBlock>

                <S.MainBlock>
                  <S.MainTitle column={true}>
                    Localização
                    <S.MainSubtitle>
                      {data.getPost.address.street} -
                      {data.getPost.address.district} -
                      {data.getPost.address.city},{data.getPost.address.state}
                    </S.MainSubtitle>
                  </S.MainTitle>

                  <S.MapsContainer>
                    <Maps
                      latitute={parseFloat(data.getPost.address.latitude)}
                      longitude={parseFloat(data.getPost.address.longitude)}
                    />
                  </S.MapsContainer>
                </S.MainBlock>

                {data.getPost.infoAdd.length > 0 && (
                  <S.MainBlock>
                    <S.MainTitle>Informações Adicionais</S.MainTitle>
                    <S.MainText>
                      <S.MainList>
                        {data.getPost.infoAdd.map((info) => (
                          <S.MainListItem>
                            <S.MainListDot />
                            {info}
                          </S.MainListItem>
                        ))}
                      </S.MainList>
                    </S.MainText>
                  </S.MainBlock>
                )}
              </S.MainContainer>

              <S.SideContainer>
                <S.SideTitle>{data.getPost.info.sale}</S.SideTitle>

                <S.SideDetails>
                  <S.SideLabel>Area</S.SideLabel>
                  <S.SideValue>
                    {data.getPost.info.area}m<sup>2</sup>
                    <FaChartArea className="Icon" />
                  </S.SideValue>
                </S.SideDetails>
                <S.SideDetails>
                  <S.SideLabel>Quartos</S.SideLabel>
                  <S.SideValue>
                    {data.getPost.info.room}
                    <FaBed className="Icon" />
                  </S.SideValue>
                </S.SideDetails>

                <S.SideDetails>
                  <S.SideLabel>Garagem</S.SideLabel>
                  <S.SideValue>
                    {data.getPost.info.garage}
                    <FaCarAlt className="Icon" />
                  </S.SideValue>
                </S.SideDetails>

                <S.SideDetails>
                  <S.SideLabel>Suite</S.SideLabel>
                  <S.SideValue>
                    {data.getPost.info.suite}
                    <FaBath className="Icon" />
                  </S.SideValue>
                </S.SideDetails>

                <S.SidePrice>
                  {intlMonetary.format(data.getPost.price)}
                </S.SidePrice>
              </S.SideContainer>
            </S.Content>
          </S.Container>

          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
