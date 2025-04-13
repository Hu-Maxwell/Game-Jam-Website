import "./styles.css"
import Audacity_Details from './Audacity';
import Bfxr_Details from './Bfxr';
import Fmod_Details from "./fmod";

const Sound_Tools_Display_Container = () => {

    return (
        <main className="main">
            <Audacity_Details />
            <Bfxr_Details/>
            <Fmod_Details/>
        </main>
    )
}

export default Sound_Tools_Display_Container