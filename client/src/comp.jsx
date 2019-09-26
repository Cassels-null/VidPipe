import React from "react";
import ReactDOM from "react-dom";

class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                this is a component
            </div>
        )
    }

}

export default Comp;