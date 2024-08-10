import { useParams, Link } from 'react-router-dom';
import "./Details.css"

const Details = ({ articles }) => {
    const { index } = useParams();
    const article = articles[index];

    return (
        <div className='details-page'>
            <Link className="logo-link" to="/">
                <h1 className='logo'>The Turing Times</h1>
            </Link>
            <div className='details-container'>
                <h2 className="detail-article-title">{article.title}</h2>
                <img className="detail-article-image" src={article.urlToImage} alt={article.title} />
                <p className="detail-article-content">{article.content}</p>
                <p>Published at: {article.publishedAt}</p>
                <p>Author: {article.author}</p>
            </div>
            <div>
                <Link to="/">
                    <button className='home-button'>Go Back To Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;