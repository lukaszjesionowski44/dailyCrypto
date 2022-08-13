import { Box, Typography } from '@mui/material'
import { CryptoNews, GainersLosers, Top10Cryptos } from '../components'
import { CryptosData, LoadingCryptosData } from '../context/CryptoContext'
import React from 'react'

const MainPage = () => {

  const cryptos = CryptosData()
  const loading = LoadingCryptosData()

  console.log(cryptos)
  return (

    <Box width="80vw" >
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
          <div style={{ display: 'flex' }}>Today is &nbsp;{cryptos.data[0].market_cap_change_percentage_24h < 0 ? <p style={{ color: '#BD3333' }}> red</p> : <p style={{ color: '#92EC75' }}> green</p>}
          </div>
        </Typography>
      </Box>}
      {!loading && <Box display="flex" height="47vh" >
        <Top10Cryptos />
        <div style={{ border: '1px solid var(--brown-light)', height: '45vh', marginTop: '2rem' }} />
        <GainersLosers />
      </Box>
      }
      <CryptoNews />

    </Box>
  )
}

export default MainPage