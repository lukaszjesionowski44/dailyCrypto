import React from 'react'

import { Box, Typography } from '@mui/material'

import { CryptosData, LoadingCryptosData } from '../context/CryptoContext'
import { CryptoBlock } from '../components'

import millify from "millify";

const GainersLosers = () => {
  const loading = LoadingCryptosData()
  const cryptos = CryptosData()


  let bigWinner = {};
  let bigLoser = {}

  if (!loading) {
    cryptos.data.filter((coin) => {
      if (bigWinner.price_change_percentage_24h === undefined || bigWinner.price_change_percentage_24h < +coin.price_change_percentage_24h) {
        bigWinner = coin

      }
      if (bigLoser.price_change_percentage_24h === undefined || bigLoser.price_change_percentage_24h > +coin.price_change_percentage_24h) {
        bigLoser = coin
      }
    })
  }


  return (
    <Box display="flex" flexDirection="column" flex="0.5" flexWrap="wrap" justifyContent="center" alignItems="center">
      <Box display='flex' alignItems="center" justifyContent="center" p="1rem" color="var(--silver)">
        <Typography fontSize="30px" fontFamily="var(--main-font)">Today's winners & losers</Typography>
      </Box>
      <Box width="auto" display="flex">

        <CryptoBlock className="winner"
          key={bigWinner.id}
          id={bigWinner.id}
          name={bigWinner.name}
          symbol={bigWinner.symbol}
          icon={bigWinner.image}
          price={millify(bigWinner.current_price, { precision: 2, decimalSeparator: '.' })}
          change={millify(bigWinner.price_change_percentage_24h)}
          oneHourChange={millify(bigWinner.price_change_percentage_1h_in_currency)}
          marketcap={millify(bigWinner.market_cap)}
          volume={millify(bigWinner.total_volume)} />

        <CryptoBlock
          id={bigLoser.id}
          key={bigLoser.id}
          name={bigLoser.name}
          symbol={bigLoser.symbol}
          icon={bigLoser.image}
          price={millify(bigLoser.current_price, { precision: 2, decimalSeparator: '.' })}
          change={millify(bigLoser.price_change_percentage_24h)}
          marketcap={millify(bigLoser.market_cap)}
          oneHourChange={millify(bigLoser.price_change_percentage_1h_in_currency)}
          volume={millify(bigLoser.total_volume)} />
      </Box>
    </Box >
  )
}

export default GainersLosers