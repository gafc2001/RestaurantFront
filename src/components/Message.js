import React ,{ Component } from 'react';
import Body from './Body';
class Message extends Component{
    render(){
        return(
            <div>
                <h4>este es el Message </h4>
                <Body/>
            </div>
            
        );
    }
}
export default Message;