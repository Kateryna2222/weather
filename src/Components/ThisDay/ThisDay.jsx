import style from './ThisDay.module.scss'
import WheatherIcon from '../WheatherIcon';
import { useSelector } from 'react-redux';
import {isToday, getCurrentData} from '../functions/getDate';

const ThisDay = ({item}) => {

    const {isLoading} = useSelector(state => state.currentWheather)

    if(isLoading){
        return <div className={style.today}>
            Loading...
        </div>
    }
    

    return (
        <div className={style.today}>
            <div className={style.top}>
                <div className={style.left}>
                    <div className={style.temperature}>
                        {(item.main.temp - 273.15).toFixed(1)}&deg;
                    </div>
                    <span>{item.dt_txt? isToday(item.dt_txt) : 'Today'}</span>
                </div>
                <div className={style.img}>
                    {WheatherIcon && <WheatherIcon className={style.img} weather={(item.weather[0].main).toLowerCase()}/>}
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.time}>
                    Time:
                    <span>
                        {item.dt_txt? (item.dt_txt.split(' ')[1]).slice(0,5) : getCurrentData().hour}
                    </span>
                </div>
                <div className={style.time}>
                    City:
                    <span>{item.name}</span>
                </div>
            </div>
        </div>
    );
};

export default ThisDay;