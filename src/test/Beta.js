import React from 'react';
import './Beta.css';
import Dropdown from '../components/Dropdown/Dropdown';

const items = [
  {
    id: 1,
    value: 'Pulp Fiction',
  },
  {
    id: 2,
    value: 'The Prestige',
  },
  {
    id: 3,
    value: 'Blade Runner 2049',
  },
];

function Beta() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Buy Movies{' '}
        <span role="img" aria-label="Movie projector">
          🎥 
        </span>
      </h1>
      <Dropdown title="Select movie" items={items} multiSelect />
    </div>
  );
}

export default Beta;