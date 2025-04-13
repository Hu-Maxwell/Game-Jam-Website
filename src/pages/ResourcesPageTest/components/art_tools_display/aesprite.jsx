import "./styles.css"

const Aesprite_Details = () => {

    return (
        <main className="container">
            <div className="aesprite_icon"/>
            <div className="text_container">   
                <h1 className="title">Aesprite</h1>
                <ul className="list">
                    <li className="list_item">Features such as Onion Skin and Playback make animation easier</li>
                    <li className="list_item">Optimized for Pixel Art </li>
                    <li className="list_item">Support for conversion of pixel art to other formats like PNG, GIF, etc through the command line</li>
                </ul>
                <a 
                    className="button" 
                    href="http://aseprite.org/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Aesprite_Details