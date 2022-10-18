import { Box, Typography } from "@mui/material";
import { CryptoNews, GainersLosers, Top10Cryptos } from "../components";
import {
  CryptosData,
  LoadingCryptosData,
  LoadingNewsData,
} from "../context/CryptoContext";
import React from "react";
import { useMediaQuery } from "@mui/material";

const MainPage = () => {
  const cryptos = CryptosData();
  const loading = LoadingCryptosData();
  const loadingNews = LoadingNewsData();

  const lg = useMediaQuery("(max-width:1350px)");

  console.log(cryptos);
  return (
    <Box className="main__content_wrapper">
      {!loading && (
        <Box
          height="7vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="var(--nickel)"
          className="main__content_media"
        >
          <Typography
            fontSize="30px"
            color="var(--silver)"
            fontFamily="var(--main-font)"
          >
            <div style={{ display: "flex" }}>
              Today is &nbsp;
              {cryptos.data[0].market_cap_change_percentage_24h < 0 ? (
                <p style={{ color: "#BD3333" }}> red</p>
              ) : (
                <p style={{ color: "#92EC75" }}> green</p>
              )}
            </div>
          </Typography>
        </Box>
      )}
      {!loading && (
        <Box height={!lg ? "fit-content" : "130vh"}>
          <Box display="flex" height="50vh" flexDirection={lg ? 'column': 'row'}>
            <Top10Cryptos />
            <div
              style={{
                border: "1px solid var(--brown-light)",
                height: "45vh",
                marginTop: "2rem",
              }}
            />
            <GainersLosers />
          </Box>
        </Box>
      )}
      {!loadingNews && <CryptoNews />}
    </Box>
  );
};

export default MainPage;
