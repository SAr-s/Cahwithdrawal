// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  onIncrement50 = () => {
    increase50()
  }
  onIncrement100 = () => {
    increase100()
  }

  onIncrement200 = () => {
    increase200()
  }

  onIncrement500 = () => {
    increase500()
  }

  render() {
    const {increase50, increase100, increase200, increase500} = this.props
    const {count} = this.state

    return (
      <div>
        <button className="button" onClick={this.onIncrement50}>
          50
        </button>
        <button className="button" onClick={this.onIncrement100}>
          100
        </button>
        <button className="button" onClick={this.onIncrement200}>
          200
        </button>
        <button className="button" onClick={this.onIncrement500}>
          500
        </button>
      </div>
    )
  }
}

export default DenominationItem
