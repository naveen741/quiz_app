export default function Start(props){
    return (
        <div className="start">
            <h1>Myquiz</h1>
            <button onClick={()=>props.onStart("block")}>Start Quiz</button>
        </div>
    );
}