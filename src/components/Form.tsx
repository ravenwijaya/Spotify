import React from 'react';

const Form = () => {
  return (
    <form>
      <h1 id="title">Create Playlist</h1>
      <label htmlFor="title">Title </label>
      <input type="text" id="title" name="title" />
      <label htmlFor="artist">Artists </label>
      <input type="text" id="artist" name="artist" />
      <label htmlFor="album">Albums </label>
      <input type="text" id="album" name="album" />
      <input type="submit" className="button" id="submit_form" value="Submit" />
    </form>
  );
};
export default Form;
