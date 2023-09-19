import React from 'react';

import './style.css';

 
const style = () => {
  const inlineStyles = {
    backgroundColor: 'lightblue',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };
  return (
    <div>
      <div style={inlineStyles}>
        <h2 style={{ color: 'lightpink' }}>Inline CSS Example</h2>
        <p>This styled is  using inline CSS.</p>
      </div>
      {/* Use external Stylesheet with className */}
      <div className="style">
        <h2 className="style-title">ClassName CSS Example</h2>
        <p className="style-content">This  styled is using className from an external CSS file.</p>
      </div>
    </div>
  );
};
export default style;