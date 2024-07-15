import React from 'react';

const Header = () => {
    return (
        <div className="headerContainer">
            <div>
                <h3 className="navTitle" role="navigation" aria-roledescription='hyperlink' aria-labelledby='permit'> <a className="nav-link" href="/" id="permit">Permit Tracker</a></h3>
            </div>
            <div className="navLinks">
                <nav>
                    <ul className="nav">
                        <li className="nav-item headerNav" role="navigation" aria-roledescription='hyperlink' aria-labelledby='summary'><a className="nav-link" href="/summary" id="summary">Summary</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;