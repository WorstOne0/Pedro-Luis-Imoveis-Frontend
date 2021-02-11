import React, { useState, useEffect, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import { Card, Loading } from "../index";

import * as S from "./styles";

import Select from "@atlaskit/select";

import { FaSadTear } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const POSTS = gql`
  query {
    posts {
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
  const { loading, error, data, refetch } = useQuery(POSTS);

  const dispatch = useDispatch();
  const {
    typeSelected,
    citySelected,
    districtSelected,
    realStateSelected,
  } = useSelector((state) => state.search);

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

  const handleSubmit = () => {};

  useEffect(() => {
    refetch();
  }, [refetch]);

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
            {!loading && data.posts.length} Imóveis
          </S.TitleDetails>
        </S.Header>

        {!loading ? (
          data.posts.length === 0 ? (
            <S.Nothing>
              <FaSadTear className="Icon" />
              Desculpe, Não há resultados
            </S.Nothing>
          ) : (
            <S.Content>
              {data.posts.map((item, index) => (
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

      {/*<SearchBar handleSubmit={handleSubmit} />*/}
    </S.Container>
  );
};

export default Showcase;
