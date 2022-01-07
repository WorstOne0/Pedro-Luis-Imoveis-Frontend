import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

import Svg from "../Svg";

import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdMailOutline, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <S.Container>
      <S.Top>
        <S.Left>
          <S.Menu>
            <S.MenuItem>Home</S.MenuItem>
            <S.MenuDot />
            <S.MenuItem>Imóveis</S.MenuItem>
            <S.MenuDot />
            <S.MenuItem>Contato</S.MenuItem>
          </S.Menu>

          <S.Details>
            <S.SocialMedia
              color="#3b5998"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/PedroLuisCorretagem/",
                  "_blank"
                )
              }
            >
              <FaFacebookF />
            </S.SocialMedia>

            <S.SocialMedia
              color="#dc2743"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/pedroluisimoveis/",
                  "_blank"
                )
              }
            >
              <FaInstagram />
            </S.SocialMedia>
            <S.SocialMedia color="#00acee">
              <FaTwitter />
            </S.SocialMedia>
          </S.Details>

          <S.ToTop onClick={() => scroll.scrollToTop()}>
            <MdKeyboardArrowUp />
          </S.ToTop>
        </S.Left>

        <S.Right>
          <Svg tam={170} />

          <S.Place>
            <S.PlaceDetails>
              <FaMapMarkerAlt />
              Rua Barão do Cerro Azul, 699, Centro
            </S.PlaceDetails>
            <S.PlaceDetails>
              <FaWhatsapp />
              (45) 9 9967-1342
            </S.PlaceDetails>
            <S.PlaceDetails>
              <FaPhone />
              (45) 3303-4265
            </S.PlaceDetails>
            <S.PlaceDetails>
              <MdMailOutline />
              contato@pedroluisimoveis.com.br
            </S.PlaceDetails>
          </S.Place>
        </S.Right>
      </S.Top>

      <S.Bottom>
        <S.FooterEnd
          onClick={() => window.open("https://github.com/WorstOne0", "_blank")}
        >
          <AiFillGithub className="Icon" /> GitHub/WorstOne0
        </S.FooterEnd>
        <Link
          to="/admin"
          style={{
            height: "auto",
            textDecoration: "none",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <S.FooterEnd>Admin</S.FooterEnd>
        </Link>
      </S.Bottom>
    </S.Container>
  );
};

export default Footer;
