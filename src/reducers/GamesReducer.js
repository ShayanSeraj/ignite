const initState = {
    popular : [],
    newGame : [],
    upcoming : [],
    searched : []
}

const GameReducer = (state=initState , action)=>{
    switch (action.type) {
        case 'FETCH_GAMES':
            return { ...state , 
                popular : action.payload.popular ,
                upcoming : action.payload.upcoming ,
                newGame : action.payload.newGame
            }
        case 'FETCH_SEARCHED':
            return {...state , searched : action.payload.searched}
        case 'CLEAR_SEARCHED':
            return {...state , searched : []}
        default:
            return {...state}
    }
}

export default GameReducer