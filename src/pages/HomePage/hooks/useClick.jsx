import { useEffect } from 'react';

const useClick = (hammer, sword, text) => {
  // when user clicks, 
    // hammer smashes
    // sword moves left a bit 
    // one more word is displayed

  useEffect(() => {
    const handleClick = () => {
      console.log("clicked");

      // debug
      sword.current.position.x += 1;
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
};

export default useClick;
