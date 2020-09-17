import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface IHeader {
  title?: string;
  theme?: object;
}

const StyledHeader = styled.h1((props) => {
  return css`
    color: ${props.theme.main};
    font-size: 1.5em;
    font-weight: 800;
    padding: 0.4em;
    background-color: black;
  `;
});

const Header: FunctionComponent<IHeader> = (props) => {
  return <StyledHeader theme={props.theme}>{props.title}</StyledHeader>;
};

Header.defaultProps = {
  theme: {
    main: "white",
  },
  title: "Header",
};

export default Header;
