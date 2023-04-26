// Write your code here
import {Component} from 'react'
import './index.css'

const eventStatusConstant = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderRegistrationClosed = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registration-closed">Registrations Are Closed Now!</h1>
      <p className="registration-closed-para">
        Stay tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  renderNewRegisterEvent = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registrations-closed-image"
      />
      <p className="registration-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can make you fall totally in love with this beautiful
        art of form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  renderRegisteredEvent = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registrations-closed-image"
      />
      <h1 className="registration-closed">
        You have already registered for the event
      </h1>
    </div>
  )

  renderNoEvent = () => (
    <div className="no-registration-container">
      <p className="no-registration-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  render() {
    const {activeEventStatus} = this.props
    switch (activeEventStatus) {
      case eventStatusConstant.registered:
        return this.renderRegisteredEvent()
      case eventStatusConstant.registrationsClosed:
        return this.renderRegistrationClosed()
      case eventStatusConstant.yetToRegister:
        return this.renderNewRegisterEvent()
      default:
        return this.renderNoEvent()
    }
  }
}

export default ActiveEventRegistrationDetails
