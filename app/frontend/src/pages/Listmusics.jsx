import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Listmusics() {
  const [musics, setMusics] = useState([]);


  const getMusics = () => {
      axios.get('http://localhost:3001/lyric')
      .then(function (response) {
        console.log(response.data);
        setMusics(response.data)
      })
  }

  useEffect(() => {
    if(musics.length === 0){
      getMusics();
    }
  }, [])

  return (
    <div>
      {musics && musics.map((music) => (
        <div key={music[0]}>
          <Link to={`/music/${music[0]}`}>
            {music[1]}
          </Link>
        </div>
      ))}
    </div>
  )
}
