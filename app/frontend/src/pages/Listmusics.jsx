import { useEffect, useState } from "react";
// const axios = require('axios');
import axios from 'axios';

export default function Listmusics() {
    const [musics, setMusics] = useState([]);


  const getMusics = () => {
    axios.get('http://localhost:3001/lyric')
    .then(function (response) {
      // manipula o sucesso da requisição
      console.log(response);
    })
    // fetch('http://localhost:3001/lyric').then((response) => console.log(response));
  }

  useEffect(() => {
    getMusics();
  }, [])

  console.log('principal');
  return (
    <div>Listmusics</div>
  )
}
