import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'

export const Cryptos = createContext()
export const LoadingCryptos = createContext()
export const News = createContext()
export const LoadingNews = createContext()

export const CryptosData = () => {
  return useContext(Cryptos)
}
export const LoadingCryptosData = () => {
  return useContext(LoadingCryptos)
}
export const NewsData = () => {
  return useContext(News)
}
export const LoadingNewsData = () => {
  return useContext(LoadingNews)
}

export const FetchCryptosProvider = ({ children }) => {

  const [cryptos, setCryptos] = useState({})
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState()
  const [loadingNews, setLoadingNews] = useState(true)

  useEffect(() => {
    const fetchCryptos = async () => {
      await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h').then((response) => {
        setCryptos(response)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }
    fetchCryptos()
  }, [])

  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: { q: 'crypto', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': process.env.REACT_APP_CRYPTONEWS_PRIVATE_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      await axios.request(options).then(function (response) {
        setNews(response.data.value);
        setLoadingNews(false)
      }).catch(function (error) {
        console.error(error);
      });
    }
    fetchNews()
  }, [])

  console.log(news)

  return (
    <Cryptos.Provider value={cryptos}>
      <LoadingCryptos.Provider value={loading}>
        <News.Provider value={news}>
          <LoadingNews.Provider value={loadingNews}>
            {children}
          </LoadingNews.Provider>
        </News.Provider>
      </LoadingCryptos.Provider>
    </Cryptos.Provider>
  )
}




