import axios from 'axios';

export const getCities = async (setValue) => {
    try {
      const {data} = await axios.get('https://countriesnow.space/api/v0.1/countries');
      const options = [];
      data.data.forEach((obj, i) => {
        if(i > 5 && i < 10){
            obj.cities.forEach((city) => {
                options.push({ value: city, label:` ${city}, ${obj.country}` });
            });
        }
    });
      setValue(options)
    } catch (error) {
      console.error('Error fetching cities:', error);
      setValue([]);
    }
};
