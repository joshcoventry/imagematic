import React from 'react';
import {useDropzone} from 'react-dropzone';

interface DropzoneProps {
  onFilesDropped: (files: File[]) => void;
}

export const Dropzone: React.FC<DropzoneProps> = ({onFilesDropped}) => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: 'image/*',
    multiple: true,
    onDrop: acceptedFiles => onFilesDropped(acceptedFiles),
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #aaa',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop images here…</p> : <p>Drag & drop images, or click to select</p>}
    </div>
  );
};
