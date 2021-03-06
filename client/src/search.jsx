import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            serverAdress : "http://184.73.96.167"
        }
        this.search = this.search.bind(this);
    }

    render(){
        return(
            // <div id='searchContainer' onClick={()=>{this.search()}}>
            //     this is a component
            // </div>
            <div id='searchHeadder'>
                <form id='searchContainer' onSubmit={this.search}>
                    <input id='searchText' type="text" onClick={this.select} defaultValue='genetic algorithms'></input>
                    <input id='searchButton' type="submit" value="search!"/>
                </form>
            </div>
        )
    }

    search(e){
        e.preventDefault();
        var urlWithSearchTerm = this.state.serverAdress + "/search?q=" + document.getElementById('searchText').value;
        axios.get(urlWithSearchTerm)
        .then((result)=>{this.props.updateVids(result.data);})
        .catch((err)=>{console.log("ERROR in Search.search: "+err)})
    }

    select(e){
        document.getElementById("searchText").select();
    }

    // handelSubmit(e){
    //     e.preventDefault();
    //     console.log(document.getElementById('searchText').value);
    //     search(document.getElementById('searchText').value);
    // }

}

export default Comp;