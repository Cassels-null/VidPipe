import React from "react";
import ReactDOM from "react-dom";

import Description from "./description.jsx"

class Screen extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id='screen'>
                <div id='currentVidContainer'>
                    <iframe id='currentVid' src={`https://www.youtube.com/embed/${this.props.vid.id.videoId}`} allowFullScreen></iframe>
                </div>
                <Description vid={this.props.vid}/>
            </div>
        )
    }

}

export default Screen;