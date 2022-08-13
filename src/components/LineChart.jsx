import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Box, Typography, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import axios from 'axios'
import { CircularProgress } from '@mui/material';



const LineChart = ({ id }) => {
  const [priceDetails, setPriceDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState('7')

  Chart.register(CategoryScale);

  const coinTimestamp = []
  const coinPrice = []

  useEffect(() => {
    const fetchCrypto = async () => {
      await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${timeframe}`).then((response) => {
        setPriceDetails(response.data)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }
    fetchCrypto()
  }, [id, timeframe])



  if (!loading) {
    for (let i = 0; i < priceDetails?.prices.length; i += 1) {
      coinPrice.push(priceDetails?.prices[i][1]);
    }

    for (let i = 0; i < priceDetails?.prices.length; i += 1) {
      coinTimestamp.push(new Date(priceDetails?.prices[i][0]).toLocaleDateString());
    }
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#C0B7B1',
        borderColor: '#C0B7B1',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  const handleChange = (e) => {
    setTimeframe(e.target.value)
  }

  return (
    <Box width='100%'>
      <Box width="80%" margin='0 auto'>
        {priceDetails?.prices ? <Line data={data} options={options} /> : <CircularProgress />}
        <FormControl style={{ marginTop: '2rem' }} sx={{ m: 3, minWidth: 150 }} size="small">
          <InputLabel id="demo-simple-select-label" style={{
            fontSize: "17px",
            color: "var(--silver)",
            fontFamily: "var(--main-font)"
          }}>Timeframe</InputLabel>
          <Select style={{
            fontSize: "17px",
            color: "var(--silver)",
            fontFamily: "var(--main-font)"
          }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeframe}
            label="Timeframe"
            onChange={handleChange}
          >
            <MenuItem style={{
              fontSize: "17px",
              color: "var(--gray)",
              fontFamily: "var(--main-font)"
            }} value={'1'}>1 Day</MenuItem>
            <MenuItem style={{
              fontSize: "17px",
              color: "var(--gray)",
              fontFamily: "var(--main-font)"
            }} value={'7'}>7 Days</MenuItem>
            <MenuItem style={{
              fontSize: "17px",
              color: "var(--gray)",
              fontFamily: "var(--main-font)"
            }} value={'30'}>30 Days</MenuItem>
            <MenuItem style={{
              fontSize: "17px",
              color: "var(--gray)",
              fontFamily: "var(--main-font)"
            }} value={'365'}>1 Year</MenuItem>
            <MenuItem style={{
              fontSize: "17px",
              color: "var(--gray)",
              fontFamily: "var(--main-font)"
            }} value={'max'}>Max</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box >

  )
}

export default LineChart