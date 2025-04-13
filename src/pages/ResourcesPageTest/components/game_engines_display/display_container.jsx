import pixelButtonSVG from '@/assets/resources/pixel-button-white.svg';
import unityicon from '@/assets/resources/unity.png'
import godoticon from '@/assets/resources/godot.png'
import Godot_SVGTextureMesh from './godot';
import Unity_SVGTextureMesh from './unity';

const Game_Engines_Display_Container = () => {

    return (
        <>
            <Godot_SVGTextureMesh
                svgUrl={pixelButtonSVG} 
                iconUrl={godoticon}
                title="Godot Game Engine"
                position={[8, 40, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />

            <Unity_SVGTextureMesh
                svgUrl={pixelButtonSVG}
                iconUrl={unityicon}
                title="Unity Game Engine"
                position={[8, 25, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />
            
        </>
    )
}

export default Game_Engines_Display_Container