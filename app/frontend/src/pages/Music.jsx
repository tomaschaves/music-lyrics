import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Music() {

  const [musicInfo, setMusicInfo] = useState([]);
  const id = useParams().id


  const getMusicInfo = () => {
      axios.get(`http://localhost:3001/lyric/${id}`)
      .then(function (response) {
        console.log(response.data);
        // console.log(JSON.parse(response.data.lyric));
        setMusicInfo(response.data)
      })
  }

  const saveMusic = (event) => {
    event.preventDefault();
    // console.log(musicInfo);
    axios.put(`http://localhost:3001/lyric/${id}`, {
        title: musicInfo.title,
        lyric: musicInfo.lyric,
        annotations: musicInfo.annotations,
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const deleteMusic = (event) => {
    event.preventDefault();
    // console.log(musicInfo);
    axios.delete(`http://localhost:3001/lyric/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    if(musicInfo.length === 0){
      getMusicInfo();
    }
  }, [])

  return (
    <div>
      {
        musicInfo && <h1>{musicInfo.title}</h1>
      }
      <form>

      <textarea  cols='50' rows='40' value={musicInfo.lyric} onChange={ ({ target: { value } }) => setMusicInfo({...musicInfo, lyric: value })} />
      <textarea  cols='50' rows='40' value={musicInfo.annotations} onChange={ ({target: { value }}) => setMusicInfo({...musicInfo, annotations: value })} />
      <button type="button" onClick={saveMusic}>Salvar</button>
      <button type="button" onClick={deleteMusic}>Deletar</button>
      </form>
    </div>
  )
}
