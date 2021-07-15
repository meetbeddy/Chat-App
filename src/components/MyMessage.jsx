import React from 'react'

export default function MyMessage({message}) {
    console.log(message)
    if (message?.attatchment.length >0){
        return(
            <img src={message.attatchments[0].file}
            alt="message-attatchment"
            className="message-image"
            style={{float:"right"}}
            />
        )
    }
    return (
        <div className="message" style={{float:"right", marginRight:"18px", color:"white", backgroundColor:"#3B2A50" }}>
            {message.text}
        </div>
    )
}
