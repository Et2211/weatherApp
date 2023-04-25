import logo from './logo.svg';
import './App.css';
import { connect, useSelector } from 'react-redux';
import { simpleAction } from './actions/simpleActions';
import store from './store'

function App(props) {
  console.log(useSelector(state => state))
  const counter = (useSelector(state => state.simpleReducer.counter))
  console.log(counter)

  const simpleFunction = (event) => {
    console.log(props)
    props.simpleAction();
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
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
