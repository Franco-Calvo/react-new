import React from 'react'
import './buttonIndex.css'

export default function ButtonIndex(props) {
  console.log(props.children);
  return (
    <button className={props.Style}>{props.text || props.children}</button>
  )
}
