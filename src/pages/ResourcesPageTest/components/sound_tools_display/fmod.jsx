import "./styles.css"

const Fmod_Details = () => {

    return (
        <main className="container">
            <div className="fmod_icon"/>
            <div className="text_container">   
                <h1 className="title">Fmod Sound Tool</h1>
                <ul className="list">
                    <li className="fmod_list_item">Simplifies the process of integrating audio into game engines such as Unity</li>
                    <li className="fmod_list_item">Support for adaptive audio which allows for audio to change based on game conditions</li>
                    <li className="fmod_list_item">Optimized for real time performance</li>
                </ul>
                <a 
                    className="button" 
                    href="https://www.fmod.com/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Fmod_Details