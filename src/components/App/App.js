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
  
  console.log(useSelector(state => state))

  const counter = (useSelector(state => state.locationsReducer.counter))

  const refreshLocation = (event) => {
    getRequest('/city-data').then(response=>{
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
