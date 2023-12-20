import React, {useState} from "react"
import { WeatherAPI } from "./WeatherAPI"

// active

const WeatherApp = () => {


    //  should hide api key
    const apiKey = "7ea26069cf404a908cd121227231312"


    const [cities, setCities] = useState(['Moscow', 'Paris', 'Rome', 'Berlin', 'London'])
    const [cityIsSelected, setCityIsSelected] = useState(false)
    const [citySelected, setCitySelected] = useState('')
    const [temperature, setTemperature] = useState(0)
    const [newCity, setNewCity] = useState('')

    

    const cityBack = () => {
        setCityIsSelected(false)
    }

    const w = new WeatherAPI(apiKey)

    
    const selectCity = async (index) => {
        setCityIsSelected(true)
        const temp = await w.getByCityName(cities[index])
        setTemperature(temp)
        setCitySelected(cities[index])
    }

    const addNewCity = () => {


        setCities([...cities, newCity])

        setNewCity('')




    }


  


    return (

        <div className='container'>
            <h2>My Weather app</h2>

            <div>
                <h3>Add new city</h3>
                <div className="container">
                    <div className="row">
                        <div className="col s2"></div>
                        <input 
                        placeholder="City"
                        id="first_name" 
                        type="text" className="validate col s6"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        />
                        <div className="col s1"></div>
                        <button className="btn col s1" onClick={addNewCity}>Add</button>
                    </div>
                    
                </div>
            </div>
            <div>
                <div>
                    <div className="row">
                        <h3 className={cityIsSelected ?" col s8" : " col s12"}>Choose city:</h3>
                        <div className= { "collection"+(cityIsSelected ? " col s8" : " col s12")}>

                            { cities.map((c, i) => (
                                <a href="#!" key={i} onClick={async() => await selectCity(i)} className="collection-item">{c}</a>
                            ))}
                        </div>
                        
                        {
                            cityIsSelected ? 
                            <div className="col s4">
                                <h4>
                                    <button onClick={cityBack} className="btn"><i className="material-icons">arrow_back</i></button>
                                    <br />
                                    Weather in {citySelected}
                                    <br />

                                    {temperature}°C
                                </h4>

                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WeatherApp