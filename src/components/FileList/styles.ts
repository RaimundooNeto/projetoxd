import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

interface PreviewProps {
  src: string;
}

export const Container = styled.ul`
  margin-top: 1.5rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 50%;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 14px
    }

    span {
      font-size: 12px;
      color: #fff;
      margin-top: 5px;
      
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin: 0;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div<PreviewProps>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;