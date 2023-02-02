// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const randomNumber = this.getRandom()
    this.setState({randomNum: randomNumber})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Random Number</h1>
          <p className="paragraph">
            {' '}
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onGenerate} className="btn">
            Generate
          </button>
          <p className="para">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
