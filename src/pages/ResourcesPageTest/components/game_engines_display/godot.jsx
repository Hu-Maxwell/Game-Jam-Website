import "./styles.css"

const Godot_Details = () => {

    return (
        <main className="container">
            <div className="godot_icon"/>
            <div className="text_container">   
                <h1 className="title">Godot Game Engine</h1>
                <ul className="list">
                    <li className="list_item">Dedicated 2D engine makes Godot a great choice for 2D games</li>
                    <li className="list_item">Lightweight and portable executable runs well on any machine</li>
                    <li className="list_item">Dedicated Python-like Language GDScript makes programming easier</li>
                </ul>
                <a 
                    className="godot_button" 
                    href="https://godotengine.org/features/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Godot_Details