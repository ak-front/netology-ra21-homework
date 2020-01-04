import React from 'react';

import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div style={{ width: '18rem' }}>
      <Card
        showButton
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        title="Card title"
      >
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image cap"
        >
          <title>Placeholder</title>
          <rect
            width="100%"
            height="100%"
            fill="#868e96"
          />
          <text
            x="50%"
            y="50%"
            fill="#dee2e6"
            dy=".3em"
          >
            Image cap
          </text>
        </svg>
      </Card>
      <div style={{ height: 30 }} />
      <Card
        showButton
        text="With supporting text below as a natural lead-in to additional content."
        title="Special title treatment"
      />
    </div>
  );
}

export default App;
