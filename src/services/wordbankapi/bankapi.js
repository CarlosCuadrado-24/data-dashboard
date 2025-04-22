import axios from 'axios';

export async function getDataBank (country,indicator,year){
    const currentYear = new Date().getFullYear();
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&per_page=100&date=${year}:${currentYear}`;
    const response = await axios.get(url); 
    return response;
}
