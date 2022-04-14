import { useState } from 'react';
import './App.css';



function App() {

  const [result, setResult] = useState(null);
  const tossMyCoin = () => {
    let tossCoin = Math.floor(Math.random() * 2);
    tossCoin === 1 ? setResult('TAILS') : setResult('HEADS')
  }

  return (
    <div className="App">
      <button type="button" onClick={tossMyCoin} data-bs-toggle="modal" data-bs-target="#exampleModal"
        className='toss_btn'>TOSS</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p style={{ color: 'white' }}>{result}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
