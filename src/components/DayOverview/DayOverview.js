

function DayOverview (props) {



  return (
    <>
    <li class="nav-item" role="presentation" onClick={()=>(props.setSelectedDay(props.day))}>
      <button class={props.selectedDay == props.day ? "nav-link active" : "nav-link"} id="home-tab" data-bs-toggle="tab" data-bs-target={"#day"+props.day} type="button" role="tab" aria-controls="home" aria-selected={props.selectedDay == props.day}>Home</button>
    </li>
    </>
  )
}

export default DayOverview;