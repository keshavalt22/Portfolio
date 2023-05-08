

function Header() {
    return (
        <header className="header">
            <div className="container flex">
                <a className="brand">KESHAV KHATRI</a>
                <ul className="navbar flex column">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}



export default Header;