import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Mainpage.css";

const Mainpage = ({ articles }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="news-container">
            <Link className="logo-link" to="/">
                <h1 className='logo'>The Turing Times</h1>
            </Link>
            <div className='search-section'>
                <input
                    className="search-bar"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="article-container">
                {filteredArticles.map((article, index) => (
                    <Link
                        key={index}
                        to={`/details/${index}`}
                        className="card"
                    >
                        <h2 className="title">{article.title}</h2>
                        <img src={article.urlToImage} className='article-image' alt={article.title} />
                        <p className="description">{article.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Mainpage;
