import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author, title, description, url, urlToImage, publishedAt, content}) {
    return (
    <div className='news-article-card' >
            <img src={urlToImage} alt='image' className='news-article-img' />
            <h1 className='article-title'>{title}</h1>
            <div className='article-info'>
               <p>{author}</p> 
                <p>{publishedAt}</p>
            </div>
            <p>{description}</p>
            <a href={url} target='blank' className='read-btn'>Read More</a>
        </div>
    ) 
}

export default NewsArticle