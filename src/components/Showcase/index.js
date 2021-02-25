import React, { useState, useEffect, useRef } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

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

  const [searchPost, { loading, error, data }] = useLazyQuery(POSTS);

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

  console.log(data);

  const [pages, setPages] = useState({
    page: 1,
    total: 1,
    hasPrev: false,
    hasNext: false,
  });

  const myRef = useRef();

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

  const goToPage = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(sort);

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
