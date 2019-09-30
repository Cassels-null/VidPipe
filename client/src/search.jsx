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
            // <div id='searchContainer' onClick={()=>{this.search()}}>
            //     this is a component
            // </div>
            <form id='searchContainer' onSubmit={this.search}>
                <input id='searchText' type="text"></input>
                <input type="submit" value="submit!"/>
            </form>
        )
    }

    search(e){
        e.preventDefault();
        var urlWithSearchTerm = "http://127.0.0.1:1337/search?q=" + document.getElementById('searchText').value;
        axios.get(urlWithSearchTerm)
        .then((result)=>{this.props.updateVids(result.data);})
        .catch((err)=>{console.log("ERROR in Search.search: "+err)})
    }

    // handelSubmit(e){
    //     e.preventDefault();
    //     console.log(document.getElementById('searchText').value);
    //     search(document.getElementById('searchText').value);
    // }

}

export default Comp;