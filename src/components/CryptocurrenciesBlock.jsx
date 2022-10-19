import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import millify from 'millify'

const CryptocurrenciesBlock = ({ rank, id, name, icon, symbol, change, oneHourChange, price, marketcap, volume }) => {

  return (
    <Link to={`/cryptocurrency/${id}`} style={{ textDecoration: 'none' }}>
      <Box className='cryptos__content_wrapper' display="flex" alignItems="center" borderBottom="1px solid var(--brown-light)">
        <Box display="flex" alignItems="center" className="cryptocurrencyBlock__rank">
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="3vw"
            p="1rem"
          >
            {rank}.
          </Typography>
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="3vw"
            p="1rem"
          >
            <Box display="flex" alignItems="center" className="cryptocurrencyBlock__icon">
              <img src={icon} alt={icon} style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
              <Box display="flex" justifyContent="space-between"  className="cryptocurrencyBlock__name">
                {name}
                <Typography sx={{fontSize:{xs:'9px', sm:'12px', md:'14px', xl: '16px'}}}
                  color="var(--silver)"
                  fontFamily="var(--main-font)"
                  width="3vw">
                  {symbol.toUpperCase()}
                </Typography>
              </Box>
            </Box>
          </Typography>
        </Box>
        <Box display="flex" className="cryptocurrencyBlock__price">
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="8vw"
            p="1rem">
            {millify(price,{
              precision: 3,
              lowercase:true
            })} $
          </Typography>
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="5vw"
            p="1rem">
            {oneHourChange} %
          </Typography>
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="5vw"
            p="1rem"
          >
            {change} %
          </Typography>
        </Box>
        <Box display="flex" className="cryptocurrencyBlock__volume">
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="10vw"
            p="1rem">
            {volume} $
          </Typography>
          <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'14px', xl: '16px'}}}
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