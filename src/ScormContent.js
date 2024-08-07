import React, { useEffect, useRef } from 'react';

const ScormContent = () => {
  const iframeRef = useRef(null);
  const scormPath = 'http://localhost:3000';

  const handleIframeLoad = () => {
    console.log('SCORM iframe loaded');
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== new URL(scormPath).origin) {
        return;
      }
      console.log('Message from SCORM iframe:', event.data);
    };
  
    window.addEventListener('message', handleMessage);
  
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={scormPath}
        width="100%"
        height="800px"
        title="SCORM Content"
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
};

export default ScormContent;
