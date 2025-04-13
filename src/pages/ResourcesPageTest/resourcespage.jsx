import React from 'react';
import ThreeScene from './components/ThreeScene/ThreeScene.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';

import './styles.css'

const ResourcesPageTest = () => {
  return (
    <div className="threeContainer">
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'auto',
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <NavBar />
      </div>
      <ThreeScene/>
    </div>
  );
};

export default ResourcesPageTest;