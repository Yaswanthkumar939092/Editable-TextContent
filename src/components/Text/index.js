import {Component} from 'react'

import './index.css'

class Text extends Component {
  state = {isActive: false, inputValue: ''}

  onInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive, inputValue} = this.state
    const button = isActive ? 'Edit' : 'Save'

    return (
      <div className="bg-cont">
        <div className="cord-cont">
          <h1>Editable Text Input</h1>
          <div className="flex">
            {isActive ? (
              <p>{inputValue}</p>
            ) : (
              <input type="text" onChange={this.onInput} value={inputValue} />
            )}
            <button className="button" type="button" onClick={this.onButton}>
              {button}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Text
