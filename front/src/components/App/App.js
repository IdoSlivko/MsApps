import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import InfoPopup from '../InfoPopup/InfoPopup';
import picsApi from '../../api/PicsApi';

function App() {

  const [ keyWord, setKeyWord ] = React.useState('');
  const [ pics, setPics ] = React.useState([]);
  const [ startPoint, setStartPoint ] = React.useState(0);
  const [ endPoint, setEndPoint ] = React.useState(9);
  const [ isInfoPopupOpen, setIsInfoPopupOpen ] = React.useState(false);
  const [ picInfo, setPicInfo ] = React.useState({});

  function handleSubmit(searchWord) {
    picsApi.getImages(searchWord)
    .then((res) => {
      setKeyWord(searchWord);
      setStartPoint(0);
      setEndPoint(9);
      if (res.hits.length > 0) {
        setPics(res.hits);
      } else {
        setPics([]);
      }
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
  }
  
  function handleShownImages(keyDirection, startPosition) {
    if (keyDirection === 0) {
      setStartPoint(startPosition);
      setEndPoint(endPoint + 9);
    } else {
      setStartPoint(startPosition);
      setEndPoint(endPoint - 9);
    }
  }

  function openInfoPopup(data) {
    setIsInfoPopupOpen(true);
    setPicInfo(data)
  }

  function closeInfoPopup() {
    setIsInfoPopupOpen(false);
  }

  return (
    <div className="page">

      <Header />

      <Navbar
        pics={pics}
        onSubmit={handleSubmit}
        startPoint={startPoint}
        endPoint={endPoint}
        handleShownImages={handleShownImages}
      />

      <Main
        pics={pics}
        keyWord={keyWord}
        startPoint={startPoint}
        endPoint={endPoint}
        openInfoPopup={openInfoPopup}
      />

      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closeInfoPopup}
        info={picInfo}
      />

    </div>
  );
}

export default App;
