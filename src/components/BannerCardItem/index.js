/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import './index.css'

const Banner = props => {
  const {BannerDetails} = props
  const {headerText, description, className} = BannerDetails
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <div>
          <button className="show-btn">Show more</button>
        </div>
      </div>
    </li>
  )
}

export default Banner
