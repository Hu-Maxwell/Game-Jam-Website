import "./styles.css"

const SketchBook_Details = () => {

    return (
        <main className="container">
            <div className="blender_icon"/>
            <div className="text_container">   
                <h1 className="title">Blender</h1>
                <ul className="list">
                    <li className="blender_list_item">Excels at creating 3D game assets</li>
                    <li className="blender_list_item">Allows for the creation of textures and meshes for 3D models</li>
                    <li className="blender_list_item">Support for animating 3D models</li>
                </ul>
                <a 
                    className="button" 
                    href="https://www.blender.org/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default SketchBook_Details