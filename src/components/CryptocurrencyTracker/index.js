import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import CryptocurrencyList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {list: [], isLoader: true}

  componentDidMount = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      logo: eachItem.currency_logo,
    }))

    this.setState({list: formattedData})
    this.setState({isLoader: false})
  }

  render() {
    const {isLoader, list} = this.state
    return (
      <div className="bg-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader
              type="Rings"
              color="red"
              height={80}
              width={80}
              data-testid="loader"
            />
          </div>
        ) : (
          <CryptocurrencyList list1={list} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
