import React from 'react'
import { Box, Typography } from '@mui/material'

const NewsBlock = ({ sourceLogo, source, category, title, link, image }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <Box width="300px" height="260px" p='1rem' m='2rem' backgroundColor="var(--silver)" display="flex" flexDirection="column" borderRadius="12px" className="cryptoBlock__box-shadow">
        <Box display="flex" justifyContent="space-between" mb="1rem">
          <Box display="flex" flexDirection="column" justifyContent="space-between">
            <Typography flexWrap="wrap" display="flex" fontSize="20px" color="var(--gray)" fontFamily="var(--main-font)" p='0rem 1rem'>
              <img src={sourceLogo} style={{ width: "35px", height: '35px', marginRight: '1rem' }} alt="logo" /> {source}
            </Typography>
            <Typography mt='2rem' fontSize="14px" color="var(--gray)" fontFamily="var(--main-font)" fontWeight="700">
              {category}
            </Typography>
          </Box>
          <br />
          <br />
          <img src={image} style={{ height: '80px', width: 'auto' }} alt="article" />
        </Box>
        <Box mt="10px">
          <Typography display="flex" fontSize="15px" color="var(--gray)" fontFamily="var(--main-font)" overflow="hidden">
            {title}
          </Typography>
        </Box>
      </Box>
    </a>
  )
}

export default NewsBlock