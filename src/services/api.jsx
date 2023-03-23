import axios from 'axios';
import CryptoJS from "crypto-js";
const ts = Date.now();
const publicKey = "750441a4bc31f92b7d722169af9cf68c";
const privateKey = "341648bd7bf053517c97289a5655429572fdb627";
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const baseURL = 'https://gateway.marvel.com:443/v1/public/characters';

export const getHero = id => {
    return axios.get(`${baseURL}/${id}?apikey=${publicKey}&ts=${ts}&hash=${hash}`);
  };

  export default {
    getHero,
  };