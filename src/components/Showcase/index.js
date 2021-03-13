import React, { useState, useEffect, useRef } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useSelector } from "react-redux";

import { Card, Loading, SearchBar } from "../index";

import * as S from "./styles";

import Select from "@atlaskit/select";

import { FaFileSignature, FaSadTear } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

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
      totalDocs
      totalPages
      page
      hasPrevPage
      hasNextPage
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

  const [searchPost, { loading, error, data }] = useLazyQuery(POSTS, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    searchPost({
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
        page: 1,
      },
    });
  }, []);

  const myRef = useRef();

  let arrayPages = [];
  if (data) {
    for (let i = 1; i <= data.searchPost.totalPages; i++) {
      arrayPages.push({ value: i, label: i });
    }
  }

  const prevPage = () => {
    if (!data.searchPost.hasPrevPage) return;

    searchPost({
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
        page: data.searchPost.page - 1,
      },
    });
  };

  const nextPage = () => {
    if (!data.searchPost.hasNextPage) return;

    searchPost({
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
        page: data.searchPost.page + 1,
      },
    });
  };

  const goToPage = (page) => {
    searchPost({
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
        page,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchPost({
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
        page: 1,
      },
    });
  };

  return (
    <S.Container>
      <S.ContainerShowcase ref={myRef}>
        <S.Header>
          <S.Title>
            <MdLocationCity />
            Imóveis
          </S.Title>
          <S.TitleDetails>
            {data && data.searchPost.totalDocs} Imóveis
          </S.TitleDetails>
        </S.Header>

        {data ? (
          data.searchPost.docs.length === 0 ? (
            <S.Nothing>
              <FaSadTear className="Icon" />
              Desculpe, Não há resultados
            </S.Nothing>
          ) : (
            <S.Content>
              {data.searchPost.docs.map((item, index) => (
                <Card key={item._id} realEstate={item} delay={index} />
              ))}
            </S.Content>
          )
        ) : (
          <Loading />
        )}

        {data && (
          <S.Page>
            <S.PageButton onClick={prevPage} page={data.searchPost.hasPrevPage}>
              Anterior
            </S.PageButton>
            {
              <label>
                <Select
                  styles={S.customStyles}
                  options={arrayPages}
                  value={{
                    value: data.searchPost.page,
                    label: data.searchPost.page,
                  }}
                  onChange={(value) => goToPage(value.value)}
                />
                de {data.searchPost.totalPages}
              </label>
            }

            <S.PageButton onClick={nextPage} page={data.searchPost.hasNextPage}>
              Proximo
            </S.PageButton>
          </S.Page>
        )}
      </S.ContainerShowcase>

      <SearchBar handleSubmit={handleSubmit} />
    </S.Container>
  );
};

export default Showcase;
