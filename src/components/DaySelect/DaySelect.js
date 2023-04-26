import DayOverview from "../DayOverview/DayOverview";
import styles from './DaySelect.module.scss'
function DaySelect(props) {

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
        <DayOverview day={0} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(0)))} />
        <DayOverview day={1} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(1)))} />
        <DayOverview day={2} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(2)))} />
        <DayOverview day={3} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(3)))} />
        <DayOverview day={4} weather={props.weather.list.filter(weatherEvent=>checkIfDatesMatch(new Date(weatherEvent.dt*1000), addDaysToToday(4)))} />

      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>
    </div>
  );
}



export default DaySelect;
