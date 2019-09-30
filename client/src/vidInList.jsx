import React from "react";
import ReactDOM from "react-dom";

class VidInList extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.play = this.play.bind(this);
    }

    render(){
        return(
            <div className='vidInList'>
                <img className='thumbnail' src={this.props.vidInfo.snippet.thumbnails.medium.url}
                onClick={this.play}/>
                <div className='listTitle'>
                    <div className="vidTitle">{this.props.vidInfo.snippet.title}</div>
                    <div className="channelTitle">{this.props.vidInfo.snippet.channelTitle}</div>
                </div>
            </div>
        )
    }

    play(e){
        e.preventDefault();
        this.props.playNewVid(this.props.vidID);
    }

}

export default VidInList;