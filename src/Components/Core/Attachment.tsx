import React, { FunctionComponent, ReactElement } from "react";

import styled, { css } from "styled-components";

export interface IAttachmentProps {
  name: string;
  icon: ReactElement | string;
  meta: string;
}

const StyledAttachment = styled.div`
  display: flex;
  border: 1px solid currentColor;
  border-radius: 8px;
  padding: 0.2rem;
  margin: 0.2rem 0 0 0.2rem;
`;
const StyledAttachmentIcon = styled.div`
  font-size: 1.6rem;
`;
const StyledAttachmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

const Attachment: FunctionComponent<IAttachmentProps> = (props) => {
  const { name, icon, meta } = props;
  return (
    <StyledAttachment>
      <StyledAttachmentIcon>{icon}</StyledAttachmentIcon>
      <StyledAttachmentDetails>
        <span>{name}</span>
        <span>{meta}</span>
      </StyledAttachmentDetails>
    </StyledAttachment>
  );
};

Attachment.defaultProps = {};
export default Attachment;
