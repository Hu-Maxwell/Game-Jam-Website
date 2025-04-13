import Godot from './Godot';
import Unity from './Unity';

import styles from './game-engines.module.css';

const GameEngines = () => {
  return (
    <div className={styles.main}>
      <Godot />
      <Unity/>
    </div>
  );
}

export default GameEngines;