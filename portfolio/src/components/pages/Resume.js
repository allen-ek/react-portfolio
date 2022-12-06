import React from 'react';
import Res from'../../assets/aResume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
      <a href={Res} download> Resume</a>
      </p>
    </div>
  );
}
