import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './mainpage/Mainpage'
import Details from './details/Details';
import PageNotFound from './pageNotFound/PageNotFound';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(()=> {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4d20c82c3c37412ea4e03c58d5f5516c')
    .then(res => res.json())
    .then(data => {
      console.log(data.articles)
      setArticles(data.articles)
    })
  }, [])


  return (
    <Router>
        <Routes>
            <Route path="/" element={<Mainpage articles={articles} />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/details/:index" element={<Details articles={articles} />} />
        </Routes>
    </Router>
);
}

export default App;