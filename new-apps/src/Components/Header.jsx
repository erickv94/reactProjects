import React from 'react';

const Header = ({title}) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <span className="brand-logo center">{title}</span>
        </nav>
    );
};

export default Header;

