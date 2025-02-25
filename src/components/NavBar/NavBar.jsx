import "./navbar.css";

const NavBar = () => {
    return (
        <header className="header">
            <div className="websitename">
                Game Jam Website
            </div>
            <nav className="navbar">
                <a className="navbutton" href="/">Home</a>
                <a className="navbutton" href="/about">About</a>
                <a className="navbutton" href="/contact">Contact</a>
                <a className="navbutton" href="/schedule">Schedule</a>
                <a className="navbutton" href="/resources">Resources</a>
                <a className="navbutton"  target="_blank" rel="noopener noreferrer">Itch.io</a>
                <a className="navbutton" href="https://forms.google.com">Register</a>
            </nav>
        </header>
    );
};

export default NavBar;
