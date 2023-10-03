// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  increase50 = id => {
    this.setState(prevState => ({count: prevState.count + 50}))
  }

  increase100 = id => {
    this.setState(prevState => ({count: prevState.count + 100}))
  }

  increase200 = id => {
    this.setState(prevState => ({count: prevState.count + 200}))
  }

  increase500 = id => {
    this.setState(prevState => ({count: prevState.count + 500}))
  }

  render() {
    const {count} = this.state

    const {denominationsList} = this.props

    const {id, value} = denominationsList

    return (
      <div>
        <div>
          <div>
            <h1>S</h1>
          </div>
          <h1>Sarah Williams</h1>
        </div>
        <div>
          <h>Your Balance</h>
          <div>
            <h1>{count}</h1>
            <p>in rupees</p>
          </div>
        </div>
        <div>
          <h1>Withdraw</h1>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <div>
            <DenominationItem
              key={this.id}
              value={this.value}
              increase50={this.increase50}
              increase100={this.increase100}
              increase200={this.increase200}
              increase500={this.increase500}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
