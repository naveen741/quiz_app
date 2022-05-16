export default function Play(props){
    const getAnswer=(selectedOption,data)=>{
        console.log(selectedOption); 
        data={...data, selectedOption};
        console.log(data);
    }
    return(
        <div className="play" style={{display: props.toQuiz}}>
            <h1>Quiz</h1>
            {
                props.questions.map((data)=>(
                    <div>
                        <div>{data.question}</div>
                        <div>
                            { 
                                data.options.map((option)=>(
                                    <button onClick={()=>getAnswer(option,data)}>{option}</button>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <button onClick={()=>props.onPlay("block")}>Submit answer</button>
            
        </div>
    );
}