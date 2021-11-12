import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { ws } from "../Socket/Socket";
import "./chat.css";
const Mainchat = () => {

    const [message, setMessage] = useState("");
    const [listMessages, setListMessages] = useState([]);
    ws.onopen = (e)=>{
        console.log("Web socket open : ",e);
    }
    ws.onmessage = (message) => {
        const chatMesssage = JSON.parse(message.data);
        setListMessages([...listMessages, chatMesssage]);
    };
    ws.onclose = (event) => {
        console.log('Close: ', event);
    };
    
    const send = () => {
        const requestMessage = {
            "sender": sessionStorage.getItem("id"),
            'recipient': 15,
            "message": message,
            "datetime": new Date()
        };
        ws.send(JSON.stringify(requestMessage));
    }
    return (
        <>
            <Sidebar />
            <div className="container-chat">
                <div className="col-1-chat">
                    <header className="header-chat">
                        <div className="input-container">
                            <input type="text" className="input" placeholder="Buscar" />
                        </div>
                    </header>
                    <aside className="side-chat">
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://restaurantrestapi.herokuapp.com/api/users/55/image" alt="profile-picture" />
                                <p className="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Herbert Navarro</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://restaurantrestapi.herokuapp.com/api/users/65/image" alt="profile-picture" />
                                <p className="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">El Gato cuba</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg" alt="profile-picture" />
                                <p className="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Marck Zuckerberg</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/gtv9ql5vn2302qnk12os724bhh._SX450_.jpg" alt="profile-picture" />
                                <p className="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Bill gates</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="col-2-chat">
                    <header className="header-chat">
                        <div className="profile">
                            <div className="profile-picture">
                                <img src="https://picsum.photos/id/10/200/200" alt="profile-picture" />
                            </div>
                            <div className="profile-info">
                                <span className="name">Gustavo Farfan <i className="fas fa-circle"></i></span>
                                <span className="user-status">Activo ahora</span>
                            </div>

                        </div>
                    </header>
                    <main className="content-chat">
                        <div className="list-messages">
                            {/* Messages */}

                            {listMessages.map((e,i) => 
                                
                                <div key={i} className={`message ${e.sender==sessionStorage.getItem("id")?"right":"left"}`}>
                                    <div className="message-profile">
                                        <img src="https://picsum.photos/id/1/200/200" />
                                    </div>
                                    <div className="messages">
                                        <p className="message-text">
                                            {e.message}
                                            <span className="datetime">4:54 PM</span>
                                        </p>
                                    </div>
                                </div>)
                            }

                        </div>
                        <div className="input-message">
                            <span className="emoji"><i className="far fa-grin"></i></span>
                            <div className="input-container">
                                <textarea type="text" className="input" placeholder="Escribe un mensaje aqui" onChange={(e) => { setMessage(e.target.value) }}></textarea>
                            </div>
                            <span className="send" onClick={() => send()}><i className="fas fa-paper-plane"></i></span>
                        </div>
                    </main>
                </div>


            </div>
        </>
    );
}

export { Mainchat };