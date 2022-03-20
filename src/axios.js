import axios from 'axios';

const instances = axios.create({baseURL: "https://protfolio-sever.herokuapp.com/api/"});

export default instances;