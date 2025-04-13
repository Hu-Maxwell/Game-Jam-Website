import React from 'react';
import ThreeScene from './components/ThreeScene/ThreeScene.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

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
      <ThreeScene className="threeScene"/>
      <div 
        style={{
          position: 'absolute',
          bottom: -200,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'auto',
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default ResourcesPageTest;