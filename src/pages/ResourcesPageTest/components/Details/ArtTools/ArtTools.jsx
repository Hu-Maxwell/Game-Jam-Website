import Aesprite from './Aesprite';
import Procreate from './Procreate';
import SketchBook from './Blender';

import styles from "./art-tools.module.css";

const ArtTools = () => {
  return (
    <div className={styles.main}>
      <Aesprite/>
      <Procreate />
      <SketchBook />
    </div>
  )
}

export default ArtTools;