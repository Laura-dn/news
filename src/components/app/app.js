import React, { Component } from "react";
import Header from "../header";
import Aside from "../aside";
import Main from "../main";

import "./app.css";


export default class App extends Component {
    state = {
        
    };

    render() {
        return (
            <>
                <Header />
                <section className="d-flex justify-content-around">
                    <Aside />
                    <Main />
                </section>
            </>
        );
    }
}
