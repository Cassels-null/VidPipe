import React from "react";
import ReactDOM from "react-dom";

class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id='description'>
                <div id='descriptionTitle'>
                    {this.props.vid.snippet.title}
                </div>
                <div id='descriptionSnip'>
                    {this.props.vid.snippet.description}
                </div>
            </div>
        )
    }

}

export default Description;