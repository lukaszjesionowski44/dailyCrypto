import { Box, Typography } from '@mui/material'
import React from 'react'
import { NewsData, LoadingNewsData } from '../context/CryptoContext'
import NewsBlock from './NewsBlock'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CryptoNews = () => {
  const news = NewsData()
  const loadingNews = LoadingNewsData()

  let frontPageNews;

  if (!loadingNews) {
    frontPageNews = news?.slice(0, 3)
    console.log(frontPageNews)
  }


  return (
    <Box p='1.5rem' display="Flex" flexDirection="column" alignItems="center" justifyContent="space-between" >
      <Typography fontSize="30px" fontFamily="var(--main-font)" color="var(--silver)">Today's news</Typography>
      <Box display="flex" alignItems="center" justifyContent="left" >
        <Link to='/news' style={{ textDecoration: 'none', color: 'var(--silver)' }}>
          All today's news
        </Link>
        <ArrowForwardIcon style={{ width: "15px", color: 'var(--silver)', marginLeft: '0.5rem' }} />
      </Box>

      {!loadingNews && <Box display="flex" flexWrap="wrap">
        {frontPageNews.map((news) => (
          <NewsBlock key={news.datePublished} sourceLogo={news?.provider[0].image?.thumbnail?.contentUrl} source={news.provider[0].name} category={news.category} title={news.name} link={news.url} image={news?.image?.thumbnail?.contentUrl} />
        ))}
      </Box>
      }
    </Box>
  )
}

export default CryptoNews