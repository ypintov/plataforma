import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ picture, name, cardId:id, path}) => {
  return (
    <article className="card s-border">
      <div className="img-container s-ratio-16-9">
        <Link to={`/${path}/${id}`}>
          <img src={picture} alt={name} />
        </Link>
      </div>
      <div className="card__data s-pxy-2">
        <h3 className="t4 s-center">{name}</h3>
      </div>
    </article>
  )
}

export default Card
