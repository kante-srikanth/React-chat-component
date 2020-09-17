import React, { FunctionComponent, ReactElement, ReactNode } from "react";

import Attachment, { IAttachmentProps } from "../Core/Attachment";
import styled, { css } from "styled-components";

interface IChatMessage {
  id?: string;
  children: ReactNode | string;
  avatar?: ReactElement;
  type?: "sender" | "receiver" | "other" | string;
  direction: "in" | "out" | string;
  timeStamp?: string;
  attachments?: IAttachmentProps[];
}

interface IMessageBubbleTypes {
  type: IChatMessage["type"];
  messageDirection: IChatMessage["direction"];
}

interface IMessageDirection {
  messageDirection: IChatMessage["direction"];
}

const StyledChatMessageContainer = styled.div((props: IMessageDirection) => {
  const { messageDirection } = props;
  const flexDirection = messageDirection === "in" ? "row" : "row-reverse";
  const marginDirection =
    messageDirection === "in" ? "margin-right" : "margin-left";
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    padding: 1rem;
    background-color: white;

    ${StyledMessageAvatar} {
      ${marginDirection} : 0.25rem
    }
  `;
});

const StyledMessageBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatMessageBubbleTypes = {
  sender: "#2B76D1",
  receiver: "#E6EEFA",
  other: "#49505F",
};

const StyledMessageBubble = styled.div((props: IMessageBubbleTypes) => {
  const { messageDirection, type } = props;
  const borderRadius =
    messageDirection === "in"
      ? "0 1.5rem 1.5rem 1.5rem"
      : "1.5rem 0 1.5rem 1.5rem";

  const background =
    ChatMessageBubbleTypes[
      type === "sender" || type === "receiver" ? type : "other"
    ];

  const color = type === "receiver" ? "#000" : "#fff";
  const alignItems =
    type === "sender" && messageDirection === "out" ? "flex-end" : "flex-start";

  return css`
    background: ${background};
    border-radius: ${borderRadius};
    padding: 0.5rem;
    color: ${color};
    width: auto;
    margin-bottom: 0.25rem;
    align-items: ${alignItems};
    display: flex;
    flex-direction: column;
  `;
});

const StyledMessageAvatar = styled.div``;
const StyledTimeStamp = styled.span`
  font-size: 0.7rem;
  color: #636576;
  text-align: right;
`;

const StyledAttachmentContainer = styled.div`
  display: flex;
  padding-top: 0.2rem;
`;

const ChatMessage: FunctionComponent<IChatMessage> = (props) => {
  const { children, avatar, type, direction, timeStamp, attachments } = props;
  return (
    <StyledChatMessageContainer messageDirection={direction}>
      <StyledMessageAvatar>{avatar}</StyledMessageAvatar>
      <StyledMessageBubbleContainer>
        <StyledMessageBubble
          messageDirection={direction}
          type={type}
          className="message"
        >
          {children}
          <StyledAttachmentContainer>
            {attachments &&
              attachments.map((attachment) => {
                return <Attachment {...attachment} />;
              })}
          </StyledAttachmentContainer>
        </StyledMessageBubble>
        <StyledTimeStamp>{timeStamp}</StyledTimeStamp>
      </StyledMessageBubbleContainer>
    </StyledChatMessageContainer>
  );
};

export default ChatMessage;
