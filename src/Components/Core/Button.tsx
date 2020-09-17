import React, { Component, FunctionComponent } from "react";

import styled, { css } from "styled-components";

interface IButton {
  value: string;
}

const StyledButton = styled.button`

color: #fff;
    background-color: #0076d1;
    border-color: #0000;
    margin-left: 0.25rem;
    height: 32px;
    min-height: 32px;
    min-width: 32px;
    border-radius: 32px;
    border: 0.0625rem solid;
    outline: none;
    padding: 0 1rem;
}`;
const Button: FunctionComponent<IButton> = (props) => {
  const { value } = props;
  return <StyledButton>{value}</StyledButton>;
};

export default Button;
