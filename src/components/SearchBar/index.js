import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../store/actions/search";

import { useWindowSize } from "../../Hooks";

import { type, city, district, definition } from "../../data";

import * as S from "./styles";

import Select, { CheckboxSelect } from "@atlaskit/select";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { FaClock, FaStar } from "react-icons/fa";
import {
  MdSearch,
  MdKeyboardArrowDown,
  MdSortByAlpha,
  MdAttachMoney,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

const SearchBar = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const {
    typeSelected,
    citySelected,
    districtSelected,
    realStateSelected,
    spotlight,
    price,
    area,
  } = useSelector((state) => state.search);

  const screen = useWindowSize();

  const [display, setDisplay] = useState({ height: "0px", iconRotate: "0deg" });
  const [filterOrder, setFilterOrder] = useState({
    selectedTime: true,
    ascTime: false,
    selectedAZ: false,
    ascAZ: false,
    selectedPrice: false,
    ascPrice: false,
    selectedSpotlight: false,
  });

  const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const handleOptionDisplay = () => {
    setDisplay({
      height: display.height === "0px" ? `${(screen * 40) / 100}px` : "0px",
      iconRotate: display.iconRotate === "0deg" ? "180deg" : "0deg",
    });
  };

  const handleSelectTime = () => {
    setFilterOrder({
      selectedTime: true,
      ascTime: filterOrder.selectedTime && !filterOrder.ascTime,
      selectedAZ: false,
      ascAZ: false,
      selectedPrice: false,
      ascPrice: false,
    });
  };

  const handleSelectAZ = () => {
    setFilterOrder({
      selectedTime: false,
      ascTime: false,
      selectedAZ: true,
      ascAZ: filterOrder.selectedAZ && !filterOrder.ascAZ,
      selectedPrice: false,
      ascPrice: false,
    });
  };

  const handleSelectPrice = () => {
    setFilterOrder({
      selectedTime: false,
      ascTime: false,
      selectedAZ: false,
      ascAZ: false,
      selectedPrice: true,
      ascPrice: filterOrder.selectedPrice && !filterOrder.ascPrice,
    });
  };

  const handleSortString = () => {
    const {
      selectedTime,
      ascTime,
      selectedAZ,
      ascAZ,
      selectedPrice,
      ascPrice,
      selectedSpotlight,
    } = filterOrder;

    let sort = "";

    if (selectedTime)
      ascTime
        ? (sort = sort.concat("createdAt"))
        : (sort = sort.concat("-createdAt"));
    if (selectedAZ)
      ascAZ ? (sort = sort.concat("name")) : (sort = sort.concat("-name"));
    if (selectedPrice)
      ascPrice ? (sort = sort.concat("price")) : (sort = sort.concat("-price"));

    if (selectedSpotlight) sort = sort.concat(" spotlight");

    dispatch(addSearch({ sort }));
  };

  return (
    <S.SideContainer>
      <S.SideContainerTitle>
        <MdSearch />
        Procurar
      </S.SideContainerTitle>

      <S.Filter>
        <S.ContainerSelect onSubmit={handleSubmit}>
          <S.DivisorLeft>
            <Select
              styles={S.customStyles}
              options={type}
              value={typeSelected}
              onChange={(value) => dispatch(addSearch({ typeSelected: value }))}
              placeholder={"Venda"}
              isClearable={true}
            />
            <Select
              styles={S.customStyles}
              options={city}
              value={citySelected}
              onChange={(value) => dispatch(addSearch({ citySelected: value }))}
              placeholder={"Cidade"}
              isClearable={true}
            />
          </S.DivisorLeft>

          <S.DivisorRight>
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
          </S.DivisorRight>
        </S.ContainerSelect>
        <S.AdvancedOptions>
          <S.OptionsTitle onClick={handleOptionDisplay}>
            Opções Avançadas
            <MdKeyboardArrowDown
              style={{
                fontSize: 20,
                transform: `rotate(${display.iconRotate})`,
                transition: "all 0.5s ease-in-out",
              }}
            />
          </S.OptionsTitle>
          <S.Options height={display.height}>
            <S.DetailsSlider>
              <S.LabelSlider>
                <S.ValueSliderLeft>
                  {intlMonetary.format(price.min)}
                </S.ValueSliderLeft>
                Preço
                <S.ValueSliderRight>
                  {`${price.max === 1000000 ? "+" : ""} ${intlMonetary.format(
                    price.max
                  )}`}
                </S.ValueSliderRight>
              </S.LabelSlider>
              <InputRange
                minValue={0}
                maxValue={1000000}
                step={50000}
                formatLabel={(value) => ``}
                value={price}
                onChange={(value) => dispatch(addSearch({ price: value }))}
              />
            </S.DetailsSlider>

            <S.DetailsSlider>
              <S.LabelSlider>
                <S.ValueSliderLeft>
                  {area.min} m<sup>2</sup>
                </S.ValueSliderLeft>
                Area
                <S.ValueSliderRight>
                  {`${area.max === 2500 ? "+" : ""} ${area.max}`}m<sup>2</sup>
                </S.ValueSliderRight>
              </S.LabelSlider>
              <InputRange
                minValue={0}
                maxValue={2500}
                step={50}
                formatLabel={(value) => ``}
                value={area}
                onChange={(value) => dispatch(addSearch({ area: value }))}
              />
            </S.DetailsSlider>

            <S.DetailsButtons>
              <S.LabelButton>Ordenar Por</S.LabelButton>
              <div>
                <S.Buttons
                  selected={filterOrder.selectedTime}
                  onClick={handleSelectTime}
                >
                  {filterOrder.selectedTime && !filterOrder.ascTime && (
                    <MdArrowDropDown className="Arrow" />
                  )}
                  {filterOrder.selectedTime && filterOrder.ascTime && (
                    <MdArrowDropUp className="Arrow" />
                  )}
                  <FaClock />
                </S.Buttons>
                <S.Buttons
                  selected={filterOrder.selectedAZ}
                  onClick={handleSelectAZ}
                >
                  {filterOrder.selectedAZ && !filterOrder.ascAZ && (
                    <MdArrowDropDown className="Arrow" />
                  )}
                  {filterOrder.selectedAZ && filterOrder.ascAZ && (
                    <MdArrowDropUp className="Arrow" />
                  )}
                  <MdSortByAlpha />
                </S.Buttons>
              </div>
              <div>
                <S.Buttons
                  selected={filterOrder.selectedPrice}
                  onClick={handleSelectPrice}
                >
                  {filterOrder.selectedPrice && !filterOrder.ascPrice && (
                    <MdArrowDropDown className="Arrow" />
                  )}
                  {filterOrder.selectedPrice && filterOrder.ascPrice && (
                    <MdArrowDropUp className="Arrow" />
                  )}
                  <MdAttachMoney />
                </S.Buttons>
                <S.Buttons
                  selected={spotlight}
                  onClick={() =>
                    dispatch(
                      addSearch({
                        spotlight: !spotlight,
                      })
                    )
                  }
                >
                  <FaStar />
                </S.Buttons>
              </div>
            </S.DetailsButtons>
          </S.Options>
        </S.AdvancedOptions>
        <S.Search onClick={handleSubmit}>Procurar</S.Search>
      </S.Filter>
    </S.SideContainer>
  );
};

export default SearchBar;
