

function DayOverview (props) {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = new Date(props.weather[0].dt*1000).getDay()

  const icon = `https://openweathermap.org/img/wn/${props.weather[0].weather[0].icon}@2x.png`
  const celciusTemp = props.weather[0].main.temp - 273.15


  return (
    <>
      <li class="nav-item" role="presentation" onClick={()=>(props.setSelectedDay(props.day))}>
        <button class={props.selectedDay == props.day ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target={"#day"+props.day} type="button" role="tab" aria-controls="home" aria-selected={props.selectedDay == props.day}>
          <div className="row align-items-center">
            <div className="col">
              <div className="row">
                <div className="col">
                  {weekday[day]} 
                </div>
                <div className="col">
                  {celciusTemp.toFixed(0)}&#8451;
                </div>
              </div>
            <div className="col">
              <img src={icon} alt={props.weather[0].weather[0].description}></img>
            </div>
            </div>
          </div>
        </button>
      </li>
    </>
  )
}

export default DayOverview;