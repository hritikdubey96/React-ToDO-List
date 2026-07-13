import { use, useState } from "react";
import { getarr,sum} from "./helper";
import "./Lottery.css";
export default function Lottery(){
    let [ticket,setticket] = useState(getarr(3));
    let isWinning = sum(ticket) === 15;
    let buyNewTicket = () =>{
        setticket(getarr(3));
    };
    return(
        <>
        <h1>Lotter Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <button onClick={buyNewTicket}>Buy new ticket</button>
        <h3>{isWinning && "Congratulation! You won!!"}</h3>
        </>    
    );
};