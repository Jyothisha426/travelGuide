import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelPlace from './components/TravelPlace'

import './App.css'

class App extends Component {
  state = {isLoading: true, travelGuideList: []}

  componentDidMount() {
    this.getTravelGuideData()
  }

  getTravelGuideData = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const {packages} = fetchedData
      const updatedData = packages.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        imageUrl: eachData.image_url,
        description: eachData.description,
      }))
      this.setState({isLoading: false, travelGuideList: updatedData})
    }
  }

  renderTravelPlaces = () => {
    const {travelGuideList} = this.state
    return (
      <ul className="travel-places-container">
        {travelGuideList.map(each => (
          <TravelPlace key={each.id} placeDetails={each} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoader() : this.renderTravelPlaces()}
      </div>
    )
  }
}

export default App
