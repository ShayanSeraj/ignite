import { styled } from "styled-components"
import { motion } from "framer-motion"
import { fetchSearch } from "../actions/gameActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { clearSearched } from "../actions/gameActions";
import { fadeIn } from "../Animation";

export default function Nav() {

    const [text , setText] = useState('')
    const dispatch = useDispatch()

    const inputHandler = (e)=>{
        setText(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(fetchSearch(text))
        setText("")
    }

    const clearSearch = () =>{
        dispatch(clearSearched())
    }

    return (
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo onClick={clearSearch}>
                <i className="fa-solid fa-fire-flame-curved"></i>
                <h1>Shayan Games</h1>
            </Logo>
            <form className="search" onSubmit={submitHandler}>
                <input type="text" 
                placeholder="enter name of game..." 
                onChange={inputHandler}
                value={text}/>
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 50%;
        font-size: 1.5rem;
        padding: 0.5rem
        border: 0;
        outline: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
        font-weight: bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    input::placeholder{
        font-size: 0.8rem;
        color: black;
        opacity: 0.5;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.2rem 0.5rem;
        font-weight: bold;
        cursor: pointer;
        background: black;
        color: white;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    i{
        font-size: 2rem;
        margin-right: 10px;
    }
`
