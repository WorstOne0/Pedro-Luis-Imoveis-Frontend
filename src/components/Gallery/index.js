import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import * as S from "./styles";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const DELETE_IMG = gql`
  mutation DeleteImg($postId: ID!, $key: String!) {
    deleteImg(postId: $postId, key: $key)
  }
`;

const DELETE_THUMB = gql`
  mutation DeleteThumb($postId: ID!, $key: String!) {
    deleteThumb(postId: $postId, key: $key)
  }
`;

function Gallery({
  height = "40rem",
  width = "100%",
  uploadedFiles,
  setUploadedFiles,
  readOnly = false,
  thumb = false,
  postId,
  activeLightBox = false,
  lightBoxState,
  lightBox,
}) {
  const [deleteImg] = useMutation(DELETE_IMG);
  const [deleteThumb] = useMutation(DELETE_THUMB);

  const [index, setIndex] = useState(0);

  const prevPage = () => {
    if (index == 0) return;

    setIndex(index - 1);
  };

  const nextPage = () => {
    if (index == uploadedFiles.length - 1) return;

    setIndex(index + 1);
  };

  const goToPage = (number) => {
    setIndex(number);
  };

  const handleDeleteImg = (id, key) => {
    console.log(key);
    if (key !== undefined) {
      thumb
        ? deleteThumb({ variables: { postId, key } })
        : deleteImg({ variables: { postId, key } });
    }

    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));

    if (uploadedFiles.length - 1 === index) setIndex((value) => value - 1);
  };

  return (
    <S.Container height={height} width={width}>
      <S.Wrapper>
        <S.SliderContent
          translate={index * (100 / uploadedFiles.length)}
          width={uploadedFiles.length}
        >
          {uploadedFiles.map((image, index) => (
            <S.ImageContainer>
              <S.WrapperImg>
                {!readOnly && (
                  <S.DeleteImg
                    onClick={() => handleDeleteImg(image.id, image.key)}
                  >
                    <AiFillDelete />
                  </S.DeleteImg>
                )}
                <S.Image
                  src={readOnly ? image.url : image.preview}
                  onClick={() => {
                    if (!activeLightBox) return;

                    lightBox({
                      toggle: !lightBoxState.toggle,
                      slide: index + 1,
                    });
                  }}
                />
              </S.WrapperImg>
            </S.ImageContainer>
          ))}
        </S.SliderContent>
      </S.Wrapper>

      <S.Counter className="Counter">
        {index + 1} / {uploadedFiles.length}
      </S.Counter>
      <S.ArrowLeft className="Arrow" onClick={prevPage}>
        <BsChevronCompactLeft />
      </S.ArrowLeft>
      <S.ArrowRight className="Arrow" onClick={nextPage}>
        <BsChevronCompactRight />
      </S.ArrowRight>
      <S.DotsContainer className="Dots">
        {uploadedFiles.map((image, indexImg) => (
          <S.Dots
            active={index == indexImg ? true : false}
            onClick={() => goToPage(indexImg)}
          />
        ))}
      </S.DotsContainer>
    </S.Container>
  );
}

export default Gallery;
