import "./styles.css"

const Audacity_Details = () => {

    return (
        <main className="container">
            <div className="audacity_icon"/>
            <div className="text_container">   
                <h1 className="title">Audacity Sound Tool</h1>
                <ul className="list">
                    <li className="list_item">Support for multi-track editing</li>
                    <li className="list_item">Supports the use of third party plugins </li>
                    <li className="list_item">Support for a wide range of audio formats such as WAV, AIFF, MP3, FLAC, and Ogg Vorbis</li>
                </ul>
                <a 
                    className="button" 
                    href="https://www.audacityteam.org/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Audacity_Details