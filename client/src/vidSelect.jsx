import React from "react";
import ReactDOM from "react-dom";

class VidSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                a
                {this.props.vids.map((e)=>{return <div>{e.testText}</div>})}
                b
            </div>
        )
    }

}

export default VidSelect;