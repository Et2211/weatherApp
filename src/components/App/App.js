import styles from './App.module.scss';
import { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCities, fetchWeather } from '../../redux/actions/weatherActions';
import store from '../../store'
import { getRequest } from '../../api';
import { useEffect } from 'react';
import Header from '../Header/Header';
import DaySelect from '../DaySelect/DaySelect';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const dispatch = useDispatch()
  const cityId = useState(1)

  const locations = useSelector(state=>state.locationsReducer.locations) 
  const weather = useSelector(state=>state.weatherReducer.weather) 

  useEffect(()=>{
    getLocations()
    getWeather(cityId)
  }, [])

  const getLocations = () => {
    getRequest('/city-data').then(response=>{
      dispatch(fetchCities(response))
    })
  }

  const getWeather = (cityId) => {
    getRequest('/city-data/'+ cityId).then(response=>{
      dispatch(fetchWeather(response))
    })
  }

  return (
    <div className={styles.App}>
      <Header />


      {weather && Object.keys(weather).length > 0 &&
        <DaySelect locations={locations} weather={weather}/>
      }
    </div>
  );
}



export default App;
