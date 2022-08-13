import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CryptocurrenciesBlock = ({ rank, id, name, icon, symbol, change, oneHourChange, price, marketcap, volume }) => {

  return (
    <Link to={`/cryptocurrency/${id}`} style={{ textDecoration: 'none' }}>
      <Box width="60vw" display="flex" alignItems="center" borderBottom="1px solid var(--brown-light)">
        <Box display="flex" width="20vw" alignItems="center">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="3vw"
            p="1rem"
          >
            {rank}.
          </Typography>
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="3vw"
            p="1rem"
          >
            <Box display="flex" alignItems="center" width="15vw">
              <img src={icon} alt={icon} style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
              <Box display="flex" justifyContent="space-between" width="15vw">
                {name}
                <Typography fontSize="14px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)"
                  width="3vw">
                  {symbol.toUpperCase()}
                </Typography>
              </Box>
            </Box>
          </Typography>
        </Box>
        <Box display="flex" width="20vw">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="8vw"
            p="1rem">
            {price} $
          </Typography>
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="5vw"
            p="1rem">
            {oneHourChange} %
          </Typography>
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="5vw"
            p="1rem"
          >
            {change} %
          </Typography>
        </Box>
        <Box display="flex" width="20vw">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="10vw"
            p="1rem">
            {volume} $
          </Typography>
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="10vw"
            p="1rem">
            {marketcap} $
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default CryptocurrenciesBlock