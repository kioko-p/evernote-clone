import { useState } from "react";

const useInput = (initialstate="")=>{
    const [value,setValue] = useState(initialstate)
    const reset = ()=>{
        setValue(initialstate)
    }
    const bind ={
        value,
        onChange: (e)=>{
            setValue(e.target.value)
        }
    }
    return [value,bind,reset]
}
export default useInput;
