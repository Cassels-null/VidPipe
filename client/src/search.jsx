import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.search = this.search.bind(this);
    }

    render(){
        return(
            <div id='searchContainer' onClick={()=>{this.search()}}>
                this is a component
            </div>
        )
    }

    search(){
        axios.get("http://127.0.0.1:1337/search")
        .then((result)=>{this.props.updateVids(result.data);})
        .catch((err)=>{console.log("ERROR in Search.search: "+err)})
    }

}

export default Comp;