import React from 'react';
import Res from'../../assets/aResume.pdf'

export default function Resume() {
  return (
    <div style={{backgroundColor: "#939da2"}}>
      <h1>Resume Page</h1>
      <p>
      <a href={Res} download> Resume</a>
      </p>
      <div>
        Web Development Skills:
Problem-Solving,
Pseudocode,
HTML5,
Cascading Style Sheets (CSS),
Javascript,
Command Line,
Developer Tools (Elements, Console, Network, etc),
Bootstrap,
Web API,
jQuery,
Server Side API,
Third Party API,
Moment.js,
AJAX,
Fetch,
JSON,
Git,
GitHub,
Responsive Design,
Frontend Development,
Node,
Heroku,
ES6,
Express,
MySQL,
Relational Databases,
Creating Server Side APIs (w/ Express),
REST,
TDD,
Unit Testing w/ JEST,
React,
Mongoose,
      </div>
    
    </div>
  );
}
