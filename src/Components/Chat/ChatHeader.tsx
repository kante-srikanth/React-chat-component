import React, { ReactNode, ReactElement, FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface IChatHeader {
  title: string;
  icon: ReactElement;
  actions?: ReactNode;
}

const StyledChatHeader = styled.div((props) => {
  return css`
    padding: 1rem 0 1rem 1rem;
    border-bottom: 0.0625rem solid #fff;
    background: #fff;
    display: flex;
  `;
});

const StyledTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;

const StyledPrimaryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const StyledToolbarActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

const ChatHeader: FunctionComponent<IChatHeader> = (props) => {
  const { icon, title, actions } = props;
  return (
    <StyledChatHeader>
      <StyledPrimaryContainer>
        {icon}
        <StyledTitle>{title}</StyledTitle>
      </StyledPrimaryContainer>
      <StyledToolbarActions>{actions}</StyledToolbarActions>
    </StyledChatHeader>
  );
};
ChatHeader.defaultProps = {};

export default ChatHeader;
