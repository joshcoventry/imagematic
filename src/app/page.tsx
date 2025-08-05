'use client'

import React, { useState } from 'react';
import { Dropzone } from './dropzone';

import Header from './components/header';
import Footer from './components/footer';
// import ImageUploader from './components/ImageUploader';
// import ImageConverter from './components/ImageConverter';
// import DownloadButton from './components/DownloadButton';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);

  return (
    <div className="App">
      <Header />

      <Dropzone />

      <Footer />
    </div>
  );
};

export default App;
