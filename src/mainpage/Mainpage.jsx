import React from 'react'
import Detailed from '../detailed/Detailed'

const Mainpage = ({ articles }) => {

    const articleInformation = articles.map(article => {
        return (
            <Detailed
                id={article.source.id}
                title={article.title}
                image={article.urlToImage}
                author={article.author}
                content={article.content}
                description={article.description}
                publishedAt={article.publishedAt}
            />
        )
    })


    return (
        <div>
            {articleInformation}
        </div>
    )
}

export default Mainpage