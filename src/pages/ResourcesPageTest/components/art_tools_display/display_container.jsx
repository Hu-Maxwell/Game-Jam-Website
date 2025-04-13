import pixelButtonSVG from '@/assets/resources/pixel-button-white.svg';
import aespriteicon from '@/assets/resources/aesprite.png'
import Aesprite_SVGTextureMesh from "./aesprite";
import Procreate_SVGTextureMesh from './procreate';
import procreateicon from '@/assets/resources/procreate.png'
import Aesprite_Details from './aesprite';
import Procreate_Details from './procreate';
import SketchBook_Details from './blender';

const Art_Tools_Display_Container = () => {

    return (
        <div className="main">
            <Aesprite_Details/>
            <Procreate_Details />
            <SketchBook_Details />
        </div>
    )
}

export default Art_Tools_Display_Container