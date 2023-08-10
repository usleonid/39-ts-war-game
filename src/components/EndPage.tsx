interface Props {
    changePage: (page:string)=>void,
    totalScore:number[],
    gameScore:[n1:number, n2:number, str:string]
}

const EndPage = ({changePage,totalScore,gameScore}:Props) => {
    return (
        <div>
            <p>{ gameScore[2] }</p>
            <p>{totalScore[0]}-{totalScore[1]}</p>
            <button onClick={()=>changePage('game')}>Again?</button>
        </div>
    );
};

export default EndPage;