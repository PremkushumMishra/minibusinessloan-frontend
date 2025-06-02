import React, { useEffect, useState } from 'react';

const LoanAgreement = () => {
  const [agreementContent, setAgreementContent] = useState('');

  useEffect(() => {
    // Load the loan agreement HTML file
    fetch('/src/loanagreement.html')
      .then(response => response.text())
      .then(html => {
        // Extract the content between <body> tags and include the styles
        const styleMatch = html.match(/<style[^>]*>([\s\S]*)<\/style>/i);
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        
        if (styleMatch && bodyMatch) {
          const styles = styleMatch[1];
          const bodyContent = bodyMatch[1];
          
          // Create a style element and append it to the document head
          const styleElement = document.createElement('style');
          styleElement.textContent = styles;
          document.head.appendChild(styleElement);
          
          setAgreementContent(bodyContent);
        }
      })
      .catch(error => {
        console.error('Error loading loan agreement:', error);
      });

    // Cleanup function to remove the style element when component unmounts
    return () => {
      const styleElement = document.querySelector('style');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <div 
      className="max-w-4xl mx-auto bg-white p-8"
      dangerouslySetInnerHTML={{ __html: agreementContent }}
    />
  );
};

export default LoanAgreement; 