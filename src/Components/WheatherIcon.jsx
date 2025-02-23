import sun from '../images/sun.svg';
import rain from '../images/rain.svg';
import smallRain from '../images/small_rain.svg';
import cloudy from '../images/mainly_cloudy.svg';
import fewClouds from '../images/clouds-svgrepo-com.svg';
import snow from '../images/snow.svg';


const WheatherIcon = ({weather}) => {

    switch (weather) {
        case "clear":
          return <img className="weatherIcon" src={sun} alt="sun" />;
        case "few clouds" || "scattered clouds":
          return <img className="weatherIcon" src={fewClouds} alt="few clouds" />;
        case "shower rain":
          return <img className="weatherIcon" src={rain} alt="rain" />;
        case "clouds" || "broken clouds":
          return <img className="weatherIcon" src={cloudy} alt="clouds" />;
        case "rain":
          return <img className="weatherIcon" src={smallRain} alt="smallRain" />;
        case "snow":
          return <img className="weatherIcon" src={snow} alt="snow" />;
        default:
          return null;
      }
};


export default WheatherIcon;