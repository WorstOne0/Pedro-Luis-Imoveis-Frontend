import React, { useRef } from "react";

import { NavBar, Footer } from "../../components";

import { animateScroll as scroll } from "react-scroll";

import { Container, Intro, IntroLeft, IntroImg, IntroTitle } from "./styles";

import { MdKeyboardArrowDown } from "react-icons/md";

const RealEstate = () => {
  const myRef = useRef();

  const introImg = require("../../assets/man-using-stylus-pen-for-touching-the-digital-tablet-screen-6335.jpg")
    .default;

  return (
    <>
      <NavBar />

      <Container>
        <Intro ref={myRef}>
          <IntroLeft>
            <IntroTitle>
              Está a Procura de Algo?<br></br> Nos te Ajudamos a Achar
            </IntroTitle>

            <MdKeyboardArrowDown
              style={{
                height: 40,
                width: 40,
                color: "#f52216",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: 10,
                cursor: "pointer",
                zIndex: 0,
              }}
              onClick={() =>
                scroll.scrollTo(this.state.myRef.current.clientHeight)
              }
            />
          </IntroLeft>

          <IntroImg url={introImg}>
            <IntroTitle>
              Está a Procura de Algo?<br></br> Nos te Ajudamos a Achar
            </IntroTitle>
          </IntroImg>
        </Intro>

        {/*<Showcase />*/}
      </Container>

      <Footer />
    </>
  );
};

export default RealEstate;
