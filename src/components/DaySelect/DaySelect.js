import { useState } from "react";
import DayOverview from "../DayOverview/DayOverview";
import styles from './DaySelect.module.scss'
import WeatherDetail from "../WeatherDetail/WeatherDetail";
function DaySelect(props) {

  const [selectedDay, setSelectedDay] = useState(0)

  const addDaysToToday = (daysToadd) => {
    return new Date(new Date().setDate(new Date().getDate() + daysToadd)); 
  }

  const checkIfDatesMatch = (weatherDate, dateTocheck) => {

    return weatherDate.getDate() == dateTocheck.getDate() &&
    weatherDate.getMonth() == dateTocheck.getMonth() &&
    weatherDate.getFullYear() == dateTocheck.getFullYear()
  }

  return (
    <div >
      <ul class={"nav nav-tabs "+ styles.tabs} id="myTab" role="tablist">
        <DayOverview day={0} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(0)))} />
        <DayOverview day={1} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(1)))} />
        <DayOverview day={2} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(2)))} />
        <DayOverview day={3} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(3)))} />
        <DayOverview day={4} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(4)))} />

      </ul>

      <div class="tab-content" id="myTabContent">
        <WeatherDetail day={0} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(0)))}/>
        <WeatherDetail day={1} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(1)))}/>
        <WeatherDetail day={2} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(2)))}/>
        <WeatherDetail day={3} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(3)))}/>
        <WeatherDetail day={4} selectedDay={selectedDay} setSelectedDay={setSelectedDay} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(4)))}/>
      </div>
    </div>
  );
}



export default DaySelect;
