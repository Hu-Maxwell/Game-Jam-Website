import "./styles.css"

const Bfxr_Details = () => {

    return (
        <main className="container">
            <div className="bfxr_icon"/>
            <div className="text_container">   
                <h1 className="title">Bfxr Sound Tool</h1>
                <ul className="list">
                    <li className="list_item">Support for generating random sound effects</li>
                    <li className="list_item">Focus on 8 bit and retro inspired sounds </li>
                    <li className="list_item">Customization options for controlling parameters such attack, sustain, and release times.</li>
                </ul>
                <a 
                    className="button" 
                    href="https://www.bfxr.net/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Bfxr_Details