import React from 'react'

export default function Header(props) {
  return (
    <div style={{height:props.height //, border:"0px solid"
    }}>
      <h1 >{props.Name}</h1>
    </div>
  )
}
