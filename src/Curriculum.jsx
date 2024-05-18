import React, { useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

const Curriculum = () => {
  // useEffect(() => {
  //   // Cargar el script del worker de PDF dinámicamente
  //   const script = document.createElement('script');
  //   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';
  //   document.body.appendChild(script);
  //   return () => {
  //     // Limpiar el script del worker de PDF cuando el componente se desmonte
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // // Establecer la ruta al script del worker de PDF en la configuración de pdfjs
  // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js`;

  return (<></>
    // <Document
    //   file="/curriculum/cv_jose_adrian.pdf" // Ajusta la ruta según la ubicación real del archivo
    // >
    //   <Page pageNumber={1} />
    // </Document>
  );
};

export default Curriculum;
