// ApiResponseDisplay.js
import React from 'react';

function ApiResponseDisplay({ apiResponse }) {
  return (
    apiResponse && (
      <div>
        <p>{apiResponse.message || JSON.stringify(apiResponse)}</p> 
      </div>
    )
  );
}

export default ApiResponseDisplay;
