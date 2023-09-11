// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="image-content">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mangoes"
                className="img-styles"
              />
              <div className="butn">
                <button
                  type="button"
                  onClick={this.eatMango}
                  className="butn-styles"
                >
                  {' '}
                  Eat Mango{' '}
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="bananas"
                className="img-styles"
              />
              <div className="butn">
                <button
                  type="button"
                  className="butn-styles"
                  onClick={this.eatBanana}
                >
                  {' '}
                  Eat Banana{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
