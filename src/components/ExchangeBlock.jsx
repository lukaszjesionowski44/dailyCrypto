import React from 'react'

import { Box, Typography } from '@mui/material'
import millify from 'millify'

const ExchangeBlock = ({ rank, id, link, country, name, icon, tradeVolume, est, score }) => {

  return (
    <a href={link} target="_blank" rel="noreferrer" id={id} >
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
            <Box display="flex" alignItems="center" width="20vw">
              <img src={icon} alt={icon} style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
              <Box display="flex" justifyContent="space-between" width="15vw">
                {name}
              </Box>
            </Box>
          </Typography>
        </Box>
        <Box display="flex" width="10vw">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="8vw"
            p="1rem">
            {millify(tradeVolume)} $
          </Typography>
        </Box>
        <Box display="flex" width="10vw">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="8vw"
            p="1rem">
            {score}
          </Typography>
        </Box>
        <Box display="flex" width="10vw">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="8vw"
            p="1rem">
            {est}
          </Typography>
        </Box>
        <Box display="flex" width="10vw">
          <Typography fontSize="16px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
            width="8vw"
            p="1rem">
            {country}
          </Typography>
        </Box>
      </Box>
    </a>
  )
}


export default ExchangeBlock