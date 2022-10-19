import React, { useEffect, useState } from 'react'
import { CryptosData, LoadingCryptosData } from '../context/CryptoContext'
import CryptocurrenciesBlock from '../components/CryptocurrenciesBlock'
import { Box, Typography } from '@mui/material'
import millify from 'millify'
import { CircularProgress } from '@mui/material';


const Cryptocurrencies = () => {
  const cryptos = CryptosData()
  const loading = LoadingCryptosData()

  const [searchCrypto, setSearchCrypto] = useState('')
  const [filteredCrypto, setFilteredCrypto] = useState()


  useEffect(() => {
    const identifier = setTimeout(() => {
      const filterCrypto = cryptos?.data?.filter((coin) => coin.name.toLowerCase().includes(searchCrypto.toLowerCase()))
      setFilteredCrypto(filterCrypto)
    }, 500)
    return () => {
      clearTimeout(identifier)
    }
  }, [searchCrypto, cryptos])


  if (!cryptos.data) return 'loading'
  console.log(cryptos)

  return (
    <Box className="main__content_wrapper">
      {!loading && <Box
        height="7vh"
        display='flex'
        alignItems="center"
        justifyContent="center"
        backgroundColor="var(--nickel)"
      >
        <Typography
          sx={{fontSize: {xs:'20px', sm:'22px',md:'24px', lg:'30px'}}}
          color="var(--silver)"
          fontFamily="var(--main-font)">
          List of top 100 cryptocurrencies
        </Typography>
      </Box>}
      <Box className="main__content_wrapper" p="2rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <input className="searchInput" placeholder="Search cryptocurrencies..." background="var(--silver)" onChange={(e) => setSearchCrypto(e.target.value)} />
        <Box className='cryptos__content_wrapper' display="flex">
          <Box display="flex" sx={{width:{xs:'33vw', md:'20vw'}}}>
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}, width:{xs:'6vw', md:'4vw'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              p="1rem"
            >
              Rank
            </Typography>
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="3vw"
              p="1rem"
            >
              Coin
            </Typography>
          </Box>
          <Box display="flex" sx={{width:{xs:'42vw', md:'20vw'}}}>
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}, width:{xs:'14vw', md:'8vw'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              p="1rem">
              Price
            </Typography>
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}, width:{xs:'12vw', md:'5vw'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              p="1rem">
              1H
            </Typography>
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              p="1rem">
              24H
            </Typography>
          </Box>
          <Box display="flex" width="20vw">
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="10vw"
              p="1rem">
              24h Volume
            </Typography>
            <Typography sx={{fontSize: {xs:'12px', sm:'14px',md:'16px', lg:'18px'}}}
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="10vw"
              p="1rem"
            >
              Market Cap
            </Typography>
          </Box>
        </Box>
        <Box className='cryptos__content_wrapper'>
          {!filteredCrypto &&
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              <CircularProgress />
            </Box>
          }
          {!loading && filteredCrypto?.map((crypto) => {
            return (
              <CryptocurrenciesBlock
                id={crypto.id}
                key={crypto.id}
                rank={crypto.market_cap_rank}
                icon={crypto.image}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.current_price}
                oneHourChange={millify(+crypto.price_change_percentage_1h_in_currency)}
                change={millify(+crypto.price_change_percentage_24h)}
                volume={millify(+crypto.total_volume)}
                marketcap={millify(+crypto.market_cap)} />
            )
          })}
        </Box>
      </Box>
    </Box >
  )
}

export default Cryptocurrencies
