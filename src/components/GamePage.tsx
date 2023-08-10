import { useEffect, useRef, useState } from "react"
import { createDeck } from "../utils/constants"
import { Card } from "../utils/types";

interface Props {
    changePage: (page:string)=>void,
    userName:string,
    changeResult: (result:number[]) => void
}

const GamePage = ({changePage,userName, changeResult}:Props) => {

  const [userCard, setUserCard] = useState('number suit');
  const [compCard, setCompCard] = useState('number suit');
  const compDeck = useRef<Card[]>([]);
  let userDeck = useRef<Card[]>([]);
  const currentScore = useRef([0,0]);

  useEffect(() => {
    const deck = createDeck();
    deck.sort(() => Math.random()-0.5);
    compDeck.current = deck.slice(0,deck.length/2);
    userDeck.current = deck.slice(deck.length/2);
  },[]);

  const handleClickNext = () => {
    if (compDeck.current.length) {
      const user = userDeck.current.pop();
      const comp = compDeck.current.pop();
      if(user!.rank > comp!.rank) {
        currentScore.current[1]++;
      }
      else if(user!.rank < comp!.rank) {
        currentScore.current[0]++;
      }
      setUserCard(`${user!.rank} ${user!.suit}`)
      setCompCard(`${comp!.rank} ${comp!.suit}`)
    } else {
      changePage('end')
      changeResult(currentScore.current)
    }
  }

  return (
    <div>GamePage
        <p>Computer {currentScore.current[0]}</p>
        <div>{ compCard }</div>
        <div>{ userCard }</div>
        <p>{userName} {currentScore.current[1]}</p>
        <button onClick={handleClickNext}>Next</button>
    </div>
  )
}

export default GamePage