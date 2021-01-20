import React, { useEffect } from "react";
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

/*
  fetchData = async () => {
    const search = {
      type: null,
      city: null,
      realState: null,
      district: [],
      spotlight: true,
      sort: "createdAt",
      price: { min: 0, max: 1000000000000 },
      area: { min: 0, max: 1000000000000 },
    };
*/

const Main = () => {
  const dispatch = useDispatch();

  const screen = useWindowSize();

  const {
    typeSelected,
    citySelected,
    districtSelected,
    realStateSelected,
  } = useSelector((state) => state.search);

  const ImgCity = require("../../assets/nagatoshi-shimamura-ZLjMqugKoDA-unsplash.jpg")
    .default;
  const TypingImg = require("../../assets/1_new_condo.gif").default;
  const AuthorSrcImg = require("../../assets/16649071_1113406715448385_828873973785613706_n.jpg")
    .default;

  const realEstate = [];
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
                  this.props.addSearch({ typeSelected: value })
                }
                placeholder={"Venda"}
                isClearable={true}
              />
              <Select
                styles={S.customStyles}
                options={city}
                value={citySelected}
                onChange={(value) =>
                  this.props.addSearch({ citySelected: value })
                }
                placeholder={"Cidade"}
                isClearable={true}
              />
              <Select
                styles={S.customStyles}
                options={definition}
                value={realStateSelected}
                onChange={(value) =>
                  this.props.addSearch({ realStateSelected: value })
                }
                placeholder={"Tipo do Imóvel"}
                isClearable={true}
              />
              <CheckboxSelect
                styles={S.customStyles}
                options={district}
                value={districtSelected}
                onChange={(value) =>
                  this.props.addSearch({ districtSelected: value })
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
                    this.props.addSearch({ typeSelected: value })
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
                    this.props.addSearch({ citySelected: value })
                  }
                  placeholder={"Cidade"}
                  isClearable={true}
                  isSearchable={false}
                />
                <Select
                  styles={S.customStyles}
                  options={district}
                  value={realStateSelected}
                  onChange={(value) =>
                    this.props.addSearch({ realStateSelected: value })
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
                    this.props.addSearch({ districtSelected: value })
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

          {false ? (
            <S.SpotlightSlider>
              <Carousel
                responsive={{
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
                }}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3500}
                removeArrowOnDeviceType={["microTablet", "mobile"]}
                deviceType={this.props.deviceType}
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
                {realEstate.map((item, index) => (
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
              30 anos de aprendizado com a missaão de proporcionar a nossos
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
              <S.AuthorSubtitle>Creci 123.456.78/123.456.78</S.AuthorSubtitle>
            </S.AuthorTitle>
            <S.AuthorDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              condimentum augue non hendrerit tempor. Donec id viverra orci, sit
              amet ultricies ex. Sed eu consectetur elit, a mattis metus. Donec
              interdum velit ornare facilisis pretium. Duis diam neque, finibus
              vitae varius sit amet, elementum a ex. Mauris ex tellus, interdum
              quis lorem eget, bibendum tincidunt lorem. Vivamus posuere libero
              sit amet pellentesque suscipit. Maecenas congue nec nisl in
              lacinia. Etiam nec pulvinar est. Suspendisse eu ipsum ullamcorper,
              interdum metus eget, efficitur diam.
            </S.AuthorDescription>
            <S.AuthorDetails>
              <S.AuthorSocialMedia>
                <FaFacebookF
                  style={{ color: "#3b5998", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/PedroLuisCorretagem/",
                      "_blank"
                    )
                  }
                />
                <FaInstagram style={{ color: "#dc2743", cursor: "pointer" }} />
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
