import { useState } from "react";

export default function State(){
    const [count,setCount]=useState(0)

    function add()
    {
        setCount((prev)=>prev+1)
    }
    function sub()
    {
        setCount((prev)=>prev-1)
    }
    
    return(
        <div className="w-full h-[700px] flex   justify-center iteams-center">
           <button onClick={sub} className="bg-red-500 h-fit p-8 rounded-full ">sub</button>
           <Count number={count}/>
           <button onClick={add} className="bg-green-600  h-fit p-8 rounded-full">add</button>

        </div>
    )
}

function Count({number})
{
  return(
    <>
<button className="p-5 rounded-full h-fit bg-gray-300">{number}</button>
</>
  )
}