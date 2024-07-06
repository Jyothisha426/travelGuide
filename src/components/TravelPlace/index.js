import './index.css'

const TravelPlace = props => {
  const {placeDetails} = props
  const {description, imageUrl, name} = placeDetails
  return (
    <li className="travel-list-container">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="paragraph">{description}</p>
    </li>
  )
}

export default TravelPlace
