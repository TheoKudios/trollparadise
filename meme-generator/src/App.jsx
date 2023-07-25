import React from 'react';
import Meme from './Meme';
import './App.css';

function App() {
  const [memes, setMemes] = React.useState([]);
  const [currentMemeIndex, setCurrentMemeIndex] = React.useState(0);
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setMemes(data.data.memes));
  }, []);

  return (
    <div className="App">
      <h1>Troll-Paradise</h1>
      {memes.length > 0 && (
        <Meme meme={memes[currentMemeIndex]} topText={topText} bottomText={bottomText} />
      )}
      <div className="input-container">
        <input
          type="text"
          placeholder="Oberer Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Unterer Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button
          onClick={() => setCurrentMemeIndex(currentMemeIndex - 1)}
          disabled={currentMemeIndex === 0}
        >
          Zurück
        </button>
        <button
          onClick={() => setCurrentMemeIndex(currentMemeIndex + 1)}
          disabled={currentMemeIndex === memes.length - 1}
        >
          Weiter
        </button>
      </div>
    </div>
  );
  
  

}

export default App;
