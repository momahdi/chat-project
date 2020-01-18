import React, { Component } from 'react';
import '../Styles/View Chatscreen Styles/ChatForm.css';

import {Link} from "react-router-dom";




class ChatForm extends React.Component {
    constructor(){
        super();
        this.state= {
            message: ""
        };
    }
    
    handlechange=(e)=>{
        this.setState({message:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.sendMsg(this.state.message)
        this.setState({
            message:""
        })
    }
    handleSubmitbtn=(e)=>{
        if (this.state.message!==""){
        this.props.sendMsg(this.state.message)
        }
        this.setState({
            message:""
        })
    }
    render() { 
        return ( 
            
        <form className ="chatform" onSubmit={this.handleSubmit}>
            <div className="takephoto">
                 <img className={"add-image-icon"}
                 src ={ require('../images/attachment.png')}
                 alt ={"could not load image"}
                 onClick={this.props.displayPopup}/>
                 <span class="test">Attach file</span>
                 </div>
            <input  onChange ={this.handlechange} 
                    value={this.state.message}
                    placeholder="Enter Text"
                    type="text"/>
                  <Link to={"/photos"}>
                <div  className="allpicture">   
                <img  width="60" src={ require('../images/pictureicon.png') } />
                <span class="test">Photos</span>
                </div>
            </Link>
            <button id = "Sbtn" onClick={e=>this.handleSubmitbtn()} type="button" >Send</button> 
            </form>
         );
    }
}
 
export default ChatForm;