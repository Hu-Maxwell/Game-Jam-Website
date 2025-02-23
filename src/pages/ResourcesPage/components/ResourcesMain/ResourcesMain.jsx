import "./resources-main.css";
import PopularGameEngines from "../Popular-Game-Engines/populargameengines";
import pixelTree from "../../../../assets/pixeltree2.png"
import GameJamWorkshops from "../Workshops/gamejamworkshops";
import PopularArtTools from "../art-tools/populararttools";
import PopularSoundTools from "../sound-tools/popularsoundtools";

const ResourcesBody = () => {
    return (
        <section className="resources-main">
            <h1 className="resources-title">Resources</h1>
            <div className="body-container">
                <GameJamWorkshops/>
                <PopularGameEngines />
            </div>
            <div className="body-container">
                <PopularSoundTools />
                <PopularArtTools />
            </div>
            <div className="resourcesfooter">
                <img src={pixelTree} className="img"/>
                <img src={pixelTree} className="img"/>
            </div>
        </section>
    );
};

export default ResourcesBody;
