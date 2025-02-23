import "./popularsoundtools.css"
import Audacity from "../../../../assets/audacity.png"
import Bfxr from "../../../../assets/bfxr.png"
import Chiptone from "../../../../assets/chiptone.png"

const PopularSoundTools = () => {
    return (
        <section className="Sound-tools-Container">
            <span className="title">Popular Sound Tools</span>
            <div className="Sound-tools-section-container">
                <div className="Sound-tools-container">
                    <img className="Sound-tools-icon" src={Chiptone}/>
                    <div className="Sound-tools-desc-container">
                        <span className="Sound-tools-title">ChipTone</span>
                        <span className="Sound-tools-desc"> Chiptone is a popular tool because of reason 1</span>
                        <span className="Sound-tools-desc"> Chiptone offers these "functionality"</span>
                        <span className="Sound-tools-desc"> You may want to use Aesprite because of reason 1</span>
                    </div>
                </div>
                <div className="Sound-tools-container">
                    <img className="Sound-tools-icon" src={Audacity}/>
                    <div className="Sound-tools-desc-container">
                        <span className="Sound-tools-title">Audacity</span>
                        <span className="Sound-tools-desc"> Audacity is a popular tool because of reason 1</span>
                        <span className="Sound-tools-desc"> Audacity offers these "functionality"</span>
                        <span className="Sound-tools-desc"> You may want to use Audacity because of reason 1</span>
                    </div>
                </div>
                <div className="Sound-tools-container">
                    <img className="Sound-tools-icon" src={Bfxr}/>
                    <div className="Sound-tools-desc-container">
                        <span className="Sound-tools-title">Bfxr</span>
                        <span className="Sound-tools-desc"> Bfxr is a popular tool because of reason 1</span>
                        <span className="Sound-tools-desc"> Bfxr offers these "functionality"</span>
                        <span className="Sound-tools-desc"> You may want to use Bfxr because of reason 1</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularSoundTools