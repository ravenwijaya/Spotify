import React, { useEffect, useState } from 'react';
import { getAlbums } from '../store/actions/resources';
// import { auth } from '../utils/axios';
import './home.css';

const HomePage = () => {
  const [data, setData] = useState<any>();
  const getData = async () => {
    // await auth();
    const data = await getAlbums();
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="card">
        <img src={data?.album.images[0].url} alt="Avatar" />
        <div className="card_info">
          <h1>
            <b>My playlist</b>
          </h1>
          <p>{data?.artists[0].name}</p>
          <p>{data?.album.name}</p>
          <button>Select</button>
        </div>
      </div>
      <form>
        <h1 id="title">Create Playlist</h1>
        <label htmlFor="title">Title </label>
        <input type="text" id="title" name="title" />
        <label htmlFor="artist">Artists </label>
        <input type="text" id="artist" name="artist" />
        <label htmlFor="album">Albums </label>
        <input type="text" id="album" name="album" />
        <input
          type="submit"
          className="button"
          id="submit_form"
          value="Submit"
        />
      </form>
    </>
  );
};
export default HomePage;
