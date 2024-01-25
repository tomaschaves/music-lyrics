import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Listmusics() {
  const [musics, setMusics] = useState([]);
  const [load, setLoad] = useState(false)

  const getMusics = () => {
      axios.get('http://localhost:3001/lyric')
      .then(function (response) {
        // console.log(response.data);
        setMusics(response.data)
      })
  }

  const deleteMusic = async (id) => {
    setLoad(true);
    // console.log(`http://localhost:3001/lyric/${id}`);
    // console.log(musicInfo);
    axios.delete(`http://localhost:3001/lyric/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
      // window.location.reload(false)
    setLoad(false);
  }

  useEffect(() => {
    if(musics.length === 0){
      getMusics();
    }
  }, [])

  return (
    <div>
      {
        load ? <h1></h1> : <h1></h1>
      }
      <h1>Lista de Músicas</h1>
      {musics && musics.map((music) => (
        <div key={music[0]}>
          <Link to={`/music/${music[0]}`}>
            {music[1]}
          </Link>
          <button type='button' onClick={() => deleteMusic(music[0])}>Deletar</button>
        </div>
      ))}
    </div>
  )
}
