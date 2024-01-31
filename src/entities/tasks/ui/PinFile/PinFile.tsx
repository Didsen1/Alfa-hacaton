import { useState, type FC, type CSSProperties } from 'react';
import { Modal } from '@alfalab/core-components-modal';
import { Dropzone } from '@alfalab/core-components-dropzone';
import { Attach } from '@alfalab/core-components-attach';
import CheckmarkMIcon from '@alfalab/icons-glyph/CheckmarkMIcon';
import CrossMIcon from '@alfalab/icons-glyph/CrossMIcon';
import { Button } from '@alfalab/core-components-button';
import ContainerMIcon from '@alfalab/icons-glyph/ContainerMIcon';
import style from './PinFile.module.scss';

interface PinFileProps {}

const PinFile: FC<PinFileProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');
  const [downloadStatus, setDownloadStatus] = useState('success');

  const checkFileSize = (files: File[]) => {
    if (files[0].size / 1024 > 10240) {
      setError('Размер файла превышат 10 мегабайт');
    } else {
      setFiles(files);
      setError('');
    }
  };

  const handleDrop = (files: FileList) => {
    checkFileSize(Array.from(files));
  };

  const handleAttachChange = (event: React.ChangeEvent<HTMLInputElement>, payload: { files: File[] }) => {
    checkFileSize(payload.files);
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
          {files?.length && downloadStatus === 'success'
            ? statusDropzone('Успех', CheckmarkMIcon)
            : error
              ? statusDropzone(error, CrossMIcon)
              : statusDropzone('Перетащите файл', ContainerMIcon)}
        </Dropzone>
      </Modal.Content>
      <Modal.Footer className={style.footer}>
        <Attach
          className={style.footerAttach}
          size="m"
          value={files}
          maxFilenameLength={30}
          onChange={handleAttachChange}
          name="file"
          onClear={() => setFiles([])}
        />
        <Button disabled={!files.length || !!error} className={style.footerButton} view="primary">
          Прикрепить
        </Button>
      </Modal.Footer>
    </>
  );
};

export default PinFile;
