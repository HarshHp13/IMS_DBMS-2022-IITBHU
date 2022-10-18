import { requirePropFactory } from '@mui/material'
import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='card__container'>
      <div className="card__imgCont">
        <img className='card__img' src={require(`../assets/${props.img}`)} alt="" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
export default Card