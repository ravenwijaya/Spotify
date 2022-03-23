import React from 'react';

const Card = ({ data: { artists, album } }) => {
  return (
    <div className="card">
      <img src={album.images[0].url} alt="Avatar" />
      <div className="card_info">
        <h1>
          <b>My playlist</b>
        </h1>
        <p>{artists[0].name}</p>
        <p>{album.name}</p>
        <button>Select</button>
      </div>
    </div>
  );
};

export default Card;
