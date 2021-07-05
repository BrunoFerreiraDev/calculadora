import { div } from 'prelude-ls'
import React from 'react'
import '../style/Display.css'
export default function display(props) {

    return <div className="display">{props.value}</div>
}