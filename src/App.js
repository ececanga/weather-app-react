import React, {useState} from 'react'
import axios from "axios";

function App() {

    const [data, setData] = useState({})
    const [dataOslo, setDataOslo] = useState({})
    const [dataAnkara, setDataAnkara] = useState({})
    const [dataCanakkale, setDataCanakkale] = useState({})
    const [dataIzmir, setDataIzmir] = useState({})
    const [location, setLocation] = useState('')



    const urlOslo = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=704f2f47b209fed7e5a2264a2215aca0`
    const urlAnkara = `https://api.openweathermap.org/data/2.5/weather?q=Ankara&units=metric&appid=704f2f47b209fed7e5a2264a2215aca0`
    const urlCanakkale = `https://api.openweathermap.org/data/2.5/weather?q=Canakkale&units=metric&appid=704f2f47b209fed7e5a2264a2215aca0`
    const urlIzmir = `https://api.openweathermap.org/data/2.5/weather?q=Izmir&units=metric&appid=704f2f47b209fed7e5a2264a2215aca0`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=704f2f47b209fed7e5a2264a2215aca0`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        }
    }
    const ankaraFunction = () => {
        axios.get(urlAnkara).then((response) => {
            setDataAnkara(response.data)
            console.log(response.data)
        })
    }

    const osloFunction = () => {
        axios.get(urlOslo).then((response) => {
            setDataOslo(response.data)
            console.log(response.data)
        })
    }
    const canakkaleFunction = () => {
        axios.get(urlCanakkale).then((response) => {
            setDataCanakkale(response.data)
            console.log(response.data)
        })
    }
    const izmirFunction = () => {
        axios.get(urlIzmir).then((response) => {
            setDataIzmir(response.data)
            console.log(response.data)
        })
    }

    return (
        <div className="app">
            <div className="row">
                <div className="weatherColumn">
                    <h2>Weather</h2>
                </div>

                <div className="citiesColumn">
                    <div className="favoriteCities">
                        <div className="Ankara">
                            <button onClick={ankaraFunction}>Ankara</button>
                            <div className="temp">
                                {dataAnkara.main ? <h1>{dataAnkara.main.temp.toFixed()}°C</h1> : null}
                            </div>
                            <div className="cityDescription">
                                {dataAnkara.weather ? <p>{dataAnkara.weather[0].main}</p> : null}
                            </div>
                        </div>

                        <div className="Oslo">
                            <button onClick={osloFunction}>Oslo</button>
                            <div className="temp">
                                {dataOslo.main ? <h1>{dataOslo.main.temp.toFixed()}°C</h1> : null}
                            </div>
                            <div className="cityDescription">
                                {dataOslo.weather ? <p>{dataOslo.weather[0].main}</p> : null}
                            </div>
                        </div>

                        <div className="Çanakkale">
                            <button onClick={canakkaleFunction}>Çanakkale</button>
                            <div className="temp">
                                {dataCanakkale.main ? <h1>{dataCanakkale.main.temp.toFixed()}°C</h1> : null}
                            </div>
                            <div className="cityDescription">
                                {dataCanakkale.weather ? <p>{dataCanakkale.weather[0].main}</p> : null}
                            </div>
                        </div>

                        <div className="Izmir">
                            <button onClick={izmirFunction}>Izmir</button>
                            <div className="temp">
                                {dataIzmir.main ? <h1>{dataIzmir.main.temp.toFixed()}°C</h1> : null}
                            </div>
                            <div className="cityDescription">
                                {dataIzmir.weather ? <p>{dataIzmir.weather[0].main}</p> : null}
                            </div>
                        </div>

                    </div>

                </div>

                <div className="column">
                    <div className="search">
                        <input
                            value={location}
                            onChange={event => setLocation(event.target.value)}
                            onKeyPress={searchLocation}
                            placeholder='Search by city name'
                            type="text"/>
                    </div>
                    <div className="container">
                        <div className="top">
                            <div className="location">
                                <p>{data.name}</p>
                            </div>
                            <div className="temp">
                                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                            </div>
                            <div className="description">
                                {data.weather ? <p>{data.weather[0].main}</p> : null}
                            </div>
                        </div>
                        {data.name != undefined &&
                        <div className="bottom">
                            <div className="feels">
                                {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
                                <p>Feels like</p>
                            </div>
                            <div className="humidity">
                                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                {data.main ? <p className='bold'>{data.wind.speed}MPH</p> : null}
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
