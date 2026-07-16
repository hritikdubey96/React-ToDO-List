import { useState } from "react"
export default function Form(){
    let[fullname, setfullname] = useState("");
    let[username, setusername] = useState("");
    let handlename = (event) =>{
        setfullname(event.target.value)
    }
    let handleuser = (event) =>{
        setusername(event.target.value)
    }
    return(
        <form>
            <label htmlFor="fullName"></label>
            <input
                type="text" 
                placeholder="Enter your name brohh: " 
                value={fullname} 
                onChange={handlename}
                id="fullName"
            />
            <label htmlFor="username"></label>
            <input
                type="text" 
                placeholder="Enter your usrname: " 
                value={username} 
                onChange={handleuser}
                id="username"
            />
            <button>Click me!</button>
        </form>
    )
}