// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="products-container">
      <img
        alt="products"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
      />
    </div>
  )
}

export default Products
