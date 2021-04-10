import React, { useState } from 'react'
import './input.css'

export default function Checkbox(props){



    const [checkValue , setCheckValue] = useState()

    const [ style , setStylee ] = useState({
        color : "#1e1e3c"
    })
    const check = (ev) => {
        var checked = ev.target.checked
        if (checked){
            setCheckValue('Si')
            setStylee({color:'#2196F3' , fontSize: '17px'})
        }else{
            setCheckValue('No')
            setStylee({ color : "#1e1e3c"})
        }
    }

    return(
        <>
        <div className="checkbox">
            <div className="labelCheck">
                <label style={style} htmlFor="">{props.label}</label>
            </div>
            <input type="checkbox" name={props.name} id="" onBlur={props.onBlur} onClick={check}/>
        </div>
        </>
    )
}