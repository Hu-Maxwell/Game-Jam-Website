

const useScrollCamera = (camera, crown) => {
  const handleWheel = (event) => {
      const delta = event.deltaY; 
      const moveAmount = delta * 0.01; 

      camera.translateZ(-moveAmount);  

  }

  window.addEventListener('wheel', handleWheel);
}

export default useScrollCamera; 