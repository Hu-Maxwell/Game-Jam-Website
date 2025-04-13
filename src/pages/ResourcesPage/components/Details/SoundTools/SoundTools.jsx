import Audacity from './Audacity';
import Bfxr from './Bfxr';
import Fmod from "./Fmod";

import styles from "./sound-tools.module.css"

const SoundTools = () => {
  return (
    <main className={styles.main}>
      <Audacity />
      <Bfxr/>
      <Fmod/>
    </main>
  )
}

export default SoundTools;