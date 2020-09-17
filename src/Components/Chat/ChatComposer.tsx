import React, { FunctionComponent } from "react";

import Button from "../Core/Button";

import styled, { css } from "styled-components";
interface IChatComposer {
  placeholder?: string;
  defaultValue?: string;
  onMessageSend?: () => void;
}

const StyledChatComposer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;
  background-color: #f2f2f2;
`;

const StyledTextArea = styled.textarea`
  border-radius: 0.5rem;
  min-height: 4rem;
  border: 0.0625rem solid #fafafa;
  max-width: 100%;
  resize: none;
  font-family: inherit;
  padding: 0.5rem;
`;
const ChatComposer: FunctionComponent<IChatComposer> = (props) => {
  const { placeholder = "Type here to send message", defaultValue } = props;
  return (
    <StyledChatComposer>
      <StyledTextArea
        maxLength={280}
        value={defaultValue}
        placeholder={placeholder}
      />
      <Button value="send" />
    </StyledChatComposer>
  );
};

export default ChatComposer;
