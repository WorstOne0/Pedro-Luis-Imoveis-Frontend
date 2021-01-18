import styled from "styled-components";

export const Container = styled.div`
  height: 350px;
  width: 100%;
  background: #171616;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  position: relative;

  @media only screen and (max-width: 855px) {
    height: 550px;
    flex-direction: column;
  }
`;

export const Top = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  @media only screen and (max-width: 855px) {
    height: 500px;
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  height: 300px;
  width: 360px;
  padding: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Menu = styled.div`
  height: 40px;
  width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  height: 40px;
  margin: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 18px;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const MenuDot = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background: #fff;
`;

export const Details = styled.div`
  height: 40px;
  width: 170px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMedia = styled.div`
  height: 100%;
  width: 50px;
  border-radius: 5px;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  font-size: 24px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    color: ${(props) => props.color};
  }
`;

export const ToTop = styled.button`
  height: 40px;
  width: 100px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 34px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    border-color: #f52216;
    color: #f52216;
  }
`;

export const Right = styled.div`
  height: 300px;
  width: 480px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 520px) {
    width: 100%;
    padding-left: 20px;
  }
`;

export const FooterImg = styled.div`
  height: 250px;
  width: 250px;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Place = styled.div`
  height: 250px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #f5f5f5;
  font-size: 18px;
`;

export const PlaceDetails = styled.label`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #fff;
  font-size: 16px;

  svg {
    margin-right: 10px;
  }
`;

export const GoogleMapsContainer = styled.div`
  height: 100%;
  width: 500px;
  padding: 25px 15px;

  @media only screen and (max-width: 1225px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterEnd = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 12px;

  cursor: pointer;

  .Icon {
    margin-right: 5px;
  }
`;
