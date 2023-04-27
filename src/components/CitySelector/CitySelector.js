import styles from './CitySelector.module.scss'
import { useState } from 'react';

function CitySelector ({getWeather, cityName, error, errorMessage}) {
  const [searchInput, setSearchinput] = useState('')

  const searchSubmit = (e) => {
    setSearchinput('')
    getWeather(searchInput)
  }
  return (
    <>
      <div className="row justify-content-start">
        <div className="col-6 col-md-3">
          <h2>{cityName}</h2>
        </div>
        <div className="col-6 col-md-3">
          <div class={"input-group"}>
            <div class={styles.formOutline +" form-outline"}>
              <input id="search-focus" type="search" class="form-control" value={searchInput} onChange={(e)=>setSearchinput(e.target.value)}/>
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary" onClick={searchSubmit}>
              <i class="fas fa-search"></i>
            </button>
          </div>
          {error == 1 && 
            <p className={styles.error}>{errorMessage}</p>
          }
            
        </div>
      </div>
    </>
  )
}

export default CitySelector;