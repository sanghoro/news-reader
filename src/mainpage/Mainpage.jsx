import React from 'react'
import "./Mainpage.css"

const Mainpage = ({ articles, viewDetails }) => {
    return (
        <div className="news-container">
            <h1 className='logo'>News Reader</h1>

            <div className="article-container">
                {articles.map(article => (
                    <div key={article.url} className="card">
                        <h2 className="title">{article.title}</h2>
                        <img src={article.urlToImage} className='article-image' />
                        <p className="description">{article.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Mainpage