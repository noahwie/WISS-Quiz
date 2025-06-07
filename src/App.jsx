import './App.css'
import Button from './Button'

function App() {
  const Question1 = {
    question: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
    answer: ["Alpha", "Bravo", "Charlie"],
    correct_answer: "Alpha"
  };

  const myHandler = (event) => {
    console.log(event.target.innerHTML);

    let feedbackElement = document.querySelector('#result');
    if(event.target.innerHTML == Question1.correct_answer) {
      feedbackElement.innerHTML = "^_^";
    } else {
      feedbackElement.innerHTML = ";(";
    }
  };

  return (
      <div className='App'>
        <header className='App-header'>
          <img src="../public/img/Nerd-Emoji.png" alt="Ios Nerd Emoji" />
          <h1>Willkommen beim WISS-Quiz</h1>
          <hr />
          <h2>{Question1.question}</h2>
          <h3 id="result">:</h3>
          <hr />
        </header>

        <div className='buttonbar'>
          {Question1.answer.map((buttonLabel1) => (
            <Button label={buttonLabel1} handler={myHandler} />
          ))}
        </div>
      </div>
  );
}

export default App
