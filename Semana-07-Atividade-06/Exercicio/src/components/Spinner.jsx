import React from 'react';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner-container">
      <img src="/spinner.svg" alt="Loading..." />
    </div>
  );
}
