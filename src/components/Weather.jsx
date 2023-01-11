import { Card } from "semantic-ui-react"
import React from "react"
import moment from "moment"

const Weather = ({ weatherData }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>city Name:{weatherData.name}</Card.Header>
        <p>Temperature:{weatherData.main.temp}</p>
        <p>
          Sunrise:
          {new Date(weatherData.sys.sunrise * 1000).toLocalTimeString("en-IN")}
        </p>
        <p>
          Sunset:
          {new Date(weatherData.sys.sunset * 1000).toLocalTimeString("en-IN")}
        </p>
        <p>Description:{weatherData.weather[0].main}</p>
        <p>Humidity:{weatherData.main.humidity} %</p>
        <p>Day: {moment().format("dddd")}</p>
        <p>Date: {moment().format("LL")}</p>
      </Card.Content>
    </Card>
  )
}
export default Weather
