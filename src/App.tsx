import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState<string>('');
  const [data2, setData2] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch('/.netlify/functions/helloworld');
      if (results.ok) {
        const message = await results.json();
        setData(message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch('/.netlify/functions/hellodouglas');
      if (results.ok) {
        const message = await results.json();
        setData2(message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <h2>Let's see if this works</h2>
      <h4>{JSON.stringify(data)}</h4>
      <h4>{JSON.stringify(data2)}</h4>
    </div>
  );
}

export default App;
