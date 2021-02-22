import React, { useState, useEffect, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import { Card, Loading, SearchBar } from "../index";

import * as S from "./styles";

import Select from "@atlaskit/select";

import { FaFileSignature, FaSadTear } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const POSTS = gql`
  query SearchPost($query: Search!) {
    searchPost(query: $query) {
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
        size
      }
      thumbnail {
        name
        key
        url
        size
      }
      createdAt
    }
  }
`;

const Showcase = () => {
  const {
    typeSelected,
    citySelected,
    districtSelected,
    realStateSelected,
    sort,
    spotlight,
    price,
    area,
  } = useSelector((state) => state.search);

  const { loading, error, data, refetch, setQueryData } = useQuery(POSTS, {
    variables: {
      query: {
        typeSelected: typeSelected && typeSelected.value,
        citySelected: citySelected && citySelected.value,
        districtSelected:
          districtSelected && districtSelected.map((value) => value.value),
        realStateSelected: realStateSelected && realStateSelected.value,
        sort,
        spotlight,
        price,
        area,
      },
    },
  });

  const [pages, setPages] = useState({
    page: 1,
    total: 1,
    hasPrev: false,
    hasNext: false,
  });

  const myRef = useRef();

  const prevPage = () => {};

  const nextPage = () => {};

  const goToPage = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    refetch({
      query: {
        typeSelected: typeSelected && typeSelected.value,
        citySelected: citySelected && citySelected.value,
        districtSelected: districtSelected.map((value) => value.value),
        realStateSelected: realStateSelected && realStateSelected.value,
        sort,
        spotlight,
        price,
        area,
      },
    });
  };

  console.log(data, loading, error);

  return (
    <S.Container>
      <S.ContainerShowcase ref={myRef}>
        <S.Header>
          <S.Title>
            <MdLocationCity />
            Imóveis
          </S.Title>
          <S.TitleDetails>
            {/*!loading && data.searchPost.length*/} Imóveis
          </S.TitleDetails>
        </S.Header>

        {!loading ? (
          data.searchPost.length === 0 ? (
            <S.Nothing>
              <FaSadTear className="Icon" />
              Desculpe, Não há resultados
            </S.Nothing>
          ) : (
            <S.Content>
              {data.searchPost.map((item, index) => (
                <Card key={item._id} realEstate={item} delay={index} />
              ))}
            </S.Content>
          )
        ) : (
          <Loading />
        )}

        <S.Page>
          <S.PageButton onClick={prevPage} page={pages.hasPrev}>
            Anterior
          </S.PageButton>
          {/*<label>
            <Select
              styles={S.customStyles}
              options={arrayPages}
              value={{ value: pages.page, label: pages.page }}
              onChange={(value) => setPages({ ...pages, page: value.value })}
            />
            de {totalPages}
          </label>*/}

          <S.PageButton onClick={nextPage} page={pages.hasNext}>
            Proximo
          </S.PageButton>
        </S.Page>
      </S.ContainerShowcase>

      <SearchBar handleSubmit={handleSubmit} />
    </S.Container>
  );
};

export default Showcase;
