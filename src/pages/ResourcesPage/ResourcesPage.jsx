import React from 'react';

import ThreeScene from './components/ThreeScene/ThreeScene.jsx';
import NavBar from '@/components/NavBar/NavBar.jsx';

import styles from './resources-page.module.css'

const ResourcesPage = () => {
  return (
    <div className={styles.threeContainer}>
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

export default ResourcesPage;