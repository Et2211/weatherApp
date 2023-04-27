import styles from './App.module.scss';
import { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCities, fetchWeather } from '../../redux/actions/weatherActions';
import { getRequest } from '../../api';
import { useEffect } from 'react';

import Header from '../Header/Header';
import DaySelect from '../DaySelect/DaySelect';
import CitySelector from '../CitySelector/CitySelector';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App(props) {

  const dispatch = useDispatch()
  const [cityId, setCityId] = useState(1)
  const [error, setError] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  const locations = useSelector(state=>state.locationsReducer.locations) 
  const weather = useSelector(state=>state.weatherReducer.weather) 

  useEffect(()=>{
    getLocations()
    getWeather(cityId)
  }, [])

  const getLocations = () => {
    try {
    getRequest('/city-data').then(response=>{
      dispatch(fetchCities(response))
    })
    } catch(e) {
      console.log(e)
    }
  }

  const getWeather = (cityName) => {
    getRequest('/get-weather/'+ cityName).then(response=>{
      if(!response.error){
      dispatch(fetchWeather(response))
        setError(0)
        setCityName(cityName)
        localStorage.setItem("location", cityName);
      } else {
        setError(1)
        setErrorMessage(response.message)
      }
    })

  }

  return (
    <div className={styles.App}>
      <Header />

      <div className='container'>
        {locations && Object.keys(locations).length > 0 &&
          <CitySelector locations={locations} cityName={cityName} setCityName={setCityName} getWeather={getWeather} error={error} errorMessage={errorMessage}/>
        }
        {weather && Object.keys(weather).length > 0 &&
          <DaySelect locations={locations} weather={weather}/>
        }
      </div>
    </div>
  );
}



export default App;
