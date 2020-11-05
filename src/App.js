import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Images from './components/Images'

function App() {

  const [data, setData] = useState()


  useEffect(() => {
    axios.get("https://api-dev.insidetrak.interactive1.com/homepage/get-latest-images")
    .then((res) => {
      console.log('res', res)
      setData(res.data.data)
      console.log('data', data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])



    return (
      <div className="App">
        <Images data={data}/>
      </div>
    )
  ;
}

export default App;
