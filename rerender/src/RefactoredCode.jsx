import { useState } from "react";

export default function RefactoredCode({children}){
    const [x,setX]=useState(0);
    return (
        <>
            
            <button onClick={() => setX(x + 1)}>Increment</button>
            {children}
            {x}
           
        </>
    );
}
