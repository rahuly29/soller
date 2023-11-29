import React from 'react'
import "./button.css"
import { Slide } from 'react-awesome-reveal'

const Button = (props) => {
    return (
       <Slide>
         <button className=" custom-btn btn-block px-4 py-2 " {...props} >
            {props.children}
        </button>
       </Slide>
    )
}

export default Button