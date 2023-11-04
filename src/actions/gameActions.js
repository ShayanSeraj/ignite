import axios from "axios"
import { popularGameURL , upcomingGameURL , newGamesURL, searchGameURL } from '../api'

export const loadGames = () =>async(dispatch) => {
    const popularData = await axios.get(popularGameURL())
    const newGamesData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGameURL())
    dispatch({
        type : "FETCH_GAMES",
        payload : {
            popular : popularData.data.results,
            newGame : newGamesData.data.results,
            upcoming : upcomingData.data.results
        }
    })
};

export const fetchSearch = (game_name) =>async(dispatch)=>{
    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch({
        type : 'FETCH_SEARCHED',
        payload : {
            searched : searchGames.data.results
        }
    })
}

export const clearSearched = () => {
    return {
        type: 'CLEAR_SEARCHED',
        payload :{
            searched : [{}]
        }
    }
}