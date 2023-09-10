// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isShowFirstName: false,
    isShowLastName: false,
  }

  onClickShowFirstName = () => {
    this.setState(prevState => ({isShowFirstName: !prevState.isShowFirstName}))
  }

  onClickShowLastName = () => {
    this.setState(prevState => ({isShowLastName: !prevState.isShowLastName}))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {isShowFirstName && <p className="first-name">Joe</p>}
          </div>

          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickShowLastName}
            >
              Show/Hide Lastname
            </button>
            {isShowLastName && <p className="first-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
