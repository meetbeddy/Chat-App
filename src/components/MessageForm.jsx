import React,{useState} from 'react'

export default function MessageForm() {

    const [value, setValue] = useState('')

    const handleSubmit=()=>{


    }
    const handleChange=()=>{

    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input className="message-input" placeholder="send a message..." value={value} onChange={handleChange} onSubmit={handleSubmit}/>

        </form>
    )
}
