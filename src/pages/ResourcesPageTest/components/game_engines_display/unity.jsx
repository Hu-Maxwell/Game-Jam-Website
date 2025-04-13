import "./styles.css"

const Unity_Details = () => {

    return (
        <main className="container">
            <div className="unity_icon"/>
            <div className="text_container">   
                <h1 className="title">Unity Game Engine</h1>
                <ul className="list">
                    <li className="list_item">A large ecosystem of Assets Ready to be used</li>
                    <li className="list_item">Support for Terrain modeling and advanced Rendering Techniques</li>
                    <li className="list_item">User Friendly interface</li>
                </ul>
                <a 
                    className="godot_button" 
                    href="https://unity.com/products/unity-engine#engine-features" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Unity_Details