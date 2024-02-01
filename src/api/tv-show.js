import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "./config";

// https://api.themoviedb.org/3/trending/tv/day?language=en-US
// 6865a994c2fac53b2d11f533ab060e91



export class TVShowApi{
    static async fetchPopulars(){
        
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);

        console.log(response.data.results);

        return response.data.results;

        // return FAKE_POPULARS;
    }
}