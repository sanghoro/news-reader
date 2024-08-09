import { useNavigate } from 'react-router-dom';
import "./Mainpage.css"

const Mainpage = ({ articles }) => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(`/details/${url}`);
    };

    return (
        <div className="news-container">
            <h1 className='logo'>News Reader</h1>
            <div className="article-container">
                {articles.map((article, index) => (
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