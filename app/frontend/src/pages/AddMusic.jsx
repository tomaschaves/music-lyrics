import { useState } from 'react'
import './AddMusic.css'
import axios from 'axios';

export default function AddMusic() {
  const [lyricState, setLyricState] = useState({title: '', lyric: '', annotations: ''});

  const registerMusic = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/lyric/`, {
      title: lyricState.title,
      lyric: lyricState.lyric,
      annotations: lyricState.annotations,
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  const handleSubmit = () => {
    const { title, lyric,annotations} = lyricState;
    const checkLength = [title, lyric, annotations];
    return checkLength.some((item) => item.length === 0);
  }

  return (
    <form onSubmit={registerMusic}>
      <br />
      <label htmlFor='title'>
          Title:  
        <br />
        <input type='text' value={lyricState.title} id='title' name='title' onChange={ ({target: { value }}) => setLyricState({...lyricState, title: value })} />
      </label>
      <br />
      <br />
      <div className='lyric-details'>
      <label htmlFor='lyric'>
        Lyric:
        <br />
        <textarea id='lyric' value={lyricState.lyric} name='lyric' cols='50' rows='40' onChange={ ({target: { value }}) => setLyricState({...lyricState, lyric: value })} />
      </label>
      <label htmlFor='annotations'>
        Annotations:
        <br />
        <textarea id='annotations' value={lyricState.annotations} cols='50' rows='40' onChange={ ({target: { value }}) => setLyricState({...lyricState, annotations: value })} />
      </label>
      </div>
      <button type='submit' disabled={handleSubmit()}>Add</button>
    </form>
  )
}
