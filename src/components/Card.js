import React from 'react'

function Card(props) {
  return (
    <div>
      <img src={props.imagen} alt={props.titulo} />
      <p>{props.titulo}</p>
    </div>
  )
}

export default Card;
