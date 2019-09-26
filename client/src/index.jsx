import React from "react";
import ReactDOM from "react-dom";

import Comp from './comp.jsx';
import VidSelect from './vidSelect.jsx';
import Screen from './screen.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vids : [
                {testText: 'na'},
                {testText: 'na'},
                {testText: 'Na'},
                {testText: 'Na'},
                {testText: 'BATMAN!'},
                {testText: 'word'},
                {testText: 'two words'}
            ]
        };
    }

    render(){
        return(
            <div id="main">
                <Comp/>
                <Screen/>
                <VidSelect vids={this.state.vids}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById("app"));