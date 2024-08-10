import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./Mainpage.css"

const Mainpage = ({ articles }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = (url) => {
        navigate(`/details/${url}`);
    };

    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))


    return (
        <div className="news-container">
            <Link className="logo-link" to="/">
                <h1 className='logo'>The Turing Times</h1>
            </Link>
            <div className='search-section'>
                <input className="search-bar" type="search" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <div className="article-container">
                {filteredArticles.map((article, index) => (
                    <div key={index} className="card" onClick={() => handleClick(index)}>
                        <h2 className="title" >{article.title}</h2>
                        <img src={article.urlToImage} className='article-image' />
                        <p className="description">{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mainpage;