import { useState } from "react"
export default function Joke({setup, punchline})
{
    const [msgC,setMsgC]=useState(["1"])


  
    return(
        <div  className="text-white text-2xl font-bold font-serif mt-[50px]">
            {msgC.length===0?"you are all cought up":`you have ${msgC.length} unread msges`}
            {msgC.length===1?"yu have 1 unread msd":null}
            < hr className="mt-[10px]" />
        </div>
    )
}