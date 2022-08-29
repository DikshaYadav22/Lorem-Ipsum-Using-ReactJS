import './App.css';
import React, {useState} from 'react';
import text from './data';
import {Card, CardBody} from 'reactstrap';

const App = () => {
  const[inputHandler, setInputHandler] = useState(0);
  const [data, setData] = useState(text);
  let [items, setItems] = useState();
  const handleSubmit = (e) => 
  {
    e.preventDefault();
  }

  const createIpsum = () => 
  {
    let items = [...data];
    const filteredData = data.slice(0, inputHandler);
      setItems(filteredData);
  }

  return (
    <div className="App">
        <h3 className="mt-2">TIRED OF BORING LOREM IPSUM?</h3>
        <div>
            Paragraphs: 
            <form onSubmit={(e)=>handleSubmit(e)}>
              <input type="number" name="lorem"
                value={inputHandler}
                onChange={(e)=>setInputHandler(e.target.value)}
                
                
              />
            <button onClick={()=>createIpsum()}>Generate</button>

            </form>
            
        </div>

        <Card>
            <CardBody className='bg-dark'>
                <h4 className='text-white'>{items}</h4>
            </CardBody>
        </Card>
    </div>
  );
}

export default App;
