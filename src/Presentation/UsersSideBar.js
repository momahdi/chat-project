import React, {Component} from 'react';
import '../Styles/Gstyle.css';
import '../Styles/View Chatscreen Styles/RoomSetting.css'
import {Link} from 'react-router-dom';
import uuid from 'react-uuid'
import ImageWithDefault from "./ImageWithDefault";
import no_profile_picture from "../images/no_profile_picture.png";


class UsersSideBar extends Component {
    constructor({someProp}){
        super();
        this.state = {someProp}
    }

    componentWillReceiveProps({someProp}) {
        this.setState({...this.state,someProp})
    }

    render() {
        return (
            <div className="user-side-bar">
                <h3>users</h3>
                <div key={uuid()} className="user-box">
                    <table>
                        <thead><tr><th/><th/><th/></tr></thead>
                        <tbody>
                        {this.props.users.map((user) => {
                            return (
                                <tr key={uuid()}>
                                    <td><ImageWithDefault source={user.avatarURL} default={no_profile_picture} className="user-image"/>
                                    </td>
                                    <td><div key={uuid()} className="user-name">{user.name}</div></td>
                                    <td>{user.presence.state === 'online' ?
                                        <img key={uuid()} className="status-image" width="8" src={require('../images/online.png')}/> :
                                        <img key={uuid()} className="status-image" width="8" src={require('../images/offline.png')}/>}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>


            </div>

        );
    }
}

export default UsersSideBar;