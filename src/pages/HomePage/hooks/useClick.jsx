import { useEffect } from 'react';

const useClick = (hammerClicked, sword, text) => {
  // when user clicks, 
    // hammer smashes
    // sword moves left a bit 
    // one more word is displayed

  useEffect(() => {
    const handleClick = () => {
      // send to hammer a click
      hammerClicked.current = true;

      // wait 1 sec, then move sword pos left a bit. 
      // sword.current.position.x += 1;

      // set textClicked.current = true; 
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
};

export default useClick;
