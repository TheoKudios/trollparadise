/* eslint-disable react/prop-types */


import './Meme.css';

function Meme({ meme, topText, bottomText }) {
  return (
    <div className="meme">
      <h2 className="top-text">{topText}</h2>
      <img src={meme.url} alt={meme.name} />
      <h2 className="bottom-text">{bottomText}</h2>
    </div>
  );
}

export default Meme;
