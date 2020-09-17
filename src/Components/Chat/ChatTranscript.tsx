import React, { ReactElement, FunctionComponent } from "react";

import styled from "styled-components";

type TChatTranscriptItem = {
  timeStamp: string;
  icon: ReactElement | string;
  message: string;
};

interface IChatTranscript {
  transcripts: TChatTranscriptItem[];
  action?: ReactElement;
}

const StyledTranscriptContainer = styled.div`
  height: 150px;
  background-color: #f2f2f2;
  padding: 0.5rem;
  overflow: hidden auto;
`;

const StyledTranscriptHeader = styled.h4`
  padding: 0 0 0.5rem 0;
`;

const StyledTranscriptItem = styled.div`
  display: flex;
  line-height: 1;
  padding-bottom: 0.25rem;
`;

const StyledSpan = styled.span`
  margin-right: 1rem;
  text-align: left;
`;

const StyledTimeSpan = styled.span`
  width: 60px;
`;

const ChatTranscript: FunctionComponent<IChatTranscript> = (props) => {
  const { transcripts } = props;

  return (
    <StyledTranscriptContainer>
      <StyledTranscriptHeader>Earlier Transcripts</StyledTranscriptHeader>
      {transcripts.map((item) => {
        return (
          <StyledTranscriptItem>
            <StyledSpan as={StyledTimeSpan}>{item.timeStamp}</StyledSpan>
            <StyledSpan>{item.icon}</StyledSpan>
            <StyledSpan>{item.message}</StyledSpan>
          </StyledTranscriptItem>
        );
      })}
    </StyledTranscriptContainer>
  );
};

export default ChatTranscript;
