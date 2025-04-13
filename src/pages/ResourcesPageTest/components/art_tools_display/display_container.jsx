import pixelButtonSVG from '@/assets/resources/pixel-button-white.svg';
import aespriteicon from '@/assets/resources/aesprite.png'
import Aesprite_SVGTextureMesh from "./aesprite";
import Procreate_SVGTextureMesh from './procreate';
import procreateicon from '@/assets/resources/procreate.png'

const Art_Tools_Display_Container = () => {

    return (
        <>
            <Aesprite_SVGTextureMesh
                svgUrl={pixelButtonSVG} 
                iconUrl={aespriteicon}
                title="Aesprite Art Tool"
                position={[8, 40, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />

            <Procreate_SVGTextureMesh
                svgUrl={pixelButtonSVG} 
                iconUrl={procreateicon}
                title="Procreate"
                position={[8, 25, -5]}
                rotation={[0, Math.PI, 0]}
                scale={[10, 10, 1]}
            />
            
        </>
    )
}

export default Art_Tools_Display_Container