import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser';
import { CryptosData, LoadingCryptosData } from '../context/CryptoContext'

import { Box, Stack, Typography } from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LineChart from '../components/LineChart'
import InventoryIcon from '@mui/icons-material/Inventory';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import PercentIcon from '@mui/icons-material/Percent';
import HomeIcon from '@mui/icons-material/Home';

import millify from 'millify';
import redditLogo from '../assets/reddit-logo-16.png'
import fblogo from '../assets/fblogo.ico'
import discordlogo from '../assets/discordlogo.ico'
import tgLogo from '../assets/tglogo.ico'

const CryptoDetail = () => {
  const cryptoData = CryptosData()
  const loadingCryptoData = LoadingCryptosData()

  const { id } = useParams()
  const [cryptoDetails, setCryptoDetails] = useState({})
  const [loading, setLoading] = useState(true)

  let cryptoInfo = []

  useEffect(() => {
    const fetchCrypto = async () => {
      await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`).then((response) => {
        setCryptoDetails(response)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }
    fetchCrypto()
  }, [id])


  if (!loadingCryptoData) {
    for (let i = 0; i < cryptoData?.data.length; i += 1) {
      if (cryptoData.data[i].id === id) {
        cryptoInfo.push(cryptoData?.data[i])
      }
    }
  }

  console.log(cryptoDetails)
  console.log(cryptoInfo)

  return (
    <Box width='80vw'>
      {!loading && <Box
        height="7vh"
        display='flex'
        alignItems="center"
        justifyContent="center"
        backgroundColor="var(--nickel)"
        width="80vw">
        <Typography
          fontSize="30px"
          color="var(--silver)"
          fontFamily="var(--main-font)">
          {cryptoDetails?.data?.market_cap_rank}#  &nbsp;
          {cryptoDetails?.data?.name}
        </Typography>
      </Box>}
      <Box p='3rem' width="100%">
        <Box>
          <Typography display="flex"
            justifyContent="right"
            pr="3rem"
            fontSize="22px"
            color="var(--silver)"
            fontFamily="var(--main-font)">
            {cryptoInfo[0]?.current_price} USD
          </Typography>
          <Typography display="flex"
            justifyContent="right"

            fontSize="22px"
            color="var(--silver)"
            fontFamily="var(--main-font)">
            24H Price change: &nbsp;
            {cryptoInfo[0]?.market_cap_change_percentage_24h.toFixed(2)} %
          </Typography>
        </Box>

        <Typography display="flex" justifyContent="center" fontSize="36px"
          color="var(--silver)"
          fontFamily="var(--main-font)"
        >
          {cryptoDetails?.data?.name} Price Chart
        </Typography>

        <Box display="flex" justifyContent="center" mt="2rem">
          <LineChart id={id} />
        </Box>
        <Typography p="1.5rem" display="flex" justifyContent="center" fontSize="30px"
          color="var(--silver)"
          fontFamily="var(--main-font)"
          borderBottom='1px solid var(--brown-light)'
        >
          What is {cryptoDetails?.data?.name} &nbsp; <img src={cryptoDetails?.data?.image.small} alt="logo" />
        </Typography>
        {!loading && <Typography
          mt='1rem'
          fontSize="16px"
          color="var(--silver)"
          fontFamily="var(--main-font)"
          className="typo__links"
        >
          {parse(cryptoDetails?.data?.description.en)}
        </Typography>}
        <Typography mt='2rem' p="1.5rem" display="flex" justifyContent="center" fontSize="30px"
          color="var(--silver)"
          fontFamily="var(--main-font)" borderBottom='1px solid var(--brown-light)'>
          {cryptoDetails?.data?.name} Statistics
        </Typography>
        <Box display="flex" justifyContent="space-between" mt='2rem'>
          {!loadingCryptoData && <Stack display="flex" justifyContent="center" width="30%" margin="0 auto">
            <Box alignItems="center" height="3rem" p='1rem' display="flex" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <PaidIcon width="20px" /> &nbsp;
                Price to USD</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)"> {cryptoInfo[0]?.current_price}</Typography>
            </Box>
            <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <EqualizerIcon width='20px' /> &nbsp;
                Total Volume</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">

                {millify(cryptoInfo[0]?.total_volume)}</Typography>
            </Box>
            <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <InventoryIcon width='20px' /> &nbsp;
                Total Supply</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)"> {millify(cryptoInfo[0]?.total_supply)}</Typography>
            </Box>
            <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <CurrencyExchangeIcon width="20px" /> &nbsp;
                Circulating Supply</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)"> {Math.round(cryptoInfo[0]?.circulating_supply)}</Typography>
            </Box>
          </Stack>}
          {!loadingCryptoData && <Stack display="flex" justifyContent="center" width="30%" margin="0 auto">
            <Box alignItems="center" height="3rem" p='1rem' display="flex" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <AutoFixHighIcon width="20px" /> &nbsp;
                All Time High</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                {cryptoInfo[0]?.ath} USD</Typography>
            </Box>
            <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <PercentIcon width="20px" /> &nbsp;
                Ath Change Percentage</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)"> {cryptoInfo[0]?.ath_change_percentage.toFixed(2)} %</Typography>
            </Box>
            <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <AirlineStopsIcon width='20px' /> &nbsp;
                24h High</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">

                {cryptoInfo[0]?.high_24h} USD</Typography>
            </Box>
            <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)">
                <SouthEastIcon width='20px' /> &nbsp;
                24h Low</Typography>
              <Typography fontSize="16px"
                color="var(--silver)"
                fontFamily="var(--main-font)"> {cryptoInfo[0]?.low_24h} USD</Typography>
            </Box>
          </Stack>}
        </Box>
        <Box>
          <Typography mt='5rem' display="flex" justifyContent="center" fontSize="30px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            mb="1rem"
          >
            Learn more about {cryptoDetails?.data?.name} &nbsp; <img src={cryptoDetails?.data?.image.small} alt="logo" />
          </Typography>
          {!loading && <Box>
            <Stack display="flex" justifyContent="center" width="70%" margin="0 auto" >
              {cryptoDetails?.data?.links?.homepage[0] && <Box alignItems="center" height="3rem" p='1rem' display="flex" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <HomeIcon width="20px" /> &nbsp;
                  Homepage</Typography>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <a href={cryptoDetails?.data?.links.homepage[0]} target="_blank" rel="noreferrer">{cryptoDetails?.data?.links.homepage[0]}</a>
                </Typography>
              </Box>}
              {cryptoDetails?.data?.links?.subreddit_url && <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <img src={redditLogo} alt='reddit logo' width='20px' /> &nbsp;
                  Subreddit</Typography>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)"
                >
                  <a href={cryptoDetails?.data?.links.subreddit_url} target="_blank" rel="noreferrer">{cryptoDetails?.data?.links.subreddit_url}</a></Typography>
              </Box>}
              {cryptoDetails?.data?.links?.telegram_channel_identifier && <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <img src={tgLogo} alt='reddit logo' width='20px' />
                  &nbsp;
                  Telegram</Typography>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <a href={`https:/t.me/${cryptoDetails?.data?.links.telegram_channel_identifier}`} target="_blank" rel="noreferrer">{cryptoDetails?.data?.links.telegram_channel_identifier}</a></Typography>
              </Box>}
              {cryptoDetails?.data?.links?.chat_url[0] && <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <img src={discordlogo} alt='reddit logo' width='20px' />
                  &nbsp;
                  Discord</Typography>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <a href={cryptoDetails?.data?.links?.chat_url[0]} target="_blank" rel="noreferrer">{cryptoDetails?.data?.links?.chat_url[0]}</a></Typography>
              </Box>}
              {cryptoDetails?.data?.links?.chat_url[1] && <Box p='1rem' display="flex" alignItems="center" justifyContent="space-between" borderBottom='1px solid var(--brown-light)'>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <img src={fblogo} alt='reddit logo' width='20px' />
                  &nbsp;
                  Facebook</Typography>
                <Typography fontSize="16px"
                  color="var(--silver)"
                  fontFamily="var(--main-font)">
                  <a href={cryptoDetails?.data?.links?.chat_url[1]} target="_blank" rel="noreferrer">{cryptoDetails?.data?.links?.chat_url[1]}</a></Typography>
              </Box>}
            </Stack>
          </Box>}
        </Box>
      </Box >
    </Box >
  )
}

export default CryptoDetail