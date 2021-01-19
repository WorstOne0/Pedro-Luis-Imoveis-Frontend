import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Loading } from "../index";

import * as S from "./styles";

import Select from "@atlaskit/select";

import { FaSadTear } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const Showcase = () => {
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

  const realEstate = [];

  const prevPage = () => {};

  const nextPage = () => {};

  const goToPage = () => {};

  const handleSubmit = () => {};

  return (
    <Container>
      <ContainerShowcase ref={myRef}>
        <Header>
          <Title>
            <MdLocationCity />
            Imóveis
          </Title>
          <TitleDetails>{totalItems} Imóveis</TitleDetails>
        </Header>

        {false ? (
          totalItems === 0 ? (
            <Nothing>
              <FaSadTear className="Icon" />
              Desculpe, Não há resultados
            </Nothing>
          ) : (
            <Content>
              {realEstate.map((item, index) => (
                <Card key={item._id} realEstate={item} delay={index} />
              ))}
            </Content>
          )
        ) : (
          <Loading />
        )}

        <Page>
          <PageButton onClick={prevPage} page={pages.hasPrev}>
            Anterior
          </PageButton>
          <label>
            <Select
              styles={customStyles}
              options={arrayPages}
              value={{ value: pages.page, label: pages.page }}
              onChange={(value) => setPages({ ...pages, page: value.value })}
            />
            de {totalPages}
          </label>

          <PageButton onClick={nextPage} page={pages.hasNext}>
            Proximo
          </PageButton>
        </Page>
      </ContainerShowcase>

      <SearchBar handleSubmit={handleSubmit} />
    </Container>
  );
};

export default Showcase;
