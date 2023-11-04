// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gameActions";
import Game from './components/Game';
import { styled } from "styled-components";
import { motion } from "framer-motion";
import GlobalStayles from "./components/GlobalStyles";
import GameDetail from "./components/GameDetail";
import Nav from "./components/Nav";
import { fadeIn } from "./Animation";


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  const { popular, newGame, upcoming, searched } = useSelector((state) => state.games)

  const { game } = useSelector((state) => state.detail)

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      {game.id && <GameDetail />}
      <Nav />
      <GlobalStayles />
      {searched.length ? <div>
        <h2>Searched Games</h2>
        <Games>
          {searched.map(game => (
            <Game key={game.id} name={game.name}
              released={game.released} id={game.id}
              image={game.background_image} />
          ))}
        </Games>
      </div> : ''}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(game => (
          <Game key={game.id} name={game.name}
            released={game.released} id={game.id}
            image={game.background_image} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map(game => (
          <Game key={game.id} name={game.name}
            released={game.released} id={game.id}
            image={game.background_image} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGame.map(game => (
          <Game key={game.id} name={game.name}
            released={game.released} id={game.id}
            image={game.background_image} />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding : 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height : 80vh;
  display : grid;
  grid-template-columns : repeat(auto-fit , minmax(450px ,1fr));
  gap : 5rem 3rem;
`

export default App;
