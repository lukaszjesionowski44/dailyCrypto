import React, {useState} from "react";

import { Link } from "react-router-dom";

import { Stack, Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material"

import "../style.css";

const Navbar = () => {
const mobile = useMediaQuery("(max-width:750px)");


  return (
    <nav className="navigation__wrapper">
      {!mobile && (
        <Stack
          height="100%"
          width="20vw"
          backgroundColor="var(--nickel)"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box p="3rem 0rem">
            <Link
              className="navbar__link-logo"
              to="/"
              style={{ fontFamily: "var(--main-font)" }}
            >
              DailyCrypto
            </Link>
          </Box>
          <Box p="0.5rem 0rem" width="100%">
            <Link className="navbar__link" to="/cryptocurrencies">
              <Typography
                sx={{
                  fontSize: { md: "18px", lg: "24px", xl: "32px" },
                  fontFamily: "var(--main-font)",
                }}
              >
                Cryptocurrencies
              </Typography>
            </Link>
          </Box>
          <Box p="0.5rem 0rem" width="100%">
            <Link className="navbar__link" to="/news">
              <Typography
                sx={{
                  fontSize: { md: "18px", lg: "24px", xl: "32px" },
                  fontFamily: "var(--main-font)",
                }}
              >
                News
              </Typography>
            </Link>
          </Box>

          <Box p="0.5rem 0rem" width="100%">
            <Link className="navbar__link" to="/exchanges">
              <Typography
                sx={{
                  fontSize: { md: "18px", lg: "24px", xl: "32px" },
                  fontFamily: "var(--main-font)",
                }}
              >
                Exchanges
              </Typography>
            </Link>
          </Box>
        </Stack>
      )}
      
    </nav>
  );
};

export default Navbar;
