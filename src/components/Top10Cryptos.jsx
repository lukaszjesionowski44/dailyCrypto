import { Box, Typography } from '@mui/material'
import { CryptoBlock } from '../components'
import Slider from "react-slick";
import { CryptosData, LoadingCryptosData } from '../context/CryptoContext'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material'

import millify from "millify";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Top10Cryptos = () => {
  const allCryptos = CryptosData()
  const loading = LoadingCryptosData()
  let cryptos;

  if (!loading) {
    cryptos = allCryptos.data.slice(0, 10)
  }



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    mobileFirst: true,
    responsive: [
      {
        breakpoints: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  }

  console.log(cryptos)

  const lg = useMediaQuery('(max-width:1350px)')

  return (
    <Box display="flex" flexDirection="column" flex="0.5" justifyContent="center" alignItems="center">
      <Box p="1rem" color="var(--silver)">
        <Typography fontSize="30px" fontFamily="var(--main-font)">Top 10 Cryptocurrencies</Typography>
      </Box>
      <Box width={!lg ? '30vw' : '55vw'}>
        <Box display="flex" alignItems="center" justifyContent="right">
          <Link to='/cryptocurrencies' style={{ textDecoration: 'none', color: 'var(--silver)' }}>
            All cryptocurrencies
          </Link>
          <ArrowForwardIcon style={{ width: "15px", color: 'var(--silver)', marginLeft: '0.5rem' }} />
        </Box>

        {!loading && <Slider {...settings}>
          {cryptos.map((coin) => {
            return (
              <CryptoBlock
                id={coin.id}
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                icon={coin.image}
                price={millify(coin.current_price, { precision: 2, decimalSeparator: '.' })}
                oneHourChange={millify(coin.price_change_percentage_1h_in_currency)}
                change={millify(coin.price_change_percentage_24h)}
                marketcap={millify(coin.market_cap)}
                volume={millify(coin.total_volume)} />
            )
          })}
        </Slider>}
      </Box>
    </Box>
  )
}

export default Top10Cryptos