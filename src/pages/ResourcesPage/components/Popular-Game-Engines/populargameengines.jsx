import "./populargameengines.css"
import UnityIcon from "../../../../assets/unity.png"
import GodotIcon from "../../../../assets/Godot.png"

const PopularGameEngines = () => {

    return (
        <section className="Container">
            <span className="title">Popular Game Engines!</span>
            <div className="game-engine-container">
                <img className="game-engine-icon" src={UnityIcon}/>
                <div className="game-engine-desc-container">
                    <span className="game-engine-title">Unity Engine</span>
                    <span className="game-engine-reason"> The Unity Game Engine is popular because of reason 1</span>
                    <span className="game-engine-reason"> The Unity Game Engine is popular because of reason 2</span>
                    <span className="game-engine-reason"> The Unity Game Engine is popular because of reason 3</span>
                    <span className="game-engine-reason"> The Unity Game Engine is popular because of reason 4</span>
                </div>
            </div>
            <div className="game-engine-container">
                <img className="game-engine-icon" src={GodotIcon}/>
                <div className="game-engine-desc-container">
                    <span className="game-engine-title">Godot Engine</span>
                    <span className="game-engine-reason"> The Godot Game Engine is popular because of reason 1</span>
                    <span className="game-engine-reason"> The Godot Game Engine is popular because of reason 2</span>
                    <span className="game-engine-reason"> The Godot Game Engine is popular because of reason 3</span>
                    <span className="game-engine-reason"> The Godot Game Engine is popular because of reason 4</span>
                </div>
            </div>
        </section>
    )
}

export default PopularGameEngines