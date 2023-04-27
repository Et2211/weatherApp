import { render, screen } from '@testing-library/react'
import App from './components/App/App'
import CitySelector from './components/CitySelector/CitySelector'
import { Provider } from 'react-redux'
import configureStore from './store';
import renderer from 'react-test-renderer'; // ES6
import './setupTests'
const store = configureStore()

jest.mock('./components/CitySelector/CitySelector')
CitySelector.mockImplementation(props => props.user)
jest.mock('./components/DayOverview/DayOverview')

test('1. App renders', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>   
  )
  
  expect(screen.getByText(/Wagonex weather/i)).toBeInTheDocument()
})

test('2. App matches snapshot', () => {
  const appTemplate = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>   
  )
  expect(appTemplate).toMatchSnapshot();

})
