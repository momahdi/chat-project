import React, { Component } from 'react';
import '../Styles/Gstyle.css';
import '../Styles/View Chatscreen Styles/RoomSetting.css'
import {Link} from 'react-router-dom';

class Roomsettings extends Component{
    constructor(){
        super();
        this.state= {
            usernameToadd: "",
            usernameToremove:"",
            roomtojoin:""
        };
    }


    handlechangeadd=(e)=>{
        this.setState({usernameToadd:e.target.value})
    }
    handlechangeremove=(e)=>{
        this.setState({usernameToremove:e.target.value})
    }
    handlechangejoin=(e)=>{
        this.setState({roomtojoin:e.target.value})
    }

    handleSubmitTojoin=(e)=>{
        e.preventDefault();
        this.props.joinroom(this.state.roomtojoin)
        this.setState({
            roomtojoin:""
        })
    }
    
    handleSubmitToAdd=(e)=>{
        e.preventDefault();
        this.props.addusertoroom(this.state.usernameToadd)
        this.setState({
            usernameToadd:""
        })
    }
    handleSubmitToRemove=(e)=>{
        e.preventDefault();
        this.props.removeUserFromRoom(this.state.usernameToremove)
        this.setState({
            usernameToremove:""
        })
    }
 

        render(){
            return(
                
           <div className="content-room-settings">
                <form className ="room-setting-form" onSubmit={this.handleSubmitToAdd}>
                    <input  onChange ={this.handlechangeadd} 
                            value={this.state.usernameToadd}
                            placeholder="add user"
                            type="text"/>
                    </form>

                    <form className ="room-setting-form" onSubmit={this.handleSubmitToRemove}>
                    <input  onChange ={this.handlechangeremove} 
                            value={this.state.usernameToremove}
                            placeholder="remove user"
                            type="text"/>
                    </form>

                    <button id = "addusertoroom" className="room-setting-btn" onClick={this.props.leaveRoom} 
                    type="button" >Leave room
                    </button> 

                    <Link to ="/">
                    <button className="room-setting-btn" type="button" >sign out</button> 
                    </Link>
                    <h3>users</h3>
                    <div className="users-box">
                        {this.props.users.map((user, i)=>{
                        return (
                            <div key={i}className="user-box">
                                <img key = {i}className= "user-image" src ={user.avatarURL} alt ={"no image"}/>
                                <div key ={i}className="user-name">{user.name}</div>
                                { user.presence.state==='online'?
                                <img key={i} className="status-image" width="8 " src={ require('../images/online.png') } />:""}
                                
                            </div>
                        )
                        })}
                    </div>
            </div>
         

            );
        }
       }
    export default Roomsettings; 