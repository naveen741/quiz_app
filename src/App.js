import './App.css';
import Score from './component/Score';
import Start from './component/Start';
import Play from './component/Play';
import {useState} from "react"
function App() {
  const [toQuiz, setToQuiz]=useState("none");
  const [toScore, setToScore]=useState("none");
  const [questions, setQuestions]=useState([]);
  const onStart=async (key)=>{
    const data= await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    const quest=await data.json();
    let array=quest.results
    for(let i=0;i< array.length;i++){
      const options=array[i].incorrect_answers
      options.push(array[i].correct_answer)
      for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));   
        let temp = options[i];
        options[i] = options[j];
        options[j] = temp;
      }
      array[i]={...array[i],  options};
      array[i].incorrect_answers=array[i].incorrect_answers.filter((data)=>(data !==array[i].correct_answer));
    }
      setQuestions(array)
      setToQuiz(key);
      console.log(questions)
  }
  const onPlay=(key)=>{
    console.log(questions)
    setToScore(key);
  }
  const onScore=(key)=>{
    setToQuiz(key);
    setToScore(key);
  }
  return (
    <div className="App">
      <h1>MYQuiz</h1>
      <div className='myquiz'>
        <Start onStart={onStart} />
        <Play onPlay={onPlay} questions={questions} toQuiz={toQuiz}/>
        <Score onScore={onScore}  toScore={toScore}/>
      </div>
    </div>
  );
}

export default App;
