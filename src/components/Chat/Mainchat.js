import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./chat.css";
const Mainchat = () => {

    return (
        <>
            <Sidebar />
            <div className="container-chat">
                <div className="col-1-chat">
                    <header className="header-chat">
                        <div className="input-container">
                            <input type="text" className="input" placeholder="Buscar"/>
                        </div>
                    </header>
                    <aside className="side-chat">
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                {/* <img src="https://restaurantrestapi.herokuapp.com/api/users/55/image" alt="profile-picture"/> */}
                                <img src="https://picsum.photos/id/200/200/200" alt="profile-picture"/>
                                <p className="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Herber Navarro</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://picsum.photos/id/100/200/200" alt="profile-picture"/>
                                <p class="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Herber Navarro</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://picsum.photos/id/1/200/200" alt="profile-picture"/>
                                <p class="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Herber Navarro</span>
                                <p className="chat-message">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className="chat-info">
                                <p className="chat-time">Justo Ahora</p>
                                <p className="chat-qty">5</p>
                            </div>
                        </div>
                        <div className="contact-chat">
                            <div className="profile-picture chat-picture">
                                <img src="https://picsum.photos/id/341/200/200" alt="profile-picture"/>
                                <p class="chat-status"></p>
                            </div>
                            <div className="chat-content">
                                <span className="chat-user">Herber Navarro</span>
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
                                <img src="https://picsum.photos/id/10/200/200" alt="profile-picture"/>
                            </div>
                            <div className="profile-info">
                                <span className="name">Gustavo Farfan <i class="fas fa-circle"></i></span>
                                <span className="user-status">Activo ahora</span>
                            </div>
                            
                        </div>
                    </header>
                    <main className="content-chat">
                        <div className="list-messages">
                            <div className="message left">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/1/200/200" />
                                </div>
                                <div className="messages">
                                    <p className="message-text">
                                        lorem ipsum dolor sit amet, consectetur adip
                                        <span className="datetime">4:54 PM</span>
                                    </p>
                                    <p className="message-text">
                                        lorem ipsum dolor sit amet, consectetur adip
                                        <span className="datetime">4:54 PM</span>
                                    </p>
                                </div>
                            </div>
                            <div className="message right">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/10/200/200" />
                                </div>
                                <p className="message-text">
                                    lorem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adip
                                    <span className="datetime">4:54 PM</span>
                                </p>
                            </div>
                            <div className="message left">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/1/200/200" />
                                </div>
                                <p className="message-text">
                                    lorem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adip
                                    orem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adip
                                    <span className="datetime">4:54 PM</span>
                                </p>
                            </div>
                            <div className="message right">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/10/200/200" />
                                </div>
                                <p className="message-text">
                                    lorem ipsum dolor sit amet, consectetur adip
                                    <span className="datetime">4:54 PM</span>
                                </p>

                            </div>
                            <div className="message left">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/1/200/200" />
                                </div>
                                <p className="message-text">
                                    lorem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adiporem ipsum dolor sit amet, consectetur adip
                                    <span className="datetime">4:54 PM</span>
                                </p>
                            </div>
                            <div className="message right">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/10/200/200" />
                                </div>
                                <p className="message-text">
                                    lorem ipsum dolor sit amet, consectetur adip
                                    <span className="datetime">4:54 PM</span>
                                </p>
                            </div>
                            <div className="message left">
                                <div className="message-profile">
                                    <img src="https://picsum.photos/id/1/200/200" />
                                </div>
                                <p className="message-text">
                                    lorem ipsum dolor sit amet, consectetur adip
                                    <span className="datetime">4:54 PM</span>
                                </p>
                            </div>
                        </div>
                        <div className="input-message">
                            <span className="emoji"><i class="far fa-grin"></i></span>
                            <div className="input-container">
                                <textarea type="text" className="input" placeholder="Escribe un mensaje aqui"></textarea>
                            </div>
                            <span className="send"><i class="fas fa-paper-plane"></i></span>
                        </div>
                    </main>
                </div>


            </div>
        </>
    );
}

export { Mainchat };