import React from 'react';

import './style.css';

 
const style = () => {
  const inlineStyles = {
    backgroundColor: 'lightblue',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  };
  return (
    <div>
      <div style={inlineStyles}>
        <h2 style={{ color: 'blue' }}>Inline CSS Example</h2>
        <p>This content is styled using inline CSS.</p>
      </div>
      {/* Use external Stylesheet with className */}
      <div className="style">
        <h2 className="style-title">ClassName CSS Example</h2>
        <p className="style-content">This content is styled using className from an external CSS file.</p>
      </div>
    </div>
  );
};
export default style;