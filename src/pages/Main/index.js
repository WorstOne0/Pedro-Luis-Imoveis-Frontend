import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../store/actions/search";

import { NavBar, Footer, Card, Loading, Tab } from "../../components";
import { useWindowSize } from "../../Hooks";

import { type, city, district, definition } from "../../data";

import * as S from "./styles";

import Select, { CheckboxSelect } from "@atlaskit/select";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  MdSearch,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const POSTS = gql`
  query SearchPost($query: Search!, $page: Int!) {
    searchPost(query: $query, page: $page) {
      docs {
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
        address {
          street
          district
          city
          state
        }
        thumbnail {
          url
        }
      }
    }
  }
`;

const Main = () => {
  const dispatch = useDispatch();

  const screen = useWindowSize();

  const { typeSelected, citySelected, districtSelected, realStateSelected } =
    useSelector((state) => state.search);

  const { loading, error, data } = useQuery(POSTS, {
    variables: {
      query: {
        typeSelected: null,
        citySelected: null,
        districtSelected: [],
        realStateSelected: null,
        sort: "-createdAt",
        spotlight: true,
        price: {
          min: 0,
          max: 1000000,
        },
        area: {
          min: 0,
          max: 2500,
        },
      },
      page: 1,
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const ImgCity =
    require("../../assets/nagatoshi-shimamura-ZLjMqugKoDA-unsplash.jpg").default;
  const TypingImg = require("../../assets/1_new_condo.gif").default;
  const AuthorSrcImg =
    require("../../assets/Captura_de_Tela__25_-removebg-preview.png").default;

  const deviceType = {
    desktopFull: {
      breakpoint: { max: 3000, min: 1700 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1315 },
      items: 3,
    },
    microTablet: {
      breakpoint: { max: 1315, min: 880 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 880, min: 0 },
      items: 1,
    },
  };
  const total = 0;

  return (
    <>
      <NavBar />

      <S.IntroContainer>
        <S.IntroImg url={ImgCity} />

        <S.IntroHeader>
          <S.IntroTopTitle>Pedro Luis Imóveis</S.IntroTopTitle>

          <S.IntroTitle>Encontre o Imóvel Perfeito para Você.</S.IntroTitle>
        </S.IntroHeader>

        <S.ContainerSearch>
          <S.SearchTitle>O Que Você Está Procurando?</S.SearchTitle>
          <S.Search>
            <S.IconSearch toggle={screen.width > 700}>
              <MdSearch />
            </S.IconSearch>

            <S.ContainerSelect>
              <Select
                styles={S.customStyles}
                options={type}
                value={typeSelected}
                onChange={(value) =>
                  dispatch(addSearch({ typeSelected: value }))
                }
                placeholder={"Venda"}
                isClearable={true}
              />
              <Select
                styles={S.customStyles}
                options={city}
                value={citySelected}
                onChange={(value) =>
                  dispatch(addSearch({ citySelected: value }))
                }
                placeholder={"Cidade"}
                isClearable={true}
              />
              <Select
                styles={S.customStyles}
                options={definition}
                value={realStateSelected}
                onChange={(value) =>
                  dispatch(addSearch({ realStateSelected: value }))
                }
                placeholder={"Tipo do Imóvel"}
                isClearable={true}
              />
              <CheckboxSelect
                styles={S.customStyles}
                options={district}
                value={districtSelected}
                onChange={(value) =>
                  dispatch(addSearch({ districtSelected: value }))
                }
                placeholder={"Bairro"}
                isClearable={true}
              />
            </S.ContainerSelect>

            <S.ContainerTab>
              <Tab tabs={["Venda", "Cidade", "Tipo", "Bairro"]}>
                <Select
                  styles={S.customStyles}
                  options={type}
                  value={typeSelected}
                  onChange={(value) =>
                    dispatch(addSearch({ typeSelected: value }))
                  }
                  placeholder={"Venda"}
                  isClearable={true}
                  isSearchable={false}
                />
                <Select
                  styles={S.customStyles}
                  options={city}
                  value={citySelected}
                  onChange={(value) =>
                    dispatch(addSearch({ citySelected: value }))
                  }
                  placeholder={"Cidade"}
                  isClearable={true}
                  isSearchable={false}
                />
                <Select
                  styles={S.customStyles}
                  options={definition}
                  value={realStateSelected}
                  onChange={(value) =>
                    dispatch(addSearch({ realStateSelected: value }))
                  }
                  placeholder={"Tipo do Imóvel"}
                  isClearable={true}
                  isSearchable={false}
                />
                <CheckboxSelect
                  styles={S.customStyles}
                  options={district}
                  value={districtSelected}
                  onChange={(value) =>
                    dispatch(addSearch({ districtSelected: value }))
                  }
                  placeholder={"Bairro"}
                  isClearable={true}
                  isSearchable={false}
                />
              </Tab>
            </S.ContainerTab>

            <Link
              to={{
                pathname: "/realEstate",
                state: {
                  scroll: true,
                },
              }}
              style={{ height: "100%" }}
            >
              {screen.width > 700 ? (
                <S.SearchButton>Procurar</S.SearchButton>
              ) : (
                <S.IconSearch toggle={screen.width < 700}>
                  <MdSearch />
                </S.IconSearch>
              )}
            </Link>
          </S.Search>
        </S.ContainerSearch>
      </S.IntroContainer>

      <S.MainContainer>
        <S.Spotlight>
          <S.SpotlightHeader>
            <S.SpotlightTitle>Destaques</S.SpotlightTitle>
            <S.SpotlightNumber>+{total}</S.SpotlightNumber>
          </S.SpotlightHeader>

          {!loading ? (
            <S.SpotlightSlider>
              <Carousel
                responsive={deviceType}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                removeArrowOnDeviceType={["microTablet", "mobile"]}
                deviceType={deviceType}
                containerClass="Carousel"
                dotListClass="Dot"
                itemClass="Item"
                sliderClass="Slider"
                customLeftArrow={
                  <S.CarouselLeftButton className="Arrow">
                    <MdKeyboardArrowLeft />
                  </S.CarouselLeftButton>
                }
                customRightArrow={
                  <S.CarouselRightButton className="Arrow">
                    <MdKeyboardArrowRight />
                  </S.CarouselRightButton>
                }
              >
                {data.searchPost.docs.map((item, index) => (
                  <Card key={item._id} realEstate={item} delay={index} />
                ))}
              </Carousel>
            </S.SpotlightSlider>
          ) : (
            <Loading height="530px" />
          )}
        </S.Spotlight>

        <S.ShowContainer>
          <S.ShowImgContainer>
            <S.ShowImg src={TypingImg} />
          </S.ShowImgContainer>

          <S.TypingContainer>
            <S.TypingTitle>
              <S.TypingTop>
                Encontre
                <TypistLoop interval={1000}>
                  {["o Apartamento", "a Casa", "o Sobrado", "o Terreno"].map(
                    (text, index) => (
                      <Typist
                        avgTypingDelay={100}
                        className="Typing"
                        key={index}
                      >
                        {text}
                        <Typist.Backspace count={text.length} delay={1000} />
                      </Typist>
                    )
                  )}
                </TypistLoop>
              </S.TypingTop>
              Ideal para Você
            </S.TypingTitle>

            <S.TypingText>
              Somos a Pedro Luis Imóveis. Venda, compra e avaliaçoes de imóveis.
              30 anos de aprendizado com a missão de proporcionar a nossos
              clientes a melhor experiência em serviços na compra, venda e
              avaliação do seu imóvel. Servir e o nosso próposito.
            </S.TypingText>

            <Link
              to={{
                pathname: "/realEstate",
                state: {
                  scroll: true,
                },
              }}
              style={{
                height: "auto",
                textDecoration: "none",
                cursor: "pointer",
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <S.TypingButton>Veja todos os Imóveis</S.TypingButton>
            </Link>
          </S.TypingContainer>
        </S.ShowContainer>

        <S.AuthorContainer>
          <S.AuthorImgContainer>
            <S.AuthorImg src={AuthorSrcImg} alt="Img" />
          </S.AuthorImgContainer>

          <S.AuthorMain>
            <S.AuthorTitle>
              Pedro Luis dos Santos
              <S.AuthorSubtitle>
                CRECI - F 17790/6ª Região - J 05992/6ª Região
              </S.AuthorSubtitle>
            </S.AuthorTitle>
            <S.AuthorDescription>
              A Pedro Luis Corretagem de Imóveis tem como corretor responsável
              Pedro Luis dos Santos; Profissional com 30 anos de aprendizado que
              conduz a experiência. Avaliador imobiliário inscrito no CNAI,
              conhecedor da documentação para a adequada regularização
              imobiliária, incorporação e instituição de condôminios,
              conhecimento e experiência a serviço da realização do seu sonho.
            </S.AuthorDescription>
            <S.AuthorDetails>
              <S.AuthorSocialMedia>
                <FaFacebookF
                  style={{ color: "#3b5998", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/PedroLuisCorretagem",
                      "_blank"
                    )
                  }
                />
                <FaInstagram
                  style={{ color: "#dc2743", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/pedroluisimoveis/",
                      "_blank"
                    )
                  }
                />
                <FaTwitter style={{ color: "#00acee", cursor: "pointer" }} />
                <FaWhatsapp
                  style={{ color: "green", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5545999671342&data=AbuwixlFUcZabSRVq_78-aloKzHUVGgo0N2MesnCUlw-_d4VrNOpOqFR4-vE_3GkY2Tw4GOcUtN5sCroFjzZVKx6sVmfAb6-t4VGPOPYHX5-7mGl316DsbpIMi4s-dScK5M&source=FB_Ads",
                      "_blank"
                    )
                  }
                />
              </S.AuthorSocialMedia>
            </S.AuthorDetails>
          </S.AuthorMain>
        </S.AuthorContainer>

        <S.ContainerContact>
          Não Encontrou o Que Procura?
          <Link
            to="/contact"
            style={{
              height: "auto",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <S.ContactButton>Fale Conosco!</S.ContactButton>
          </Link>
        </S.ContainerContact>
      </S.MainContainer>

      <Footer />
    </>
  );
};

export default Main;
