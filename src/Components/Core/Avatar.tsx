import React, { FunctionComponent } from "react";

import styled, { css } from "styled-components";

interface IAvatar {
  title: string;
  theme?: object;
}

const StyledAvatar = styled.div((props) => {
  return css`
    background-color: ${props.theme.main};
    object-fit: cover;
    color: #fff;
    width: 2rem;
    height: 2rem;
    min-width: 2rem;
    min-height: 2rem;
    font-size: 0.8125rem;
    text-transform: uppercase;
    line-height: 2rem;
    text-align: center;
    display: inline-block;
    border-radius: 100%;
  `;
});

const Avatar: FunctionComponent<IAvatar> = (props) => {
  const { title, theme } = props;
  const name = title.slice(0, 2).toUpperCase();
  return <StyledAvatar theme={theme}>{name}</StyledAvatar>;
};

Avatar.defaultProps = {
  theme: {
    main: "#4c5a67",
  },
};
export default Avatar;
