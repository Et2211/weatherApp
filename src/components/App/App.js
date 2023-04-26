import styles from './App.module.scss';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherActions';
import store from '../../store'
import { getRequest } from '../../api';
import { useEffect } from 'react';
import Header from '../Header/Header';

function App(props) {

  const dispatch = useDispatch()

  useEffect(()=>{
    refreshLocation()
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
    </div>
  );
}



export default App;
