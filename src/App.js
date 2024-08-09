import './App.css';
import { useEffect, useState } from 'react';
import Mainpage from './mainpage/Mainpage'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(()=> {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4d20c82c3c37412ea4e03c58d5f5516c')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setArticles(data)
    })
  }, [])

  return (
    <div className="App">
        <Mainpage articles={articles}/>
    </div>
  );
}

export default App;
