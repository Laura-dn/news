import React from "react";

import "./header.css";

function Header() {
    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="#" className="logo"></a>
                    <input className="form-control mr-sm-2" type="text" placeholder="&#128269; Поиск тем, мест и источников" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </header>
    );
}

export default Header;