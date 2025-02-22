import "./navbar.css";

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://itch.io" target="_blank" rel="noopener noreferrer">Itch.io</a></li>
                    <li><a href="https://forms.google.com">Register</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
