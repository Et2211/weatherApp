

function WeatherDetail (props) {

  return (
    <>
      <div class={props.selectedDay == props.day ? "tab-pane fade show active" : "tab-pane fade"} id={"day"+props.day} role="tabpanel" aria-labelledby="home-tab">{props.day}
      </div>
    </>
  )
}

export default WeatherDetail;