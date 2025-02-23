import Header from "../../Components/Header/Header";
import ThisDay from "../../Components/ThisDay/ThisDay";
import ThisDayInfo from "../../Components/ThisDayInfo/ThisDayInfo";
import OtherDays from "../../Components/OtherDays/OtherDays";
import Loading from "../../Components/loading/Loading";
import { storage } from "../../Storage/storage";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../../store/currentWheatherSlice";
import { getwheatherForMonth } from "../../store/wheatherSlice";
import { useEffect, useState } from "react";

const Home = () => {
    const dispatch = useDispatch()
    const {currentWheather} = useSelector(state => state.currentWheather)
    const {wheatherForMonth} = useSelector(state => state.wheather)
      

    const [loading, setLoading] = useState(true);  
    const [location, setLocation] = useState(() => storage.getItem('userLocation') || 'lviv');

    
    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude)
                    const newLocation = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    setLocation(newLocation);
                    storage.setItem('userLocation', newLocation); 
                    console.log('success access location');
                },
                (error) => {
                    console.error('Error location:', error.message);
                }
            );} 
    }, [])


    useEffect(()=>{
        dispatch(getCurrentWeather(location)).then(() => setLoading(false))
    }, [dispatch, loading, location])


    useEffect(() => {
        if (currentWheather && currentWheather.id) {
            dispatch(getwheatherForMonth(currentWheather.id));
        }
    }, [currentWheather, dispatch]);


    if(loading){
        return <Loading/>
    }


    return (
        <div className='container'>
            <Header/>
            <div className="today-info">
                <ThisDay item={currentWheather}/>
                <ThisDayInfo item={currentWheather}/>
            </div>
            <OtherDays items={wheatherForMonth}/>
        </div>
    );
};

export default Home;