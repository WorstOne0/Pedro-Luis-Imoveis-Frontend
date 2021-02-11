import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

import { FaChartArea, FaBed, FaCarAlt, FaStar, FaBath } from "react-icons/fa";

const Card = ({ realEstate, delay }) => {
  const defaultImg = require("../../assets/download.png");

  const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

  return (
    <S.Container delay={delay * 0.1}>
      <S.ContainerImg>
        <Link
          to={`details/${realEstate._id}`}
          style={{
            width: "100%",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <S.CardImg
            src={realEstate.thumbnail ? realEstate.thumbnail.url : defaultImg}
          />
        </Link>
        <S.Type>{realEstate.info.sale}</S.Type>

        <S.DescriptionIcons>
          {realEstate.spotlight && <FaStar />}
        </S.DescriptionIcons>
      </S.ContainerImg>

      <S.Description>
        <Link
          to={`details/${realEstate._id}`}
          style={{
            width: "100%",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <S.CardHeader>
            <S.Wrapper>
              <S.CardTitle>{realEstate.type}</S.CardTitle>
              <S.CardSubTitle>{realEstate.address.district}</S.CardSubTitle>
            </S.Wrapper>

            <S.Text>{realEstate.description.substr(0, 206)}...</S.Text>

            <S.Wrapper>
              <S.PriceLabel>Valor</S.PriceLabel>
              <S.Price>{intlMonetary.format(realEstate.price)}</S.Price>
            </S.Wrapper>
          </S.CardHeader>
        </Link>

        <S.CardDetails>
          {realEstate.info.room === "0"
            ? false
            : true && (
                <S.Details className="border">
                  <h1>{realEstate.info.room}</h1> <p>Quartos</p>
                </S.Details>
              )}

          {realEstate.info.garage === "0"
            ? false
            : true && (
                <S.Details>
                  <h1>{realEstate.info.garage}</h1> <p>Vagas</p>
                </S.Details>
              )}

          {realEstate.info.suite === "0"
            ? false
            : true && (
                <S.Details>
                  <h1>{realEstate.info.suite}</h1> <p>Suites</p>
                </S.Details>
              )}

          <S.Details className="Area">
            <h1>
              {realEstate.info.area}m<sup>2</sup>
            </h1>
            <p>Area</p>
          </S.Details>
        </S.CardDetails>
      </S.Description>
    </S.Container>
  );
};

export default Card;
