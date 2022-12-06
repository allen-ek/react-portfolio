import React from 'react';
import Avatar from'../../assets/avatar.png'


export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <img src={Avatar} alt="profile" />
      <p>
      Engineering undergraduate from University of California Santa Cruz, majoring in Technology Information Management. 
      Multifaceted knowledge in computer science, business, financial processes with a focus on software implementation and technological support.
      </p>
    </div>
  );
}
