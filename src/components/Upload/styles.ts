import styled, { css } from 'styled-components';

interface UploadMessageProps {
  type: string | undefined;
}

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})<DropContainerProps>`
  border: 1px dashed #fff;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.5s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#fff',
  error: '#e57878',
  success: '#78e5d5'
}

export const UploadMessage = styled.p<UploadMessageProps>`
  display: flex;
  color: ${props => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  font-size: 1.2rem;
`;
