export function getData(dt_txt){
    const date = new Date(dt_txt);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const weekday = date.toLocaleString('en-US', { weekday: 'long' });
    return {
        month:`${day} ${month}`,
        weekday
    };
}

export function getCurrentData(){
    const date = new Date();
    const weekday = date.toLocaleString('en-US', { weekday: 'long' });
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const hour = `${hours}:${minutes}`
    return {
        weekday,
        hour
    }
}

export function isToday(dt){
    return getCurrentData().weekday === getData(dt).weekday?
        'Today':
        getData(dt).weekday
}