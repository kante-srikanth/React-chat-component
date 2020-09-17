import React from "react";
import Header from "../Core/Header";
import Avatar from "../Core/Avatar";

import ChatHeader from "./ChatHeader";
import ChatTranscript from "./ChatTranscript";
import ChatMessage from "./ChatMessage";

import { MdChat } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineMore } from "react-icons/ai";

import { transcripts as ChatTranscriptData, ChatMessages } from "./Chat.data";

import styled, { css } from "styled-components";
import ChatComposer from "./ChatComposer";

const actions = (
  <>
    <AiOutlineInfoCircle />
    <AiOutlineMore />
  </>
);
const StyledChatContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const StyledChatHeader = styled.header``;
const StyledChatBody = styled.main`
  flex-grow: 1;
  overflow: auto;
`;
const StyledChatFooter = styled.footer``;

const Chat = () => {
  return (
    <StyledChatContainer>
      <StyledChatHeader>
        <Header title="Chat Component" />
        <ChatHeader icon={<MdChat />} title="Live Chat" actions={actions} />
      </StyledChatHeader>
      <StyledChatBody>
        <ChatTranscript transcripts={ChatTranscriptData} />
        {ChatMessages &&
          ChatMessages.map((item) => {
            return <ChatMessage {...item} />;
          })}
      </StyledChatBody>
      <StyledChatFooter>
        <ChatComposer />
      </StyledChatFooter>
    </StyledChatContainer>
  );
};

export default Chat;
