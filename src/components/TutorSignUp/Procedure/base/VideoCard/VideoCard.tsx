import React from 'react';
import { Card } from '@mui/material';
import style from './style';
import { VideoCardProps } from './constants';
import PreviewPhase from './PreviewPhase';
import InputPhase from './InputPhase';

export default function VideoCard({
  title,
  description,
  links,
  videoSrc = '',
  profileMediaType,
  handleUpdateVideo,
}: VideoCardProps) {
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.item(0);

    if (file) {
      previewFile(file);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      handleUpdateVideo(profileMediaType, file);
    };

    reader.onerror = (e) => {
      console.error(e);
    };
  };

  return (
    <Card sx={style}>
      {videoSrc ? (
        <PreviewPhase previewSource={videoSrc} handleFileInputChange={handleFileInputChange} />
      ) : (
        <InputPhase
          title={title}
          description={description}
          links={links}
          handleFileInputChange={handleFileInputChange}
        />
      )}
    </Card>
  );
}
