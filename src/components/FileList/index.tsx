import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError } from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles';

export interface FileListProps {
  files: any
}

export function FileList({files}: FileListProps) {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src="https://ficheiros.com.br/assets/img/icons/files/128/xlsx-1567.png" />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize} <button onClick={() => {}}>Excluir</button></span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
}
