import { Avatar, Skeleton } from '@mantine/core';
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';

type ImagePreviewProps = {
  file: File | null;
  imageURL: string;
  setImageURL: Dispatch<SetStateAction<string>>;
  size: number;
};

const ImagePreview: FC<ImagePreviewProps> = ({
  file,
  imageURL,
  setImageURL,
  size,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const isLoading = file && !imageURL;

  useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader!.result;
      if (res && typeof res === 'string') {
        setImageURL(res);
      }
    };
    reader.readAsDataURL(file);

    return () => {
      reader = null;
    };
  }, [file, dispatch, setImageURL]);

  return file ? (
    isLoading ? (
      <Skeleton />
    ) : (
      <Avatar
        src={imageURL}
        alt={file.name}
        size={size}
        {...props}
        radius={size}
      />
    )
  ) : (
    <Avatar size={size} src={imageURL} alt="サンプル画像" radius={size} />
  );
};

export default ImagePreview;
