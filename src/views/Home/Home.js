import React, { useState, useEffect } from 'react'
import "./Home.css"
import axios from 'axios'
import NewsArticle from '../../components/NewsArticle/NewsArticle'
function Home() {

    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState("apple")

    const loadNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=48672a81427a47afbfdf965519c3341c`);
            setNews(response.data.articles)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadNews()
    }, [])

    useEffect(() => {
        loadNews()
    }, [searchQuery])

    return (
        <div className='card'>
            <h1>News App</h1>
            <input type="text"
            className='input-text'
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }} />


            <div className='card'>
                {
                    news.map((newsArticle, index) => {
                        const { author, title, description, url, urlToImage, publishedAt, content } = newsArticle
                        return (<NewsArticle author={author} title={title} description={description}
                            url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content} />)
                    })
                }</div>
        </div>
    )
}

export default Home