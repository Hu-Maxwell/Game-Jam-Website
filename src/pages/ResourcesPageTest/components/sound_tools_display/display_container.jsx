import pixelButtonSVG from '@/assets/resources/pixel-button-white.svg';
import chiptoneicon from '@/assets/resources/chiptone.png'
import bfxricon from '@/assets/resources/bfxr.png'
import audacityicon from '@/assets/resources/audacity.png'
import Bfxr_SVGTextureMesh from './Bfxr';
import Chiptone_SVGTextureMesh from './Chiptone';
import Audacity_SVGTextureMesh from './Audacity';

const Sound_Tools_Display_Container = () => {

    return (
        <>
            <Bfxr_SVGTextureMesh
                svgUrl={pixelButtonSVG} 
                iconUrl={bfxricon}
                title="Bfxr sound tool"
                position={[8, 40, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />

            <Chiptone_SVGTextureMesh
                svgUrl={pixelButtonSVG}
                iconUrl={chiptoneicon}
                title="Chiptone sound tool"
                position={[8, 25, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />

            <Audacity_SVGTextureMesh
                svgUrl={pixelButtonSVG}
                iconUrl={audacityicon}
                title="Audacity sound tool"
                position={[8, 10, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />
            
        </>
    )
}

export default Sound_Tools_Display_Container