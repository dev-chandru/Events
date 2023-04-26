// Write your code here
import './index.css'

const EventItems = props => {
  const {eventsDetails, onCheckingEventStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventsDetails
  const onClickEvent = () => {
    onCheckingEventStatus(registrationStatus)
  }
  return (
    <li className="event-item-container">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItems
