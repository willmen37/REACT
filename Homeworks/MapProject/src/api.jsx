import axios from 'axios';




// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const fetchData = async ( type,sw, ne) => {
// console.log(sw, ne, "eaa")
let obj = {
  bl_latitude: sw.lat,
  tr_latitude: ne.lat,
  bl_longitude: sw.lng,
  tr_longitude: ne.lng}
  console.log(type, "string")
    try {
        const data = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: obj,
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_TRAVEL_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        // console.log(data)
        return(data.data.data)
    } catch (error) {
        console.error(error);
    }
}
  
  