import { styled } from "styled-components"
import { motion } from "framer-motion"

import { useDispatch, useSelector } from "react-redux"
import { emptyDetail } from "../actions/detailsActions"
import { popUp2 } from "../Animation"

export default function GameDetail() {

    const { screen, game } = useSelector((state) => state.detail)

    const dispatch = useDispatch()

    const exitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains('shadow')) {
            dispatch(emptyDetail())
        }
    }

    const getPlatformIcon = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return <i className="fa-brands fa-playstation">4</i>
            case "PlayStation 5":
                return <i className="fa-brands fa-playstation">5</i>
            case 'Xbox':
                return <i className="fa-brands fa-xbox">One</i>
            case 'Xbox Series S/X':
                return <i className="fa-brands fa-xbox">S/X</i>
            case 'PC':
                return <i className="fa-solid fa-desktop"></i>
            case 'Nintendo Switch':
                return <i className="fa-solid fa-gamepad"></i>
            case 'macOS':
                return <i className="fa-brands fa-apple"></i>
            case 'Linux':
                return <i className="fa-brands fa-linux"></i>
            default:
                return <i className="fa-brands fa-square-steam"></i>
        }
    }

    const getStarIcon = () => {
        const stars = [];
        const rating = Math.floor(game.rating)
        for(let i=1 ; i<=5 ; i++){
            if(i<= rating){
                stars.push(<i className="fa-solid fa-star" style={{color: '#faf200'}}></i>)
            }else{
                stars.push(<i className="fa-regular fa-star" style={{color: '#faf200'}}></i>)
            }
        }
        return stars
    }

    return (
        <CardShadow onClick={exitDetailHandler} className="shadow"
        variants={popUp2} initial='hidden' animate='show'>
            <Detail>
                <Status>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating : {getStarIcon()}</p>
                    </div>

                    <Info>
                        <h3>Paltforms :</h3>
                        <Platform>
                            {game.platforms.map(data => (
                                <h3 key={data.platform.id}>{getPlatformIcon(data.platform.name)}</h3>
                            ))}
                        </Platform>
                    </Info>
                </Status>
                <Media>
                    <img src={game.background_image} alt="background_image" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img key={screen.id} src={screen.image} alt="screenShot" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
}


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: red;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    background: white;
    border-radius: 1rem;
    padding: 2rem 2rem;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`;

const Status = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platform = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    h3{
        margin-left: 2rem;
        font-size: 2rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: 60vh;
        onject-fill : cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem
`