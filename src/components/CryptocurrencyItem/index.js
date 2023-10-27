import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {details} = this.props
    const {currencyName, logo, usdValue, euroValue} = details
    console.log(logo)
    return (
      <li className="items">
        <div className="fst">
          <img src={logo} className="img" alt="currency_name" />
          <p className="color1">{currencyName}</p>
        </div>
        <div className="fst">
          <p className="color1">{usdValue}</p>
          <p className="color1">{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
