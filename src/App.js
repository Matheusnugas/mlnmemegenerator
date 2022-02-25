import './App.css';
import React, { useState } from 'react';
import cringeGuy from './images/cringe-guy.png'
import didIt from './images/did-it.png';
import shiba from './images/shiba-meme.png';
import gigaChad from './images/gigachad.png';
import seal from './images/seal-meme.png';

function App() {
  const [state, setMemeState] = useState({
    topText: '',
    botText: '',
    sourceURL: 'https://pbs.twimg.com/media/Engx8BdW4AQU6ul.jpg',
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setMemeState({...state,
        sourceURL: URL.createObjectURL(img)
      });
    }
  };

  const handleSuggClick = (event) => {
    const changedElement = document.querySelector('.memeImage');
    changedElement.src = event.target.src;
  }

  const handleBotChange = (event) => {
    if(state.botText.length <= 30) {
      setMemeState({...state, botText: event.target.value})
    }
    if(state.botText.length === 30) {
      setMemeState({...state, botText: ''})
    }
  }

  const handleTopChange = (event) => {
    if(state.topText.length <= 30) {
      setMemeState({...state, topText: event.target.value})
    }
    if(state.topText.length === 30) {
      setMemeState({...state, topText: ''})
    }
  }

  return (
    <div className="App">
      <nav>
        <h1> 
          Meme Generator
        </h1>
      </nav>
      <div className="content-wrapper">
        <div className="inputWrapper">
          <label htmlFor="meme-insert" className="fileInsertLabel">
            Select your image
            <input className="insertImage" input type="file" id="meme-insert" accept="image/*" onChange={onImageChange}/>
          </label>
            <input className="textInput" placeholder="Insert top text here" maxlength="30" input type="text" id="memeTextInput" value={state.topText} onChange={handleTopChange}/>
            <input className="textInput" placeholder="Insert bottom text here" maxlength="30" input type="text" id="memeTextInput" value={state.botText} onChange={handleBotChange}/>
          <div className="suggestWrap">
            <div id="div1" onClick={handleSuggClick}>
              <img className="suggestedMeme" src={shiba} alt="shiba-meme"/>
            </div>
            <div id="div2" onClick={handleSuggClick}>
            <img className="suggestedMeme" src={cringeGuy} alt="shiba-meme"/>
            </div>
            <div id="div3" onClick={handleSuggClick}>
            <img className="suggestedMeme" src={seal} alt="shiba-meme"/>
            </div>
            <div id="div4" onClick={handleSuggClick}>
            <img className="suggestedMeme" src={gigaChad} alt="shiba-meme"/>
            </div>
            <div id="div5" onClick={handleSuggClick}>
            <img className="suggestedMeme" src={didIt} alt="shiba-meme"/>
            </div>
          </div>
        </div>
        <div className="meme-div">
          <p className="topmemeText">{state.topText}</p>
          <p className="botmemeText">{state.botText}</p>
          <img className="memeImage" src={state.sourceURL} alt="meme"/>
        </div>
      </div>
    </div>
  );
}

export default App;
