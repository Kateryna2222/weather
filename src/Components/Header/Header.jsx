import style from './Header.module.scss'
import logo from '../../images/Header logo.svg'
import { storage } from '../../Storage/storage';
import { getCurrentWeather } from '../../store/currentWheatherSlice';
import { getCities } from '../functions/getCities';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { colourStyles } from './selectStyle';
import { useDispatch } from 'react-redux';


const Header = () => {

    const dispatch = useDispatch()


    // theme change
    const [theme, setTheme] = useState(storage.getItem('theme') || 'dark');
    const changeTheme = () => {
        theme === 'light'? setTheme('dark') : setTheme('light');
    }

    useEffect(()=>{

        storage.setItem('theme', theme)

        const root = document.querySelector(':root');
        const vars = [
            '--body-background',
            '--component-background',
            '--cart-background',
            '--text-color',
            '--shadow-color'
        ]

        vars.map((item)=>{
            root.style.setProperty(
                `${item}-default`,
                `var(${item}-${theme})`
            )
        })


    }, [theme])


    // select 
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(()=>{
        getCities(setCities)
    },[])

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption); 
        if (selectedOption) {
          dispatch(getCurrentWeather(selectedOption.value));
        }
      };
    

    
    return (
        <header className={style.header}>
            <div className={style.about}>
                <Link to='\'>
                    <img src={logo} alt="logo"/>
                </Link>
                <span className={style.title}>
                    Weather
                </span>
            </div>
            <div className={style.functions}>

                <svg onClick={changeTheme} width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562
                    3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 
                    0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 
                    13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF"/>
                </svg>

                <Select options={cities} 
                        styles={colourStyles} 
                        value={selectedCity}
                        onChange={handleCityChange}/>
            </div>
        </header>
    );
};

export default Header;


