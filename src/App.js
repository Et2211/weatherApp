import logo from './logo.svg';
import './App.css';
import { connect, useSelector } from 'react-redux';
import { fetchWeather } from './redux/actions/weatherActions';
import store from './store'
import { getRequest } from './api';

function App(props) {
  
  const counter = (useSelector(state => state.simpleReducer.counter))

  const simpleFunction = (event) => {
    props.fetchWeather();
  }


  return (
    <div className="App">
        <button onClick={simpleFunction}>Test redux action</button>
        <p>{counter}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  fetchWeather: () => dispatch(fetchWeather())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
