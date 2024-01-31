import { useState, type FC, type CSSProperties } from 'react';
import { Modal } from '@alfalab/core-components-modal';
import { Dropzone } from '@alfalab/core-components-dropzone';
import { Attach } from '@alfalab/core-components-attach';
import CheckmarkMIcon from '@alfalab/icons-glyph/CheckmarkMIcon';
import CrossMIcon from '@alfalab/icons-glyph/CrossMIcon';
import { Button } from '@alfalab/core-components-button';
import ContainerMIcon from '@alfalab/icons-glyph/ContainerMIcon';
import style from './PinFileModal.module.scss';

interface PinFileModalProps {}

const PinFileModal: FC<PinFileModalProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [downloadStatus, setDownloadStatus] = useState('success');

  const handleDrop = (files: FileList) => {
    setFiles(Array.from(files));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, payload: { files: File[] }) => {
    setFiles(payload.files);
  };

  // const onDownloadStatusChange = (_, payload) => {
  //   setDownloadStatus(payload.value);
  //   setFile([]);
  // };

  const stylesStatus: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 201,
  };

  const stylesText = {
    lineHeight: '24px',
    marginTop: 8,
  };

  const isError = Boolean(files) && downloadStatus === 'error';

  const statusDropzone = (text: string, Icon: React.FC<React.SVGProps<SVGSVGElement>>) => (
    <div style={stylesStatus}>
      <Icon />
      <span style={stylesText}>{text}</span>
    </div>
  );

  return (
    <>
      <Modal.Header hasCloser className={style.header}>
        Прикрепить файл
      </Modal.Header>
      <Modal.Content className={style.body}>
        <Dropzone error={isError} onDrop={handleDrop} block>
          {files?.length
            ? downloadStatus === 'success'
              ? statusDropzone('Успех', CheckmarkMIcon)
              : statusDropzone('Ошибка', CrossMIcon)
            : statusDropzone('Перетащите файл', ContainerMIcon)}
        </Dropzone>
      </Modal.Content>
      <Modal.Footer className={style.footer}>
        <Attach
          className={style.footerAttach}
          size="m"
          value={files}
          onChange={onChange}
          name="file"
          onClear={() => setFiles([])}
        />
        <Button className={style.footerButton} view="primary">
          Прикрепить
        </Button>
      </Modal.Footer>
    </>
  );
};

export default PinFileModal;
