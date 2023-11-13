import React from 'react';
import curriculum from './curriculum.pdf';

const ViewPdf: React.FC = () => {
  return (
    <div className="absolute w-full h-full">
      <object data={curriculum} type="application/pdf" className="w-full h-full"></object>
    </div>
  );
};

export default ViewPdf;
