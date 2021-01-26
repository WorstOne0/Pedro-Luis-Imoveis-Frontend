import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

import { isEmpty, uniqueId } from "lodash";
import filesize from "filesize";

import { Loading, InputText } from "../../components";

import { type, city, district, definition } from "../../data";

import * as S from "./styles";

import Select from "@atlaskit/select";
import { Checkbox } from "@atlaskit/checkbox";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  FaChartArea,
  FaBed,
  FaCarAlt,
  FaBath,
  FaUserCircle,
  FaMoneyBillWaveAlt,
  FaMapMarkedAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaTrashAlt,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import {
  MdCloudUpload,
  MdKeyboardBackspace,
  MdLocationOn,
} from "react-icons/md";

const LOGGED = gql`
  query {
    getLoggedUser {
      id
      userName
      profilePicture
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost(
    $name: String!
    $type: String!
    $description: String
    $price: Int!
    $info: InfoInput!
    $infoAdd: [String!]
    $address: AddressInput!
    $imagens: [ImageInput!]
    $thumbnail: ImageInput!
  ) {
    addPost(
      name: $name
      type: $type
      description: $description
      price: $price
      info: $info
      infoAdd: $infoAdd
      address: $address
      imagens: $imagens
      thumbnail: $thumbnail
    ) {
      id
    }
  }
`;

const AddPage = () => {
  const history = useHistory();

  const { loading, error, data, refetch } = useQuery(LOGGED);
  const [addPost] = useMutation(ADD_POST);

  const [text, setText] = useState({
    name: "",
    definitionSelected: null,
    description: "",
    price: "",
    area: "",
    suite: "",
    room: "",
    garage: "",
    typeSelected: null,
    street: "",
    districtSelected: null,
    latitude: "",
    longitude: "",
    spotlight: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [thumbnail, setThumbnail] = useState({});

  const [errors, setErrors] = useState({
    error: ["Documento vazio"],
    errorTest: [],
    formIsValid: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleSubmit = () => {
    const {
      name,
      definitionSelected,
      description,
      price,
      area,
      suite,
      room,
      garage,
      typeSelected,
      street,
      districtSelected,
      latitude,
      longitude,
      spotlight,
    } = text;

    addPost({
      variables: {
        name,
        type,
        description,
        price,
        info: {
          area,
          room,
          suite,
          garage,
          spotlight,
          sale: definitionSelected,
        },
        infoAdd: [],
        address: {
          street,
          districtSelected,
          city: "Cascavel",
          state: "PR",
          latitude,
          longitude,
        },
      },
    });
  };

  const handleDeleteFile = (file) => {
    setUploadedFiles(
      uploadedFiles.filter((uploadedFile) => uploadedFile.id !== file.id)
    );
  };

  const handleTitleFile = (files) => {
    if (!files.length) {
      return "Escolha um Arquivo";
    } else if (files.length === 1) {
      return files[0].name.length > 27
        ? `${files[0].name.substring(0, 27)}...`
        : files[0].name;
    } else {
      return `${files.length} Arquivos Selecionados`;
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : data.getLoggedUser === null ? (
        <S.Error>You Shall not Pass</S.Error>
      ) : (
        <>
          <S.Container>
            <S.Left>
              <S.TitleLeft>
                <S.GoBack onClick={() => history.goBack()}>
                  <MdKeyboardBackspace />
                </S.GoBack>
                Adicionar um Imóvel
              </S.TitleLeft>

              <S.Form onSubmit={handleSubmit} id="form">
                <S.ContainerAddress>
                  <S.StyleAddress>
                    <InputText
                      value={text.name}
                      setValue={(event) => {
                        event.preventDefault();

                        setText({ ...text, name: event.target.value });
                      }}
                      name="Name"
                      borderColor={"var(--color-primary)"}
                      borderColorHover={"var(--color-primary-hover-lighter)"}
                      backgroundName={"var(--color-white)"}
                      color={"var(--color-black)"}
                      colorLabel={"var(--color-primary)"}
                    />
                  </S.StyleAddress>

                  <S.StyleAddress>
                    <Select
                      styles={S.selectWithoutBorder}
                      options={definition}
                      value={text.definitionSelected}
                      onChange={(value) =>
                        setText({ ...text, definitionSelected: value })
                      }
                      placeholder={"Definição"}
                      isClearable={true}
                    />
                  </S.StyleAddress>
                </S.ContainerAddress>

                <S.TextArea
                  placeholder="Descrição"
                  name="description"
                  value={text.description}
                  onChange={(event) => {
                    event.preventDefault();

                    setText({ ...text, description: event.target.value });
                  }}
                  autoComplete="off"
                />

                <S.Section>Detalhes</S.Section>

                <S.ContainerDetails>
                  <div className="Left">
                    <S.StyleInput>
                      <InputText
                        value={text.price}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({ ...text, price: event.target.value });
                        }}
                        name="Valor"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />
                      <S.CompInput>Reais</S.CompInput>
                    </S.StyleInput>

                    <S.StyleInput>
                      <InputText
                        value={text.area}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            area: event.target.value,
                          });
                        }}
                        name="Area"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />

                      <S.CompInput>
                        m<sup>2</sup>
                      </S.CompInput>
                    </S.StyleInput>

                    <S.StyleInput>
                      <InputText
                        value={text.suite}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            suite: event.target.value,
                          });
                        }}
                        name="Suite"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />
                    </S.StyleInput>
                  </div>
                  <div className="Right">
                    <Select
                      styles={S.customStyles}
                      options={type}
                      value={text.typeSelected}
                      onChange={(value) =>
                        setText({ ...text, typeSelected: value })
                      }
                      placeholder={"Tipo"}
                      isClearable={true}
                    />

                    <S.StyleInput>
                      <InputText
                        value={text.room}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            room: event.target.value,
                          });
                        }}
                        name="Quartos"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />
                    </S.StyleInput>

                    <S.StyleInput>
                      <InputText
                        value={text.garage}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            garage: event.target.value,
                          });
                        }}
                        name="Garage"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />
                    </S.StyleInput>
                  </div>
                </S.ContainerDetails>

                <S.StyleCheckBox>
                  <FaStar
                    className="Checked"
                    check={"flex"}
                    onClick={() => this.setState({ destaque: false })}
                  />
                  <FaRegStar
                    className="Unchecked"
                    check={"none"}
                    onClick={() => this.setState({ destaque: true })}
                  />
                  Destaque
                </S.StyleCheckBox>

                <S.Section>Localização</S.Section>

                <S.ContainerAddress>
                  <S.IconShelter>
                    <MdLocationOn />
                  </S.IconShelter>

                  <S.StyleAddress>
                    <InputText
                      value={text.street}
                      setValue={(event) => {
                        event.preventDefault();

                        setText({
                          ...text,
                          street: event.target.value,
                        });
                      }}
                      name="Rua"
                      borderColor={"var(--color-primary)"}
                      borderColorHover={"var(--color-primary-hover-lighter)"}
                      backgroundName={"var(--color-white)"}
                      color={"var(--color-black)"}
                      colorLabel={"var(--color-primary)"}
                    />
                  </S.StyleAddress>

                  <S.StyleAddress>
                    <Select
                      styles={S.selectWithoutBorder}
                      options={district}
                      value={text.districtSelected}
                      onChange={(value) =>
                        setText({ ...text, districtSelected: value })
                      }
                      placeholder={"Bairro"}
                      isClearable={true}
                    />
                  </S.StyleAddress>

                  <label>Cascavel/PR</label>
                </S.ContainerAddress>

                <S.ContainerDetails>
                  <div className="Left">
                    <S.StyleInput>
                      <FaMapMarkedAlt className="Icon" />
                      <InputText
                        value={text.latitude}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            latitude: event.target.value,
                          });
                        }}
                        name="Latitude"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />
                    </S.StyleInput>
                  </div>
                  <div className="Right">
                    <S.StyleInput>
                      <FaMapMarkedAlt className="Icon" />
                      <InputText
                        value={text.longitude}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            longitude: event.target.value,
                          });
                        }}
                        name="Longitude"
                        borderColor={"var(--color-primary)"}
                        borderColorHover={"var(--color-primary-hover-lighter)"}
                        backgroundName={"var(--color-white)"}
                        color={"var(--color-black)"}
                        colorLabel={"var(--color-primary)"}
                      />
                    </S.StyleInput>
                  </div>
                </S.ContainerDetails>

                <S.Section>Topicos Adicionais</S.Section>

                {/**<ToDo list={null} />

                <S.Section>Imagens</S.Section>

                <S.InputFile for="FileUpload">
                  <MdCloudUpload className="IconTitle" />
                  {this.handleTitleFile(uploadedFiles)}
                </S.InputFile>
                <Input
                  name="files"
                  type="file"
                  multiple="multiple"
                  className="InputFile"
                  id="FileUpload"
                  onChange={this.handleInputFile}
                />

                {!isEmpty(uploadedFiles) && (
                  <ImgContainer>
                    {uploadedFiles.map((file) => (
                      <ImgWithProgress>
                        <FaTrashAlt
                          className="Delete"
                          onClick={() => this.handleDeleteFile(file)}
                        />
                        <ImgUpload src={file.preview} />
                        {file.error && (
                          <FaExclamationCircle className="Error" />
                        )}
                        {file.uploaded && <FaCheckCircle className="Check" />}
                        {!file.uploaded && (
                          <CircularProgressbar
                            className="Progress"
                            value={file.progress}
                          />
                        )}
                      </ImgWithProgress>
                    ))}
                  </ImgContainer>
                )}

                <Section>Thumbnail</Section>

                <InputFile for="FileUploadThumb">
                  <MdCloudUpload className="IconTitle" />
                  {this.handleTitleFile(thumb)}
                </InputFile>
                <Input
                  name="files"
                  type="file"
                  className="InputFile"
                  id="FileUploadThumb"
                  onChange={this.handleInputThumb}
                />

                {!isEmpty(thumb) && (
                  <ImgContainer>
                    <ImgWithProgress>
                      <FaTrashAlt
                        className="Delete"
                        onClick={this.handleDeleteThumb}
                      />
                      <ImgUpload src={thumb.preview} />
                      {thumb.error && <FaExclamationCircle className="Error" />}
                      {thumb.uploaded && <FaCheckCircle className="Check" />}
                      {!thumb.uploaded && (
                        <CircularProgressbar
                          className="Progress"
                          value={thumb.progress}
                        />
                      )}
                    </ImgWithProgress>
                    ))
                  </ImgContainer>
                )} */}
              </S.Form>
            </S.Left>

            <S.Right>
              {/*this.state.formIsValid ? (
                this.state.isFinished ? (
                  <SubmitMsg>
                    {this.state.totalImgs == uploadedFiles.length + 1 ? (
                      <>
                        <FaCheckCircle className="Accepted" />
                        Imóvel adicionado com sucesso!
                      </>
                    ) : (
                      <>
                        <Loading
                          height={"auto"}
                          width={"auto"}
                          color={"transparent"}
                          svg={"#fff"}
                        />
                        Adicionando imagens... {this.state.totalImgs} /{" "}
                        {uploadedFiles.length + 1}
                      </>
                    )}
                  </SubmitMsg>
                ) : (
                  <>
                    <SubmitMsg>
                      <FaCheckCircle className="Accepted" />
                      Pronto para enviar
                    </SubmitMsg>
                    <Submit
                      type="submit"
                      form="form"
                      /*onClick={() => this.setState({ isUploading: true })}
                    >
                      Adicionar
                    </Submit>
                  </>
                )
              ) : (
                <ValidationContainer>
                  {error.map((erro) => (
                    <ValidationMsg>
                      <FaExclamationCircle className="Rejected" />
                      {erro}
                    </ValidationMsg>
                  ))}
                </ValidationContainer>
              )*/}
            </S.Right>
          </S.Container>
        </>
      )}
    </>
  );
};

export default AddPage;
