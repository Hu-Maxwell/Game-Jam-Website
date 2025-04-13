import "./styles.css"

const Procreate_Details = () => {

    return (
        <main className="container">
            <div className="procreate_icon"/>
            <div className="text_container">   
                <h1 className="title">Procreate</h1>
                <ul className="list">
                    <li className="list_item">A wide selection of different brushes and customization options</li>
                    <li className="list_item">Intuitive interface allow for ease of use</li>
                    <li className="list_item">Supports animations through the Procreate Dreams extension allowing for frame by frame animations</li>
                </ul>
                <a 
                    className="button" 
                    href="https://procreate.com/" 
                    target="_blank"
                >
                    Learn More!
                </a>
            </div> 
        </main>
    )
}

export default Procreate_Details