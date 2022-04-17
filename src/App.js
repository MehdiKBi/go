import {useState } from 'react';

import './App.css';



function App() {

  const [result, setResult] = useState(null);
  const [rotat, setRotate] = useState('image-of-coin-rotate');
  const [tgl, setTgl] = useState(false);


  const tossMyCoin = () => {
    setTgl(true);
    setTimeout(()=>{
      let tossCoin = Math.floor(Math.random() * 2);
      tossCoin === 1 ? setResult('TAILS') : setResult('HEADS')
      console.log(result)
      setTgl(false);
    },1000)
  }

  

  return (
    <div className="App">
      <button className={tgl ? 'image-of-coin-rotate' : '' } id='image-of-coin' type="button" onClick={tossMyCoin} data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

      <div className="modal fade" id="exampleModal" tabIndex="2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body head-tail-body">
              {result === 'TAILS' && <p className="result-img" id='tail-image' ></p>}
              {result === 'HEADS' && <p className="result-img" id='heads-image' ></p>}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
