import style from './ThisDayInfo.module.scss';
import temperatureIcin from '../../images/thermometer 1.svg';
import pressureIcin from '../../images/humidity 1.svg'
import precipitationIcin from '../../images/osadky.svg'
import windIcin from '../../images/wind 1.svg'
import { useSelector } from 'react-redux';

const ThisDayInfo = ({item}) => {

    const {isLoading} = useSelector(state => state.currentWheather)

    if(isLoading){
        return <div className={style.info}>
            Loading...
        </div>
    }

    return (
        <div className={style.info}>
            <ul className={style.info_list}>
            <li className={style.temperature}>
                    <div className={style.img}>
                        <img src={temperatureIcin} alt="icon" />
                    </div>
                    <div className={style.item_title}>
                        Temperature
                    </div>
                </li>
                <li className={style.pressure}>
                    <div className={style.img}>
                        <img src={pressureIcin} alt="icon" />
                    </div>
                    <div className={style.item_title}>
                        Pressure
                    </div>
                </li>
                <li className={style.precipitation}>
                    <div className={style.img}>
                        <img src={precipitationIcin} alt="icon" />
                    </div>
                    <div className={style.item_title}>
                        Humidity
                    </div>
                </li>
                <li className={style.wind}>
                    <div className={style.img}>
                        <img src={windIcin} alt="icon" />
                    </div>
                    <div className={style.item_title}>
                        Wind speed
                    </div>
                </li>
            </ul>
            <ul className={style.item_info}>
                <li>{(item.main.temp - 273.15).toFixed(1)}&deg;</li>
                <li>{(item.main.pressure).toFixed()}mm</li>
                <li>{item.main.humidity}%</li>
                <li>{(item.wind.speed).toFixed(2)}m/s</li>
            </ul>
        </div>
    );
};

export default ThisDayInfo;