import React, { useState } from "react";
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

  handleDeleteFile = (file) => {
    setUploadedFiles(
      uploadedFiles.filter((uploadedFile) => uploadedFile.id !== file.id)
    );
  };

  handleTitleFile = (files) => {
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
          <Container>
            <Left>
              <TitleLeft>
                <GoBack onClick={() => history.goBack()}>
                  <MdKeyboardBackspace />
                </GoBack>
                Adicionar um Imóvel
              </TitleLeft>

              <Form onSubmit={handleSubmit} id="form">
                <ContainerAddress>
                  <IconShelter>
                    <FaUserCircle className="Icon" />
                  </IconShelter>

                  <StyleAddress>
                    <InputText
                      value={text.name}
                      setValue={(event) => {
                        event.preventDefault();

                        setText({ ...text, name: event.target.value });
                      }}
                      name="Name"
                      borderColor={"var(--color-primary-hover-lighter)"}
                      borderColorHover={"var(--color-white)"}
                      backgroundName={"var(--color-primary)"}
                    />
                  </StyleAddress>

                  <StyleAddress>
                    <Select
                      styles={selectWithoutBorder}
                      options={definition}
                      value={definitionSelected}
                      onChange={(value) =>
                        this.setState({ definitionSelected: value }, () =>
                          this.handleValidation()
                        )
                      }
                      placeholder={"Definição"}
                      isClearable={true}
                    />
                  </StyleAddress>
                </ContainerAddress>

                <TextArea
                  placeholder="Descrição"
                  name="description"
                  value={description}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />

                <Section>Detalhes</Section>

                <ContainerDetails>
                  <div className="Left">
                    <StyleInput>
                      <FaMoneyBillWaveAlt className="Icon" />

                      <InputText
                        value={text.price}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({ ...text, price: event.target.value });
                        }}
                        name="Valor"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />
                      <CompInput>Reais</CompInput>
                    </StyleInput>

                    <StyleInput>
                      <FaChartArea className="Icon" />
                      <InputText
                        value={text.info.area}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            info: { ...text.info, area: event.target.value },
                          });
                        }}
                        name="Area"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />

                      <CompInput>
                        m<sup>2</sup>
                      </CompInput>
                    </StyleInput>

                    <StyleInput>
                      <FaBath className="Icon" />
                      <InputText
                        value={text.info.suite}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            info: { ...text.info, suite: event.target.value },
                          });
                        }}
                        name="Suite"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />
                    </StyleInput>
                  </div>
                  <div className="Right">
                    <Select
                      styles={customStyles}
                      options={type}
                      value={typeSelected}
                      onChange={(value) =>
                        this.setState({ typeSelected: value }, () =>
                          this.handleValidation()
                        )
                      }
                      placeholder={"Tipo"}
                      isClearable={true}
                    />

                    <StyleInput>
                      <FaBed className="Icon" />,
                      <InputText
                        value={text.info.room}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            info: { ...text.info, room: event.target.value },
                          });
                        }}
                        name="Quartos"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />
                    </StyleInput>

                    <StyleInput>
                      <FaCarAlt className="Icon" />
                      <InputText
                        value={text.info.garage}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            info: { ...text.info, garage: event.target.value },
                          });
                        }}
                        name="Garage"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />
                    </StyleInput>
                  </div>
                </ContainerDetails>

                <StyleCheckBox>
                  <FaStar
                    className="Checked"
                    check={this.state.destaque ? "flex" : "none"}
                    onClick={() => this.setState({ destaque: false })}
                  />
                  <FaRegStar
                    className="Unchecked"
                    check={this.state.destaque ? "none" : "flex"}
                    onClick={() => this.setState({ destaque: true })}
                  />
                  Destaque
                </StyleCheckBox>

                <Section>Localização</Section>

                <ContainerAddress>
                  <IconShelter>
                    <MdLocationOn />
                  </IconShelter>

                  <StyleAddress>
                    <InputText
                      value={text.address.street}
                      setValue={(event) => {
                        event.preventDefault();

                        setText({
                          ...text,
                          address: {
                            ...text.address,
                            street: event.target.value,
                          },
                        });
                      }}
                      name="Rua"
                      borderColor={"var(--color-primary-hover-lighter)"}
                      borderColorHover={"var(--color-white)"}
                      backgroundName={"var(--color-primary)"}
                    />
                  </StyleAddress>

                  <StyleAddress>
                    <Select
                      styles={selectWithoutBorder}
                      options={district}
                      value={districtSelected}
                      onChange={(value) =>
                        this.setState({ districtSelected: value }, () =>
                          this.handleValidation()
                        )
                      }
                      placeholder={"Bairro"}
                      isClearable={true}
                    />
                  </StyleAddress>

                  <label>Cascavel/PR</label>
                </ContainerAddress>

                <ContainerDetails>
                  <div className="Left">
                    <StyleInput>
                      <FaMapMarkedAlt className="Icon" />
                      <InputText
                        value={text.address.latitude}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            address: {
                              ...text.latitude,
                              street: event.target.value,
                            },
                          });
                        }}
                        name="Latitude"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />
                    </StyleInput>
                  </div>
                  <div className="Right">
                    <StyleInput>
                      <FaMapMarkedAlt className="Icon" />
                      <InputText
                        value={text.address.longitude}
                        setValue={(event) => {
                          event.preventDefault();

                          setText({
                            ...text,
                            address: {
                              ...text.longitude,
                              street: event.target.value,
                            },
                          });
                        }}
                        name="Longitude"
                        borderColor={"var(--color-primary-hover-lighter)"}
                        borderColorHover={"var(--color-white)"}
                        backgroundName={"var(--color-primary)"}
                      />
                    </StyleInput>
                  </div>
                </ContainerDetails>

                <Section>Topicos Adicionais</Section>

                <ToDo list={null} />

                <Section>Imagens</Section>

                <InputFile for="FileUpload">
                  <MdCloudUpload className="IconTitle" />
                  {this.handleTitleFile(uploadedFiles)}
                </InputFile>
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
                )}
              </Form>
            </Left>

            <Right>
              {this.state.formIsValid ? (
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
                      /*onClick={() => this.setState({ isUploading: true })}*/
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
              )}
            </Right>
          </Container>
        </>
      )}
    </>
  );
};

export default AddPage;
