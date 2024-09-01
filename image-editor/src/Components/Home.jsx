import React, { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import { jsPDF } from 'jspdf';

function Home() {
  const [photo, setPhoto] = useState('');

  const handleUpload = (a) => {
    const file = a.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = photo;

    img.onload = () => {
      const imgType = img.src.startsWith('data:image/png') ? 'PNG' : 'JPEG'; // Determine image type
      doc.addImage(img.src, imgType, 10, 10, 180, 0); // Adjust width and height as needed
      doc.save('image.pdf');
    };

    img.onerror = () => {
      console.error('Failed to load image.');
    };
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      <ImageDisplay photo={photo} />
      <input
        type="file"
        accept="image/*"
        id="fileUpload"
        onChange={handleUpload}
        className='hidden'
      />
      <label
        htmlFor="fileUpload"
        className='cursor-pointer bg-slate-600 p-3 text-white rounded'
      >
        Upload
      </label>
      {photo && (
        <button
          onClick={handleDownloadPdf}
          className='mt-4 bg-blue-500 text-white p-3 rounded cursor-pointer'
        >
          Download
        </button>
      )}
    </div>
  );
}

export default Home;
