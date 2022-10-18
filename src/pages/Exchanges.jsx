import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import ExchangeBlock from '../components/ExchangeBlock'
import { CircularProgress } from '@mui/material';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchExchanges, setSearchExchanges] = useState('')
  const [filteredExchanges, setFilteredExchanges] = useState({})
  const [loadingState, setLoadingState] = useState(true)

  useEffect(() => {
    const fetchExchanges = async () => {
      await axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=100').then((request) => {
        setExchanges(request)
        setLoading(false)
      }).catch((error) => {
        console.error(error)
      })
    }
    fetchExchanges()
  }, [])

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFilteredExchanges(exchanges?.data)
      const filterExchanges = exchanges?.data?.filter((exchange) => exchange?.name.toLowerCase().includes(searchExchanges.toLowerCase()))
      setFilteredExchanges(filterExchanges)
      setLoadingState(false)
    }, 500)
    return () => {
      clearTimeout(identifier)
    }
  }, [searchExchanges, exchanges])

  if (!loadingState) {
    console.log(filteredExchanges)
  }
  console.log(exchanges)

  return (
    <Box className="main__content_media">
      {!loading && <Box
        height="7vh"
        display='flex'
        mb='2rem'
        alignItems="center"
        justifyContent="center"
        backgroundColor="var(--nickel)"
      >
        <Typography
          sx={{fontSize:{sm:'16px', md: '24px', lg: '30px'}}}
          color="var(--silver)"
          fontFamily="var(--main-font)">
          List of top 100 exchanges
        </Typography>
      </Box>}
      <Box width="80vw" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <input className="searchInput" placeholder="Search exchanges..." background="var(--silver)" onChange={(e) => setSearchExchanges(e.target.value)} />
        <Box width="60vw" display="flex">
          <Box display="flex" width="20vw">
            <Typography fontSize="18px"
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="3vw"
              p="1rem"
            >
              Trust Score
            </Typography>
            <Typography fontSize="18px"
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="3vw"
              p="1rem"
            >
              Exchange
            </Typography>
          </Box>
          <Box display="flex" width="10vw">
            <Typography fontSize="18px"
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="8vw"
              p="1rem">
              Volume
            </Typography>
          </Box>
          <Box display="flex" width="10vw">
            <Typography fontSize="18px"
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="8vw"
              p="1rem">
              Trust Score
            </Typography>
          </Box>
          <Box display="flex" width="20vw">
            <Typography fontSize="18px"
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="10vw"
              p="1rem">
              Established Date
            </Typography>
            <Typography fontSize="18px"
              color="var(--silver)"
              fontFamily="var(--main-font)"
              width="10vw"
              p="1rem"
            >
              Country
            </Typography>
          </Box>
        </Box>
        {!loadingState ? filteredExchanges?.map((exchange) => (
          <ExchangeBlock rank={exchange.trust_score_rank} key={exchange.id} link={exchange.url} name={exchange.name} icon={exchange.image} tradeVolume={exchange.trade_volume_24h_btc} country={exchange.country} score={exchange.trust_score} est={exchange.year_established} />
        )) : <CircularProgress />}
      </Box>
    </Box>
  )
}

export default Exchanges