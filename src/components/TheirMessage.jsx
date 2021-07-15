import React from 'react'

export default function TheirMessage({lastMessage, message}) {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{backgroundImage:`url(${message?.sender?.avatar})`}}/>
            )}

            { message?.attatchment.length > 0 ?
        
            (<img src={message.attatchments[0].file}
            alt="message-attatchment"
            className="message-image"
            style={{marginLeft: isFirstMessageByUser?"4px":"48px"}}
            />) : (
            <div className="message" style={{float:"left", backgroundColor:"#CABCDC" ,marginLeft: isFirstMessageByUser?"4px":"48px"}}>
                {message.text}
            </div>)  
            }

            
            Their message
        </div>
    )
}
