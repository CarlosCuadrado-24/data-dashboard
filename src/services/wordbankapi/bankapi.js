import axios from 'axios';

function getDataBank (country,indicator,year){
    const currentYear = new Date().getFullYear();
    return `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&per_page=100&date=${year}:${currentYear}`;  
}
