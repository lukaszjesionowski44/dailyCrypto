import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CryptoBlock = ({ rank, name, id, symbol, icon, change, oneHourChange, price, marketcap, volume }) => {
  return (
    <Link to={`/cryptocurrency/${id}`} style={{ textDecoration: 'none' }}>
      <Box width="200px" height="300px" margin="1rem" backgroundColor="var(--nickel)" display="flex" justifyContent="center" flexDirection="column" borderRadius="12px" className="cryptoBlock__box-shadow">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography fontSize="22px" mt="1rem" color="var(--brown-light)" fontFamily="var(--main-font)" fontWeight="500">
            {rank} {name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Typography p="0.8rem 1rem" fontFamily="var(--main-font)" color="var(--brown-light)" fontSize="20px">
            {symbol.toUpperCase()}
          </Typography>
          <Typography p="0.8rem 1rem" fontFamily="var(--main-font)" color="var(--brown-light)" fontSize="20px">
            <img src={icon} alt="icon" height="30px" />
          </Typography>
        </Box>
        <div style={{ borderTop: '1px solid var(--brown-light)', margin: '0 1rem', width: '80%' }} />
        <Box p="1rem">
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="h6" fontFamily="var(--main-font)" color="var(--brown-light)">Price:</Typography>
            <Typography variant="h6" fontFamily="var(--main-font)" color="var(--brown-light)">{price} $</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography fontSize="15px" fontFamily="var(--main-font)" color="var(--silver)">1H Change:</Typography>
            <Typography fontSize="15px" fontFamily="var(--main-font)" color="var(--silver)"> {oneHourChange} %</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography fontSize="15px" fontFamily="var(--main-font)" color="var(--silver)">24H Change: </Typography>
            <Typography fontSize="15px" fontFamily="var(--main-font)" color="var(--silver)">{change} %</Typography>
          </Box>
        </Box>
        <div style={{ borderTop: '1px solid var(--brown-light)', margin: '0 1rem', width: '80%' }} />
        <Box p="1rem">
          <Box display='flex' justifyContent='space-between'>
            <Typography fontSize="16px" fontFamily="var(--main-font)" color="var(--silver)">Market Cap:</Typography>
            <Typography fontSize="16px" fontFamily="var(--main-font)" color="var(--silver)">{marketcap} $</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography fontSize="16px" fontFamily="var(--main-font)" color="var(--silver)">24H Volume</Typography>
            <Typography fontSize="16px" fontFamily="var(--main-font)" color="var(--silver)">{volume} $</Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )

}

export default CryptoBlock