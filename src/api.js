const API_KEY = '42966cdace404bc2be7cab28852f49c9'

const base_url = 'https://api.rawg.io/api/'

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()

const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`

const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`

const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGameURL = () =>{
   return `${base_url}${popular_games}`
} 

export const upcomingGameURL = () =>{
   return `${base_url}${upcoming_games}`
}

export const newGamesURL = () =>{
   return `${base_url}${new_games}`
} 

export const gameDetailsURL = (game_id)=>{ 
    return `${base_url}games/${game_id}?key=${API_KEY}`
}

export const gameScreenshotURL = (game_id)=>{ 
    return `${base_url}games/${game_id}/screenshots?key=${API_KEY}`
}
export const searchGameURL = (game_name)=>{ 
    return `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=8`
}
