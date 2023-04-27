

function DayOverview ({weather, selectedDay, setSelectedDay, day}) {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const weekdayInt = new Date(weather[0].dt*1000).getDay()

  const icon = `https://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`
  const celciusTemp = weather[0].main.temp - 273.15


  return (
    <>
      <li class="nav-item" role="presentation" onClick={()=>(setSelectedDay(day))}>
        <button class={selectedDay == day ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target={"#day"+day} type="button" role="tab" aria-controls="home" aria-selected={selectedDay == day}>
          <div className="row align-items-center">
            <div className="col">
              <div className="row">
                <div className="col">
                  {weekday[weekdayInt]} 
                </div>
                <div className="col">
                  {celciusTemp.toFixed(0)}&#8451;
                </div>
              </div>
            <div className="col">
              <img src={icon} alt={weather[0].weather[0].description}></img>
            </div>
            </div>
          </div>
        </button>
      </li>
    </>
  )
}

export default DayOverview;