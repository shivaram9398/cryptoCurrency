import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {list1} = props
  console.log(list1)
  return (
    <div className="container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        className="image"
        alt="cryptocurrency"
      />
      <div className="list-con">
        <div className="row">
          <p className="coin-type">Coin Type</p>
          <div className="last row">
            <p className="coin-type">USD</p>
            <p className="coin-type">EURO</p>
          </div>
        </div>
        {list1.map(each => (
          <CryptocurrencyItem key={each.id} details={each} />
        ))}
      </div>
    </div>
  )
}
export default CryptocurrenciesList
