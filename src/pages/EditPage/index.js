import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Loading, InputText, ToDo, DropZone, Gallery } from "../../components";

import { type, district, definition } from "../../data";

import s3 from "../../services/aws-s3";

import * as S from "./styles";

import Select from "@atlaskit/select";
import "react-circular-progressbar/dist/styles.css";

import {
  FaChartArea,
  FaBed,
  FaCarAlt,
  FaBath,
  FaMoneyBillWaveAlt,
  FaMapMarkedAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { MdKeyboardBackspace, MdLocationOn } from "react-icons/md";

const LOGGED = gql`
  query {
    getLoggedUser {
      id
      userName
      profilePicture
    }
  }
`;

const GET_POST = gql`
  query Post($postId: ID!) {
    getPost(postId: $postId) {
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

const EditPage = ({ match }) => {
  const history = useHistory();

  const { loading: loadingUser, data: user } = useQuery(LOGGED);
  const { loading, data } = useQuery(GET_POST, {
    variables: { postId: match.params.id },
    onCompleted: (data) => {
      const {
        name,
        description,
        type,
        price,
        info,
        address,
        infoAdd,
        imagens,
        thumbnail: thumb,
      } = data.getPost;

      setText({
        name: name,
        definitionSelected: {
          value: type,
          label: type,
        },
        description: description,
        price: price,
        area: info.area,
        room: info.room,
        suite: info.suite,
        garage: info.garage,
        typeSelected: {
          value: info.sale,
          label: info.sale,
        },
        street: address.street,
        districtSelected: {
          value: address.district,
          label: address.district,
        },
        latitude: address.latitude,
        longitude: address.longitude,
        spotlight: info.spotlight,
      });

      setUploadedFiles(
        imagens.map((imagem) => ({
          name: imagem.name,
          preview: imagem.url,
          url: imagem.url,
        }))
      );

      setThumbnail([
        ...thumbnail,
        {
          name: thumb.name,
          preview: thumb.url,
          url: thumb.url,
        },
      ]);

      setUpload(true);
      setUploadThumb(true);
    },
  });
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

  const todoList = useSelector((state) => state.todoList);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [upload, setUpload] = useState(false);

  const [thumbnail, setThumbnail] = useState([]);
  const [uploadThumb, setUploadThumb] = useState(false);

  const [control, setControl] = useState({
    error: ["Documento vazio"],
    formIsValid: false,
    isUploading: false,
    isUploaded: false,
  });

  useEffect(() => {
    if (uploadedFiles.length === 0) setUpload(false);

    if (thumbnail.length === 0) setUploadThumb(false);
  }, [uploadedFiles, thumbnail]);

  useEffect(() => {
    handleValidation();
  }, [text]);

  const uploadToS3 = async () => {
    const res = await s3.uploadFile(
      thumbnail[0].file,
      `${Date.now()}${thumbnail[0].file.name}`
    );
    thumbnail[0].url = res.location;
    thumbnail[0].id = res.key;

    return await Promise.all(
      uploadedFiles.map(async (file) => {
        const res = await s3.uploadFile(
          file.file,
          `${Date.now()}${file.file.name}`
        );

        file.url = res.location;
        file.id = res.key;
        return res;
      })
    );
  };

  const handleValidation = () => {
    const {
      name,
      definitionSelected,
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
    } = text;

    let error = [],
      errorTest = {
        nameSize: true,
        definition: true,
        priceIsNumber: true,
        areaIsNumber: true,
        suiteIsNumber: true,
        roomIsNumber: true,
        garageIsNumber: true,
        type: true,
        streetSize: true,
        district: true,
        latitude: true,
        longitude: true,
        required: true,
      };

    if (name.length < 4 || name.length > 30) {
      errorTest = { ...errorTest, nameSize: true };

      name !== "" &&
        (error = [...error, "Nome deve ter entre 4 a 30 caracteres"]);
    } else {
      errorTest = { ...errorTest, nameSize: false };
    }

    if (street.length < 4 || street.length > 30) {
      errorTest = { ...errorTest, streetSize: true };

      street !== "" &&
        (error = [...error, "Rua deve ter entre 4 a 30 caracteres"]);
    } else {
      errorTest = { ...errorTest, streetSize: false };
    }

    definitionSelected === null
      ? (errorTest = { ...errorTest, definition: true })
      : (errorTest = { ...errorTest, definition: false });

    if (isNaN(parseInt(price))) {
      errorTest = { ...errorTest, priceIsNumber: true };

      price !== "" && (error = [...error, "Valor tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, priceIsNumber: false };
    }

    if (isNaN(parseInt(area))) {
      errorTest = { ...errorTest, areaIsNumber: true };

      area !== "" && (error = [...error, "Area tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, areaIsNumber: false };
    }

    if (isNaN(parseInt(suite))) {
      errorTest = { ...errorTest, suiteIsNumber: true };

      suite !== "" && (error = [...error, "Suite tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, suiteIsNumber: false };
    }

    if (isNaN(parseInt(room))) {
      errorTest = { ...errorTest, roomIsNumber: true };

      room !== "" && (error = [...error, "Quarto tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, roomIsNumber: false };
    }

    if (isNaN(parseInt(garage))) {
      errorTest = { ...errorTest, garageIsNumber: true };

      garage !== "" && (error = [...error, "Garagem tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, garageIsNumber: false };
    }

    if (isNaN(parseInt(latitude))) {
      errorTest = { ...errorTest, latitude: true };

      latitude !== "" && (error = [...error, "Latitude tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, latitude: false };
    }

    if (isNaN(parseInt(longitude))) {
      errorTest = { ...errorTest, longitude: true };

      longitude !== "" &&
        (error = [...error, "Longitude tem que ser um numero"]);
    } else {
      errorTest = { ...errorTest, longitude: false };
    }

    typeSelected === null
      ? (errorTest = { ...errorTest, type: true })
      : (errorTest = { ...errorTest, type: false });

    districtSelected === null
      ? (errorTest = { ...errorTest, district: true })
      : (errorTest = { ...errorTest, district: false });

    if (
      !errorTest.nameSize &&
      !errorTest.definition &&
      !errorTest.priceIsNumber &&
      !errorTest.areaIsNumber &&
      !errorTest.suiteIsNumber &&
      !errorTest.roomIsNumber &&
      !errorTest.garageIsNumber &&
      !errorTest.type &&
      !errorTest.streetSize &&
      !errorTest.district &&
      !errorTest.latitude &&
      !errorTest.longitude
    ) {
      errorTest = { ...errorTest, required: false };
    } else {
      errorTest = { ...errorTest, required: true };
      error = [...error, "Campos obrigatorios faltantes"];
    }

    if (!errorTest.required) {
      setControl({ error, formIsValid: true });
    } else {
      setControl({ error, formIsValid: false });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setControl({ ...control, isUploading: true });

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

    if (!control.formIsValid) return;

    await uploadToS3();

    const { data } = await addPost({
      variables: {
        name,
        type: definitionSelected.value,
        description,
        price: parseInt(price),
        info: {
          area: parseInt(area),
          room: parseInt(room),
          suite: parseInt(suite),
          garage: parseInt(garage),
          spotlight,
          sale: typeSelected.value,
        },
        infoAdd: Object.values(todoList),
        address: {
          street,
          district: districtSelected.value,
          city: "Cascavel",
          state: "PR",
          latitude: parseInt(latitude),
          longitude: parseInt(longitude),
        },
        imagens: uploadedFiles.map((file) => ({
          name: file.file.name,
          key: file.id,
          url: file.url,
        })),
        thumbnail: {
          name: thumbnail[0].file.name,
          key: thumbnail[0].id,
          url: thumbnail[0].url,
        },
      },
    });

    setControl({ ...control, isUploaded: true, isUploading: false });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : loadingUser ? (
        <Loading />
      ) : user.getLoggedUser === null ? (
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
                      icon={<FaMapMarkedAlt className="Icon" />}
                    />
                  </S.StyleAddress>

                  <S.StyleAddress noMargin={true}>
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
                        icon={<FaMoneyBillWaveAlt className="Icon" />}
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
                        icon={<FaChartArea className="Icon" />}
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
                        icon={<FaBath className="Icon" />}
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
                        icon={<FaBed className="Icon" />}
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
                        icon={<FaCarAlt className="Icon" />}
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
                      icon={<MdLocationOn />}
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

                  <label className="State">Cascavel/PR</label>
                </S.ContainerAddress>

                <S.ContainerDetails>
                  <div className="Left">
                    <S.StyleInput>
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
                        icon={<FaMapMarkedAlt className="Icon" />}
                      />
                    </S.StyleInput>
                  </div>
                  <div className="Right">
                    <S.StyleInput>
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
                        icon={<FaMapMarkedAlt className="Icon" />}
                      />
                    </S.StyleInput>
                  </div>
                </S.ContainerDetails>

                <S.Section>Topicos Adicionais</S.Section>

                <ToDo />

                <S.Section>Thumbnail</S.Section>

                <S.Wrapper>
                  {uploadThumb ? (
                    <Gallery
                      uploadedFiles={thumbnail}
                      setUploadedFiles={setThumbnail}
                    />
                  ) : (
                    <DropZone
                      text="Arraste sua imagem aqui"
                      uploadedFiles={thumbnail}
                      setUploadedFiles={setThumbnail}
                      setUpload={setUploadThumb}
                    />
                  )}
                </S.Wrapper>

                <S.Section>Imagens</S.Section>

                <S.Wrapper>
                  {upload ? (
                    <Gallery
                      uploadedFiles={uploadedFiles}
                      setUploadedFiles={setUploadedFiles}
                    />
                  ) : (
                    <DropZone
                      text="Arraste sua imagem aqui"
                      uploadedFiles={uploadedFiles}
                      setUploadedFiles={setUploadedFiles}
                      setUpload={setUpload}
                      multiple={true}
                    />
                  )}
                </S.Wrapper>
              </S.Form>
            </S.Left>

            <S.Right>
              {control.formIsValid ? (
                control.isUploaded ? (
                  <>
                    <FaCheckCircle className="Accepted" />
                    Imóvel adicionado com sucesso!
                  </>
                ) : control.isUploading ? (
                  <Loading color="var(--color-primary)" svg="#fff" />
                ) : (
                  <>
                    <S.SubmitMsg>
                      <FaCheckCircle className="Accepted" />
                      Pronto para enviar
                    </S.SubmitMsg>
                    <S.Submit type="submit" form="form">
                      Adicionar
                    </S.Submit>
                  </>
                )
              ) : (
                <S.ValidationContainer>
                  {control.error.map((erro) => (
                    <S.ValidationMsg>
                      <FaExclamationCircle className="Rejected" />
                      {erro}
                    </S.ValidationMsg>
                  ))}
                </S.ValidationContainer>
              )}
            </S.Right>
          </S.Container>
        </>
      )}
    </>
  );
};

export default EditPage;
