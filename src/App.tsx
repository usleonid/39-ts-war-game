import { useState } from 'react';
import './App.css';
import EndPage from './components/EndPage';
import GamePage from './components/GamePage';
import StartPage from './components/StartPage';

function App() {
  const [page,setPage] = useState<string>('start');
  const [name,setName] = useState<string>('YOU');
  const [gameScore, setGameScore] = useState<[number,number,string]>([0,0,""]);
  const [totalScore, setTotalScore] = useState<number[]>([0,0]);

  const changeResult =(result:number[])=>{
      let res = 'DRAW';
      if(result[0]>result[1]){
        res="LOSE";
        setTotalScore([totalScore[0]+1, totalScore[1]]);
      }
      if(result[0]<result[1]){
        res = "WIN";
        setTotalScore([totalScore[0], totalScore[1]+1]);
      }
      setGameScore([result[0],result[1],res]);
  }

  switch(page){
    case 'end': 
    return (
        <EndPage changePage = {setPage} totalScore={totalScore} gameScore={gameScore}></EndPage>
      );
    case 'game': 
    return (
        <GamePage changePage={setPage} userName={name} changeResult={changeResult}></GamePage>
        );
    default: 
    return (
        <StartPage changePage={setPage} changeName={setName}></StartPage>
    );
  }
 
}

export default App;
