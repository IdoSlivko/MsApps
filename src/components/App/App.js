import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Definitions from '../Definitions/Definitions';

import wordsApi from '../../api/WordsApi';

function App() {

  // const definitionArray = [];
  const [ definitions, setDefinitions ] = React.useState([]);

  // function handleSubmit(word) {
  //   // console.log('word:', word);
  //   wordsApi.getDefinitions(word)
  //   .then((res) => {
  //     console.log('res from api:', res.definitions);
  //     // console.log('res from api:', res);
  //     // res.definitions.map(item => {
  //     //   definitionArray.push(item.definition);
  //     // })
  //     // setDefinitions(definitionArray);
  //     setDefinitions(res.definitions);
  //   })
  //   .catch(err => console.error(err));
  // }

  function handleSubmit(word) {
    // console.log('word:', word);
    wordsApi.getDefinitions(word)
    .then((res) => {
      console.log('res from api:', res);
      // console.log('res from api:', res);
      // res.definitions.map(item => {
      //   definitionArray.push(item.definition);
      // })
      // setDefinitions(definitionArray);
      // setDefinitions(res.definitions);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="page">

      <Header></Header>
      <Main
        onSubmit={handleSubmit}
      ></Main>
      <Definitions
        definitions={definitions}
      ></Definitions>

    </div>
  );
}

export default App;


{/* <header className="App-header"> */}
  {/* <img src={logo} className="App-logo" alt="logo" /> */}
  {/* <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a> */}
{/* </header> */}