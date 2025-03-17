const useScrollCamera = (camera) => {
  const handleWheel = (event) => {
    console.log("scrolled");
  }

  window.addEventListener('wheel', handleWheel);
}

export default useScrollCamera; 