import React from 'react'
import MessageForm from "./MessageForm"
import MyMessage  from './MyMessage'
import TheirMessage from './TheirMessage'

export default function ChatFeed(props) {
    const {chats, activeChat, userName, messages} =props;
    const chat = chats && chats[activeChat];

    const renderMessages=()=>{
        const keys = Object.keys(messages)

        return keys.map((key,index)=>{
            const message = messages[key];
            const lastKey = index === 0 ? null : keys[index -1];
            const isMyMessage = userName === message.sender.userName;


            return(
                <div key={`msg_${index}`} style={{width:"100%"}}>
                    <div className="message-block">
                    {
                        isMyMessage?<MyMessage message={message} />:<TheirMessage message={message} lastMessage={lastKey}/>
                    }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage? "18px" :"0px" , marginLeft: isMyMessage? '0px' :"68px"}}>
                        read-reciept
                    </div>

                </div>

            )
        })
    }

    if(!chat ) return "loading";

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=> `${person.person.userName}`)}
                </div>
            </div>
            <div>{
                renderMessages()  
            }</div>
            <div style={{height:"100px"}}/>
            <div className="message-form-container"><MessageForm {...props} chatId={activeChat} /></div>

            
        </div> 
    )
}
