import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: (files: any) => void;
}

export function Upload({onUpload}: UploadProps) {
  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if(!isDragActive) {
      return <UploadMessage type="" >Arraste o arquivo aqui ou clique para fazer o upload...</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
  };

  return(
    <Dropzone accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" maxFiles={1} onDropAccepted={onUpload}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
        >
          <input { ...getInputProps()}/>
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      ) }
    </Dropzone>
  );
}