import { useState } from 'react'

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour
  const [showMore, setShowMore] = useState(false)
  return (
    <article className="single-tour">
      <div>
        <img className="img" src={image} alt={name} />
        <span className="tour-price">${price}</span>
      </div>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {!showMore ? `${info.substring(0, 200)}...` : info}
          <span className="info-btn" onClick={() => setShowMore(!showMore)}>
            {!showMore ? 'Read More' : 'Show Less'}
          </span>
        </p>
      </div>
      <div className="button-div">
        <button
          className="btn delete-btn"
          type="button"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  )
}
export default Tour
