import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Step 1
// Add the words array here as a const
// const words = .......
// Make a sensible git commit
const words = [
    {"word":"responsibility", "date":"2020-04-01", "meaning":"to take action when needed"},
    {"word":"first time", "date":"2020-04-02", "meaning":"something new"},
    {"word":"stress", "date":"2020-04-03", "meaning":"felling upset, tired, and frustrated about something"},
    {"word":"self-care", "date":"2020-04-06", "meaning":"keeping yourself healthy and happy"},
    {"word":"helpful", "date":"2020-04-07", "meaning":"being of use to somebody"},
    {"word":"hopeful", "date":"2020-04-08", "meaning":"wanting something to happen"},
    {"word":"creative", "date":"2020-04-09", "meaning":"to think outside the box"},
    {"word":"protection", "date":"2020-04-10", "meaning":"something to stop something harmful"},
    {"word":"brave", "date":"2020-04-13", "meaning":"to not be scared and face your fears"},
    {"word":"independent", "date":"2020-04-14", "meaning":"to be on your own and to do thing for yourself"},
    {"word":"strong", "date":"2020-04-15", "meaning":"to keep going when things are changing and challenging"},
    {"word":"curious", "date":"2020-04-16", "meaning":"to wonder about something to explore new things"},
    {"word":"beautiful", "date":"2020-04-21", "meaning":"wonderful and nice"},
    {"word":"sincere", "date":"2020-02-22", "meaning":"to really mean what you say"},
    {"word":"bright", "date":"2020-04-23", "meaning":"to be smart or the have a light"},
    {"word":"powerful", "date":"2020-04-27", "meaning":"to be full of power"},
    {"word":"loving", "date":"2020-04-28", "meaning":"to show love to"},
    {"word":"clever", "date":"2020-04-29", "meaning":"to have quick thinking"},
    {"word":"capable", "date":"2020-04-30", "meaning":"to be able to do something"},
    {"word":"tenacious", "date":"2020-05-01", "meaning":"to set your mind to something and to follow through"},
    {"word":"analytical", "date":"2020-05-04", "meaning":"to look at things in a different perspective"},
    {"word":"kind", "date":"2020-05-05", "meaning":"to be very nice and to help people"},
    {"word":"sibling", "date":"2020-05-06", "meaning":"a brother or sister"},
    {"word":"intelligent", "date":"2020-05-07", "meaning":"to be smart and think before doing something"},
    {"word":"family", "date":"2020-05-08", "meaning":"people you are close to"},
    {"word":"thoughtful", "date":"2020-05-11", "meaning":"to think about people and be considerate to them"},
    {"word":"conscientious", "date":"2020-05-12", "meaning":"being thoughtful and being precise"},
    {"word":"adventurous", "date":"2020-05-13", "meaning":"to think outside the box and to push your limits"},
    {"word":"gratitude", "date":"2020-05-14", "meaning":"to be thankful for what you have"},
    {"word":"persevere", "date":"2020-05-15", "meaning":"to keep going even when you are struggling and times are hard"}
  ]
  
class App extends React.Component {
  randomWord() {
    // Step 2
    // choose a random word from the words const
    // assign the randomly chosen word to this variable below
    // Make a sensible git commit
    let word

    // Step 3
    // fill out the h2 headings below with properties of the word
    // for example: { word.word } { word.meaning }
    // Make a sensible git commit
    return(
      <>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      </>
    )
  }

  render() {
    return(
      <>
      <h1>Hello World</h1>
      {/* Step 4
       Call the randomWord function here like this
       { this.randomWord() }
       Make a sensible git commit
        */}
      </>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
