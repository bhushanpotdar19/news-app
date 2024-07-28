import React, { useState, useEffect } from 'react'
import "./Home.css"
import axios from 'axios'
function Home() {

    const [news, setNews] = useState([])

    const loadNews = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=48672a81427a47afbfdf965519c3341c")
        setNews(response.data.articles)
    }

    useEffect(() => {
        loadNews()
    }, [])

    return (
        <div>
            <h1>News App</h1>
            {
                news.map((newsArticle, index) => {
                    const { auther, title, description, url, urlToImage, publishedAt, content }= newsArticle
                    return (
                        <div>
                        <img src={urlToImage} alt='image' className='news-article-img' />
                        <h1>{title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home