import React from "react";
import ReactDOM from "react-dom";

import VidInList from './vidInList.jsx';

class VidSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id="vidSelect">
                {this.props.vids.map((ele, index)=>{return (
                    <VidInList playNewVid={this.props.playNewVid} vidInfo={ele} vidID={index}/>
                    // <div className='vidInList'>
                    //     <img className='thumbnail' src={e.snippet.thumbnails.medium.url}/>
                    //     <div className='listTitle'>{e.snippet.title}</div>
                    // </div>
                )})}
            </div>
        )
    }

}

export default VidSelect;