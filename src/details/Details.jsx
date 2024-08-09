import { useParams } from 'react-router-dom';

const Details = ({ articles }) => {
    const { index } = useParams();
    const article = articles[index];

    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.content}</p>
            <p>Published at: {article.publishedAt}</p>
            <p>Author: {article.author}</p>
        </div>
    );
};

export default Details;