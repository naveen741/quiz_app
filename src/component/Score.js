export default function Score(props){
    return(
        <div className="score" style={{display: props.toScore}}>
            <h1>Quiz</h1>
            <button onClick={()=>props.onScore("none")}>Play Again</button>
        </div>
    );
}