import { useState } from "react";

interface Props {
    changePage: (page:string)=>void,
    changeName: (name:string)=>void
}

const StartPage = ({changePage,changeName}:Props) => {
    const [nameInput,setNameInput] = useState<string>('');

    const handleClickStart =()=>{
        changePage('game');
        changeName(nameInput);
    }
    return (
        <div>
            StartPage
            <h1>Ready for Game</h1>
            <input value={nameInput} onChange={e=>
                setNameInput(e.target.value)} type='text'
                placeholder="Enter your name"></input>
            <button onClick={handleClickStart}>Start</button>
        </div>
    );
};

export default StartPage;