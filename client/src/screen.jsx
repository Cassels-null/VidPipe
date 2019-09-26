import React from "react";
import ReactDOM from "react-dom";

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
            </div>
        )
    }

}

export default Screen;