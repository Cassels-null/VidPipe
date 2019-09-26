import React from "react";
import ReactDOM from "react-dom";

class VidSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id="vidSelect">
                {this.props.vids.map((e)=>{return (
                    <div className='vidInList'>
                        <img src={e.snippet.thumbnails.default.url}/>
                        <div>{e.snippet.title}</div>
                    </div>
                )})}
            </div>
        )
    }

}

export default VidSelect;