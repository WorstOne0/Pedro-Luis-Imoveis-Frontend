import styled from "styled-components";

export const Container = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};

  .Marker {
    position: absolute;
    transform: translate(-50%, -100%);

    color: red;
    font-size: 30px;
  }
`;
