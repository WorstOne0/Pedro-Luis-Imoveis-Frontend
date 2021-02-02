import React, { useState } from "react";
import * as S from "./styles";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

function Gallery({
  height = "40rem",
  width = "100%",
  uploadedFiles,
  setUploadedFiles,
  readOnly = false,
}) {
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

  const handleDeleteImg = (id) => {
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
          {uploadedFiles.map((image) => (
            <S.ImageContainer>
              <S.WrapperImg>
                {!readOnly && (
                  <S.DeleteImg onClick={() => handleDeleteImg(image.id)}>
                    <AiFillDelete />
                  </S.DeleteImg>
                )}
                <S.Image src={readOnly ? image.url : image.preview} />
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
