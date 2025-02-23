import Aesprite from "../../../../assets/aesprite.png"
import Procreate from "../../../../assets/procreate.png"
import "./populararttools.css"

const PopularArtTools = () => {
    return (
        <section className="Container">
            <span className="title">Popular Art Tools!</span>
                    <div className="art-tool-container">
                        <img className="art-tool-icon" src={Aesprite}/>
                        <div className="art-tool-desc-container">
                            <span className="art-tool-title">Aesprite</span>
                            <span className="art-tool-reason"> Aesprite is a popular tool because of reason 1</span>
                            <span className="art-tool-reason"> Aesprite offers these "functionality"</span>
                            <span className="art-tool-reason"> You may want to use Aesprite because of reason 1</span>
                            <span className="art-tool-reason"> You may want to use Aesprite because of reason 2</span>
                        </div>
                    </div>
                    <div className="art-tool-container">
                        <img className="art-tool-icon" src={Procreate}/>
                        <div className="art-tool-desc-container">
                            <span className="art-tool-title">Procreate</span>
                            <span className="art-tool-reason"> Procreate is a popular tool because of reason 1</span>
                            <span className="art-tool-reason"> Procreate offers these "functionality"</span>
                            <span className="art-tool-reason"> You may want to use Procreate because of reason 1</span>
                            <span className="art-tool-reason"> You may want to use Procreate because of reason 2</span>
                        </div>
                    </div>
                </section>
    )
}

export default PopularArtTools