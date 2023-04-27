import Slider from "react-slick";
import styles from './WeatherDetail.module.scss'

const customStyle ={
  display: "block", 
  background: "#a2a2a2",
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...customStyle }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...customStyle }}
      onClick={onClick}
    />
  );
}

function WeatherDetail (props) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    lazyLoad: true
  };

  return (
    <>
      <div class={props.selectedDay == props.day ? "tab-pane fade show active" : "tab-pane fade"} id={"day"+props.day} role="tabpanel" aria-labelledby="home-tab">

      <Slider {...settings}>
        

        {props.weather.map(weatherEvent=> {
            let time = new Date(weatherEvent.dt*1000).getHours();
            const usePM = time > 12 ? true : false

            if(time > 12) time-=12

            const icon = `https://openweathermap.org/img/wn/${weatherEvent.weather[0].icon}@4x.png`
            const celciusTemp =(weatherEvent.main.temp - 273.15).toFixed(0) 

          return (
            <div>
              <div className="row justify-content-center">
                <div className="col-6 align-items-center">
                  <p>{time}{usePM?"pm":"am"}</p>
                </div>
                <div className="col-6 align-items-center">
                  <p><b>{celciusTemp}&#8451;</b></p>
                </div>
                  <p>{weatherEvent.weather[0].description}</p>
                  <img src={icon} alt={props.weather[0].weather[0].description}></img>
              </div>
            </div>
          )
        })}


       
        </Slider>
      </div>
    </>
  )
}

export default WeatherDetail;