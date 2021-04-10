import React, { useState } from 'react'
import './input.css'

export default function Texarea(props){




    const [value, setValue] = useState('')
    const [style , setStyle] = useState({})
    const [label , setLabel] = useState({})

    const focus = () => {
        setStyle({
            border: '1.9px solid #2196F3',
            background: '#f7f7f7',
            boxShadow: '0px 15px 20px -20px rgba(30,30,60,0.25)',
            background: '#e8f0fe',
        })
        setLabel({
            color:'#2196F3' , 
            fontSize: '18px'
        })
    }
    const blur = () => {
        if(value === ''){
            setStyle({
                border: '1px solid rgb(112, 112, 112)',
                background: ''
            })
            setLabel({
                color : "#1e1e3c"
            })
        }
    }

    const change = (ev) => {
        setValue(ev.target.value)
    }

    return(
        <div className="texarea" onBlur={blur}>
            <div className="label">
                <label style={label} htmlFor="">{props.label}</label>
            </div>
            <textarea onFocus={focus} onBlur={props.onBlur} style={style} onChange={change} name={props.name} value={value} placeholder={props.place}></textarea>
        </div>
    )
}