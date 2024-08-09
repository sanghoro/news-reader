import { useParams, Link } from 'react-router-dom';

const Details = ({ articles }) => {
    const { index } = useParams();
    const article = articles[index];

    return (
        <div>
            <div>
                <h2>{article.title}</h2>
                <img src={article.urlToImage} alt={article.title} />
                <p>{article.content}</p>
                <p>Published at: {article.publishedAt}</p>
                <p>Author: {article.author}</p>
            </div>
            <div>
                <Link to="/">
                    <button className='home-button'>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;