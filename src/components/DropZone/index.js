import React, { useCallback } from "react";

import {
  Container,
  Content,
  Wrapper,
  BrowseButton,
  Img,
  ContentLight,
  ImgLight,
  ButtonLight,
} from "./styles";

import { useDropzone } from "react-dropzone";
import { isEmpty, uniqueId } from "lodash";
import filesize from "filesize";

import imgAccept from "../../assets/kawaii-kawaiianime-anime-girl-animegirl-animekawaii-menhera-chan-ok-1156328445749rjgc7qz0-removebg-preview.png";
import imgReject from "../../assets/unnamed-removebg-preview.png";

import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";

const DropZone = ({
  uploadedFiles,
  setUploadedFiles,
  setUpload,
  id,
  multiple = false,
  text = "",
  light = false,
  accept = "image",
}) => {
  const handleInputChange = (event) => {
    try {
      setUploadedFiles([
        ...uploadedFiles,
        ...Array.from(event.target.files).map((file) => ({
          file,
          name: file.name,
          id: uniqueId(),
          size: filesize(file.size),
          preview: URL.createObjectURL(file),
          url: null,
        })),
      ]);

      setUpload(true);
    } catch (erro) {
      console.log(erro);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (!isEmpty(acceptedFiles)) {
      setUploadedFiles([
        ...uploadedFiles,
        ...acceptedFiles.map((file) => ({
          file,
          id: uniqueId(),
          size: filesize(file.size),
          preview: URL.createObjectURL(file),
        })),
      ]);
      setUpload(true);
    }
  });

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: `${accept}/*`,
    multiple,
  });

  return (
    <Container {...getRootProps()}>
      {light ? (
        <ContentLight isDragAccept={isDragAccept} isDragReject={isDragReject}>
          {isDragActive ? (
            isDragAccept ? (
              <Wrapper>
                <ImgLight src={imgAccept} />
              </Wrapper>
            ) : (
              <Wrapper>
                <ImgLight src={imgReject} />
              </Wrapper>
            )
          ) : (
            <Wrapper>
              <ButtonLight htmlFor={`fileUploadLight${id}`}>
                <AiOutlinePlus className="Icon" />
              </ButtonLight>
            </Wrapper>
          )}
          <input
            style={{ display: "none" }}
            id={`fileUploadLight${id}`}
            name="file"
            type="file"
            onChange={handleInputChange}
            multiple={multiple}
            accept={`${accept}/*`}
          />
        </ContentLight>
      ) : (
        <Content isDragAccept={isDragAccept} isDragReject={isDragReject}>
          {isDragActive ? (
            isDragAccept ? (
              <Wrapper>
                <Img src={imgAccept} />
                <p>Yep, pode soltar</p>
              </Wrapper>
            ) : (
              <Wrapper>
                <Img src={imgReject} />
                <p>Nós não aceitamos isso aqui</p>
              </Wrapper>
            )
          ) : (
            <Wrapper>
              <AiOutlineCloudUpload className="Icon" />
              <p>{text}</p>
              <p>ou</p>
              <BrowseButton htmlFor={`fileUpload${id}`}>
                Browse Files
              </BrowseButton>
            </Wrapper>
          )}
          <input
            style={{ display: "none" }}
            id={`fileUpload${id}`}
            name="file"
            type="file"
            onChange={handleInputChange}
            multiple={multiple}
          />
        </Content>
      )}
    </Container>
  );
};

export default DropZone;
