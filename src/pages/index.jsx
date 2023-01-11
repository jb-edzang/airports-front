import { useState, useEffect } from "react"
import Weather from "@/components/weather"
//import Page from "@components/Page.jsx"

const IndexPage = () => {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })

    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
  }, [lat, long])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coord.longitude)
      })

      await fetch(
        `${process.env.NEXT_APP_API_URL}/weather/?lat={lat&long={long}&units=metric&APPID=${process.env.NEXT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result)
          // console.log(result)
        })
    }

    fetchData()
  }, [lat, long])

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  )
}

IndexPage.isPublic = true

export default IndexPage
