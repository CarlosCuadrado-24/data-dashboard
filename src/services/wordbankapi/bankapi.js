import axios from 'axios';

export async function getDataBankDiseases (country,indicator,year){
    const currentYear = new Date().getFullYear();
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&per_page=100&date=${year}:${currentYear}`;
    const response = await axios.get(url); 
    return response;
}

export async function getDataBankTotalPeoples (country,year){
    const currentYear = new Date().getFullYear();
    const url = `https://api.worldbank.org/v2/country/${country}/indicator/SP.POP.TOTL?format=json&date=${year}:${currentYear}`;
    const response = await axios.get(url); 
    return response;
}
