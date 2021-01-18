import React from "react";
import { Link } from "react-router-dom";

import { Container, Img, ItemGroup, Item, Login } from "./styles";

import { Svg } from "../index";

import { MdLocationCity } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { AiOutlineLogin, AiFillPhone } from "react-icons/ai";

const NavBar = () => {
  return (
    <Container>
      <Link
        to="/"
        style={{
          height: "100%",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Img>
          <Svg tam={45} />
          <p>Pedro Luis Imóveis</p>
        </Img>
      </Link>

      <ItemGroup>
        <Link to="/">
          <Item>
            <TiHome />
          </Item>
        </Link>
        <Link to="/realestate">
          <Item>
            <MdLocationCity />
          </Item>
        </Link>
        <Link to="/contact">
          <Item>
            <AiFillPhone />
          </Item>
        </Link>
        <Link to="/login">
          <Login>
            <AiOutlineLogin />
          </Login>
        </Link>
      </ItemGroup>
    </Container>
  );
};

export default NavBar;
