import React, { Component } from 'react';
import '../Styles/View Chatscreen Styles/Header.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            
                     <div className="title"> Messages
                     <div className="settingicon">
                     <img  width="30" className={"settingicon"}
                            src ={ require('../images/settingicon.png')}
                            alt ={"could not load image"}
                            onClick={this.props.displayPopup}/>
                            <span class="tooltiptext">Settings</span>
                            </div>

                        <div className="tabicon">
                        <img  width="30" src={ require('../images/tabicon.png') } 
                            onClick={this.props.collapseSidebar}/>
                    </div>
                    </div>
                    </div>
            );
         }
        }
        export default Header;