import React from "react";
import Navbar from "./Component/Navbars";
import Content from "./Component/Content";

export default class News extends React.Component {

    render() {
        return(
            <div>
                <Navbar />
                <Content/>
            </div>
        )

    }
}