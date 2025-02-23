import style from './OtherDays.module.scss';
import WheatherIcon from '../WheatherIcon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../store/currentWheatherSlice';
import {getData, isToday} from '../functions/getDate';

const OtherDays = ({items}) => {

    const dispatch = useDispatch()

    const {isLoading} = useSelector(state => state.wheather)
    const [daysCount, setDaysCount] = useState(6)


    if(isLoading){

        return <div className={style.days}>
            Loading...
        </div>
    }


    return (
        <div className={style.days}>
            <div className={style.buttons}>
                <button className={`${style.btn} ${daysCount === 6 ? style.btn_active : ''}`} onClick={()=>setDaysCount(6)}>for 6 days</button>
                <button className={`${style.btn} ${daysCount === 12 ? style.btn_active : ''}`}  onClick={()=>setDaysCount(12)}>for 12 days</button>
                <button className={`${style.btn} ${daysCount === 30 ? style.btn_active : ''}`} onClick={()=>setDaysCount(30)}>for 30 days</button>
            </div>
            <ul className={style.list}>
                {
                    items && items.list.map((day, index) => {
                        if(index < daysCount){
                            return (
                                <li key={index} className={style.day} onClick={()=>dispatch(changeDay(day))}>
                                    <div className={style.day_name}>
                                        {isToday(day.dt_txt)}
                                    </div>
                                    <div className={style.day_data}>
                                        {getData(day.dt_txt).month}
                                    </div>
                                    <div className={style.day_hour}>
                                        {(day.dt_txt.split(' ')[1]).slice(0,5)}
                                    </div>
                                    <div className={style.day_img}>
                                        {WheatherIcon && <WheatherIcon weather={day.weather[0].main.toLowerCase()}/>}
                                    </div>
                                    <div className={style.day_degree}>
                                        {(day.main.temp - 273.15).toFixed(1)}&deg;
                                    </div>
                                    <div className={style.day_description}>
                                        {day.weather[0].description}
                                    </div>
                                </li>
                            )
                        }
                    })
                }
            </ul> 
        </div>
    );
};

export default OtherDays;