import React from 'react'
import { Box, Typography } from '@mui/material'
import { LoadingNewsData, NewsData } from '../context/CryptoContext'
import NewsBlock from '../components/NewsBlock'

const News = () => {

  const loadingNews = LoadingNewsData()
  const news = NewsData()

  let allNews;

  if (!loadingNews) {
    allNews = news.slice(0, 9)
    console.log(allNews)
  }

  return (
    <Box width="80vw">
      <Box
        height="7vh"
        display='flex'
        alignItems="center"
        justifyContent="center"
        backgroundColor="var(--nickel)"
      >
        <Typography
          fontSize="30px"
          color="var(--silver)"
          fontFamily="var(--main-font)">
          Today's cryptocurrencies news
        </Typography>
      </Box>
      {!loadingNews &&
        <Box display="flex" flexWrap="wrap" width='100%' padding="0 3rem" justifyContent="center">
          {allNews.map((news) => {
            return (
              <NewsBlock key={news.datePublished} sourceLogo={news?.provider[0].image?.thumbnail?.contentUrl} source={news.provider[0].name} category={news.category} title={news.name} link={news.url} image={news?.image?.thumbnail?.contentUrl} />
            )
          })}
        </Box>}

    </Box >
  )
}

export default News