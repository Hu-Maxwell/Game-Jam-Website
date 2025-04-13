import pixelButtonSVG from '@/assets/resources/pixel-button-white.svg';
import unityicon from '@/assets/resources/unity.png'
import godoticon from '@/assets/resources/godot.png'
import Godot_SVGTextureMesh from './godot';
import Unity_SVGTextureMesh from './unity';
import "./styles.css"
import Godot_Details from './godot';
import Unity_Details from './unity';

const Game_Engines_Display_Container = () => {

    return (
        <div className="main">
            <Godot_Details />
            <Unity_Details/>
        </div>
    )
}

export default Game_Engines_Display_Container